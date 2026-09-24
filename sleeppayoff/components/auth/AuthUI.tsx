'use client';

// Piezas del login/auth — spec en docs/sistema/26-AUTH-MODERNO.md.
// Método elegido (ESTADO.md → Decisiones técnicas): magic link/OTP por email como
// primario (sin contraseña) + "Continuar con Google" como atajo. Supabase Auth real
// se conecta en el Paso 6 — esta pantalla es UI funcional con estado local (C3ter).

import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Loader2, X } from 'lucide-react';

// Spinner inline para el texto del CTA mientras carga — el cambio de texto solo
// no basta como feedback de carga (heurística 1).
export function Girando() {
  return <Loader2 size={16} className="animate-spin" aria-hidden="true" />;
}

export function CerrarButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cerrar y volver al inicio"
      className="flex size-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]"
    >
      <X size={20} />
    </button>
  );
}

// Sacude el hijo brevemente para señalar un error de validación (email/código
// inválido) sin depender de un botón deshabilitado — el CTA siempre está vivo.
export function Sacudida({ activar, children }: { activar: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div key={activar} animate={activar > 0 && !reduce ? { x: [0, -8, 8, -6, 6, 0] } : undefined} transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  );
}

export function HorizonteMini() {
  return (
    <div
      aria-hidden="true"
      className="mt-3 h-1.5 w-20 rounded-full"
      style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
    />
  );
}

export function AuthHeadline({ children, subcopy }: { children: ReactNode; subcopy: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] [font-family:var(--font-display)]">
        {children}
      </h1>
      <HorizonteMini />
      <p className="mt-3 text-sm text-[var(--text-secondary)]">{subcopy}</p>
    </motion.div>
  );
}

// Escalona la entrada de los bloques bajo el headline (50-80ms entre ellos —
// baseline no negociable del SO en pantallas nuevas).
export function Entra({ delay, children }: { delay: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.25, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function EmailField({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <input
      type="email"
      inputMode="email"
      autoComplete="email"
      autoFocus
      placeholder="tu@correo.com"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Correo electrónico"
      id="login-email"
      className="h-14 w-full rounded-[var(--radius-button)] border border-[color-mix(in_oklab,var(--text-tertiary)_28%,transparent)] bg-[var(--surface)] px-4 text-base text-[var(--text-primary)] outline-none transition-colors duration-150 placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] disabled:opacity-50"
    />
  );
}

// Combo de código (26-AUTH-MODERNO §MAGIC LINK/OTP): un dígito por casilla,
// autoavanza y permite pegar el código completo de una vez. Longitud real
// del token que manda Supabase: 8 dígitos (verificado en producción).
export function CodeInput({
  value,
  onChange,
  disabled,
  longitud = 8,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  longitud?: number;
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digitos = value.padEnd(longitud, ' ').split('').slice(0, longitud);

  const setDigito = (i: number, d: string): void => {
    const limpio = d.replace(/[^0-9]/g, '').slice(-1);
    const casillas = value.padEnd(longitud, ' ').split('');
    casillas[i] = limpio || ' ';
    onChange(casillas.join('').trimEnd());
    if (limpio && i < longitud - 1) refs.current[i + 1]?.focus();
  };

  const pegar = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    const texto = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, longitud);
    if (texto.length > 1) {
      e.preventDefault();
      onChange(texto);
      refs.current[Math.min(texto.length, longitud - 1)]?.focus();
    }
  };

  const compacto = longitud > 6;

  return (
    <div className="flex justify-center gap-1.5">
      {digitos.map((d, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          disabled={disabled}
          value={d.trim()}
          onChange={(e) => setDigito(i, e.target.value)}
          onPaste={pegar}
          aria-label={`Dígito ${i + 1} del código`}
          className={`h-14 rounded-[var(--radius-button)] border border-[color-mix(in_oklab,var(--text-tertiary)_28%,transparent)] bg-[var(--surface)] text-center font-bold tabular-nums text-[var(--text-primary)] outline-none transition-colors duration-150 focus:border-[var(--accent)] disabled:opacity-50 ${
            compacto ? 'w-8 text-base' : 'w-11 text-xl'
          }`}
        />
      ))}
    </div>
  );
}

// Sin backend conectado (Paso 6), el botón se marca explícitamente "Pronto":
// no simula un login de Google que no ocurre (regla anti-elemento-muerto, 03).
export function GoogleButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      whileTap={disabled || reduce ? undefined : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className="flex h-14 w-full items-center justify-center gap-3 rounded-[var(--radius-button)] border border-dashed border-[color-mix(in_oklab,var(--text-tertiary)_20%,transparent)] bg-transparent text-sm font-medium text-[var(--text-tertiary)] opacity-70 transition-opacity duration-150 disabled:opacity-40"
    >
      <GoogleG />
      Continuar con Google
      <span className="rounded-full bg-[color-mix(in_oklab,var(--text-tertiary)_16%,transparent)] px-2 py-0.5 text-xs font-semibold text-[var(--text-tertiary)]">
        Pronto
      </span>
    </motion.button>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18Z"
      />
      <path fill="#FBBC05" d="M3.95 10.7a5.4 5.4 0 0 1 0-3.4V4.97H.96a9 9 0 0 0 0 8.06l2.99-2.33Z" />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.97L3.95 7.3C4.66 5.17 6.65 3.58 9 3.58Z"
      />
    </svg>
  );
}

export function Divisor() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-[color-mix(in_oklab,var(--text-tertiary)_20%,transparent)]" />
      <span className="text-xs font-medium text-[var(--text-tertiary)]">o</span>
      <div className="h-px flex-1 bg-[color-mix(in_oklab,var(--text-tertiary)_20%,transparent)]" />
    </div>
  );
}
