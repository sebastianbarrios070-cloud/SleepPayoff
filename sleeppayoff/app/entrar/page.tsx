'use client';

// Login/Auth de SleepPayoff — Paso 4 de la secuencia maestra.
// Especificación: docs/sistema/26-AUTH-MODERNO.md.
// Método elegido (ESTADO.md → Decisiones técnicas, decisión técnica interna, no se
// le pregunta al usuario): magic link/OTP por email como primario — sin contraseña,
// combo enlace+código en el mismo correo — + "Continuar con Google" como atajo.
// Supabase Auth real se conecta en el Paso 6; aquí la UI es funcional con estado
// local y mensajes anti-enumeración (nunca revela si el correo existe o no).

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AuthHeadline, CerrarButton, CodeInput, Divisor, EmailField, Entra, Girando, GoogleButton, Sacudida } from '@/components/auth/AuthUI';
import { PrimaryButton } from '@/components/onboarding/OnboardingUI';

type Paso = 'correo' | 'codigo';

const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EntrarPage() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [paso, setPaso] = useState<Paso>('correo');
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const [sacudida, setSacudida] = useState(0);
  const [googleInfo, setGoogleInfo] = useState(false);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const enviarCodigo = (): void => {
    if (cargando) return;
    if (!EMAIL_VALIDO.test(email)) {
      setError('Escribe un correo con formato válido (ej. tu@correo.com)');
      setSacudida((s) => s + 1);
      return;
    }
    setCargando(true);
    setError(null);
    // Simulación local: Supabase `signInWithOtp` real se conecta en el Paso 6.
    // Anti-enumeración (26): esta respuesta es SIEMPRE la misma, exista o no la cuenta.
    setTimeout(() => {
      setCargando(false);
      setPaso('codigo');
      setCooldown(30);
    }, 700);
  };

  const confirmarCodigo = (): void => {
    if (cargando) return;
    if (codigo.length !== 6) {
      setError('Escribe los 6 dígitos de tu código');
      setSacudida((s) => s + 1);
      return;
    }
    setCargando(true);
    setError(null);
    setTimeout(() => {
      // Mock: el código "000000" simula un código incorrecto/expirado — la
      // verificación real (`verifyOtp`) llega con Supabase en el Paso 6.
      if (codigo === '000000') {
        setCargando(false);
        setError('Código inválido — revisa los 6 dígitos o pide uno nuevo abajo');
        setSacudida((s) => s + 1);
        return;
      }
      setCargando(false);
      router.push('/app');
    }, 600);
  };

  const reenviar = (): void => {
    if (cooldown > 0 || cargando) return;
    setCodigo('');
    setError(null);
    enviarCodigo();
  };

  return (
    <div
      className="relative flex min-h-dvh flex-col text-[var(--text-primary)] [font-family:var(--font-body)]"
      style={{
        background:
          'radial-gradient(600px 460px at 10% 0%, color-mix(in oklab, var(--accent) 26%, transparent), transparent 65%), radial-gradient(600px 520px at 92% 100%, color-mix(in oklab, var(--accent-2, var(--accent)) 24%, transparent), transparent 68%), var(--bg)',
      }}
    >
      <div className="absolute left-3 top-2 z-10">
        <CerrarButton onClick={() => router.push('/')} />
      </div>

      <div className="flex flex-1 flex-col justify-center px-5 pb-10">
        <AnimatePresence mode="wait">
          {paso === 'correo' && (
            <motion.form
              key="correo"
              onSubmit={(e) => {
                e.preventDefault();
                enviarCodigo();
              }}
              initial={{ opacity: 0, x: reduce ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -24 }}
              transition={{ duration: reduce ? 0.15 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <AuthHeadline subcopy="Te mandamos un código a tu correo — sin contraseñas que recordar.">
                Guarda tu plan de <span style={{ color: 'var(--accent)' }}>2 días</span>
              </AuthHeadline>

              <Entra delay={0.08}>
                <Sacudida activar={sacudida}>
                  <div className="mt-8 flex flex-col gap-3">
                    <EmailField value={email} onChange={setEmail} disabled={cargando} />
                    {error && (
                      <p className="text-xs font-medium" style={{ color: 'var(--error)' }}>
                        {error}
                      </p>
                    )}
                    <PrimaryButton type="submit" disabled={cargando}>
                      <span className="flex items-center gap-2">
                        {cargando && <Girando />}
                        {cargando ? 'Enviando…' : 'Enviarme el código'}
                      </span>
                    </PrimaryButton>
                  </div>
                </Sacudida>
              </Entra>

              <Entra delay={0.14}>
                <div className="mt-5">
                  <Divisor />
                </div>
              </Entra>

              <Entra delay={0.2}>
                <div className="mt-5">
                  <GoogleButton
                    onClick={() => {
                      setGoogleInfo(true);
                      requestAnimationFrame(() => document.getElementById('login-email')?.focus());
                    }}
                    disabled={cargando}
                  />
                  {googleInfo && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-center text-xs text-[var(--text-tertiary)]"
                    >
                      Entrar con Google se activa junto con tu cuenta — usa tu correo por ahora
                    </motion.p>
                  )}
                </div>
              </Entra>

              <p className="mt-6 text-center text-xs text-[var(--text-tertiary)]">
                Al continuar aceptas los{' '}
                <Link href="/terminos" className="underline underline-offset-2">
                  Términos
                </Link>{' '}
                y la{' '}
                <Link href="/privacidad" className="underline underline-offset-2">
                  Privacidad
                </Link>
                .
              </p>
            </motion.form>
          )}

          {paso === 'codigo' && (
            <motion.form
              key="codigo"
              onSubmit={(e) => {
                e.preventDefault();
                confirmarCodigo();
              }}
              initial={{ opacity: 0, x: reduce ? 0 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -24 }}
              transition={{ duration: reduce ? 0.15 : 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <AuthHeadline subcopy={`Escribimos un código a ${email} — válido por 10 minutos.`}>
                Revisa tu <span style={{ color: 'var(--accent)' }}>correo</span>
              </AuthHeadline>

              <Entra delay={0.08}>
                <Sacudida activar={sacudida}>
                  <div className="mt-8 flex flex-col gap-4">
                    <CodeInput value={codigo} onChange={setCodigo} disabled={cargando} />
                    {error && (
                      <p className="text-center text-xs font-medium" style={{ color: 'var(--error)' }}>
                        {error}
                      </p>
                    )}
                    <PrimaryButton type="submit" disabled={cargando}>
                      <span className="flex items-center gap-2">
                        {cargando && <Girando />}
                        {cargando ? 'Verificando…' : 'Confirmar código'}
                      </span>
                    </PrimaryButton>
                  </div>
                </Sacudida>
              </Entra>

              <Entra delay={0.16}>
                <div className="mt-5 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={reenviar}
                    disabled={cooldown > 0 || cargando}
                    className="min-h-11 px-2 text-sm font-medium text-[var(--text-tertiary)] disabled:opacity-50"
                  >
                    {cooldown > 0 ? `Reenviar en ${cooldown}s` : 'Reenviar código'}
                  </button>
                  <span className="text-[var(--text-tertiary)]">·</span>
                  <button
                    type="button"
                    onClick={() => {
                      setPaso('correo');
                      setCodigo('');
                      setError(null);
                    }}
                    className="min-h-11 px-2 text-sm font-medium text-[var(--text-tertiary)]"
                  >
                    Usar otro correo
                  </button>
                </div>
              </Entra>

              <p className="mt-6 text-center text-xs text-[var(--text-tertiary)]">
                ¿Compraste y no te llega? Revisa spam o vuelve a intentar en unos minutos.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
