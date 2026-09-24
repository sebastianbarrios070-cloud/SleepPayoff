'use client';

// Paywall de SleepPayoff — Paso 3 de la secuencia maestra.
// Especificación: docs/sistema/50-DISENO-ONBOARDING-PAYWALL.md §C.
// Headline usa el DESEO #1 de FICHA-AVATAR.md; el microcopy de confianza responde
// la objeción #3 ("es una suscripción más que voy a olvidar cancelar").
// Precio/trial: ESTADO.md → $5.00/mes o $36.00/año ($3.00/mes), 2 días de prueba.
// Pasarela real (Stripe) se conecta en el Paso 6 (servicios externos) — el CTA de
// aquí simula el flujo con estado local, nunca un checkout falso (C3ter).

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { CerrarButton, Headline, PlanCard, TimelineTrial, TrustRow } from '@/components/paywall/PaywallUI';
import { PrimaryButton } from '@/components/onboarding/OnboardingUI';

type PlanId = 'anual' | 'mensual';

const PLANES: Record<PlanId, { nombre: string; precioMes: number; totalAnual?: number; badge?: string }> = {
  anual: { nombre: 'Anual', precioMes: 3, totalAnual: 36, badge: 'AHORRA 40%' },
  mensual: { nombre: 'Mensual', precioMes: 5 },
};

export default function PaywallPage() {
  return (
    <Suspense fallback={null}>
      <PaywallFlow />
    </Suspense>
  );
}

function PaywallFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();

  const planQuery = searchParams.get('plan');
  const planInicial: PlanId = planQuery === 'mensual' ? 'mensual' : 'anual';
  const deuda = Number(searchParams.get('deuda') ?? '4.2');
  const numRespuestas = Number(searchParams.get('respuestas') ?? '7');

  const [plan, setPlan] = useState<PlanId>(planInicial);
  const [procesando, setProcesando] = useState(false);
  const [errorPago, setErrorPago] = useState(false);
  const [deudaContada, setDeudaContada] = useState(reduce ? deuda : 0);

  useEffect(() => {
    if (reduce) return;
    const inicio = performance.now();
    const duracion = 700;
    let raf: number;
    const tick = (t: number): void => {
      const p = Math.min(1, (t - inicio) / duracion);
      setDeudaContada(Number((deuda * p).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [deuda, reduce]);

  const fechas = useMemo(() => {
    const hoy = new Date();
    const dia1 = new Date(hoy);
    dia1.setDate(hoy.getDate() + 1);
    const dia2 = new Date(hoy);
    dia2.setDate(hoy.getDate() + 2);
    const fmt = (d: Date) => d.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' });
    return { dia1: fmt(dia1), dia2: fmt(dia2) };
  }, []);

  const seleccionado = PLANES[plan];
  const montoCobro = plan === 'anual' ? `$${seleccionado.totalAnual!.toFixed(2)}` : `$${seleccionado.precioMes.toFixed(2)}`;
  const periodoCobro = plan === 'anual' ? 'al año' : 'al mes';

  const cerrar = (): void => {
    if (window.history.length > 1) router.back();
    else router.push('/onboarding');
  };

  const ahoraNo = (): void => router.push('/');

  const irALogin = (): void => router.push('/entrar');

  const comenzar = (): void => {
    setErrorPago(false);
    setProcesando(true);
    // Simulación local: la pasarela real (Stripe) se conecta en Paso 6 — nunca
    // se muestra un checkout falso ni se cobra nada aquí (C3ter).
    setTimeout(() => {
      try {
        router.push('/entrar');
      } catch {
        setProcesando(false);
        setErrorPago(true);
      }
    }, 700);
  };

  return (
    <div
      className="flex min-h-dvh flex-col text-[var(--text-primary)] [font-family:var(--font-body)]"
      style={{
        background:
          'radial-gradient(560px 420px at 12% -6%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 62%), var(--bg)',
      }}
    >
      <div className="flex items-center justify-between px-3 pt-2">
        <CerrarButton onClick={cerrar} />
        <span />
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pb-4">
          <Headline subcopy={`Hecho con tus ${numRespuestas} respuestas — la neblina de las 2 PM no se va sola`}>
            Tu plan para pagar tus <span style={{ color: 'var(--accent)' }}>{deudaContada.toFixed(1)}h de deuda</span> está listo
          </Headline>

          <TimelineTrial
            nodos={[
              { estado: 'hecho', titulo: 'Hoy — acceso completo' },
              { estado: 'aviso', titulo: `Día 1 (${fechas.dia1}) — te avisamos por notificación` },
              { estado: 'cobro', titulo: `Día 2 (${fechas.dia2}) — 1er cobro: ${montoCobro} ${periodoCobro}`, caption: 'Cancela antes sin costo' },
            ]}
          />

          <div className="mt-4 flex flex-col gap-3 px-5">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: reduce ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlanCard
                nombre="Anual"
                precioMes="$3.00/mes"
                detalle="Se cobra $36.00/año"
                badge="AHORRA 40%"
                selected={plan === 'anual'}
                onClick={() => setPlan('anual')}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlanCard
                nombre="Mensual"
                precioMes="$5.00/mes"
                selected={plan === 'mensual'}
                onClick={() => setPlan('mensual')}
              />
            </motion.div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8"
          style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: reduce ? 0 : 0.2 }}
        className="sticky bottom-0 border-t border-[color-mix(in_oklab,var(--text-tertiary)_16%,transparent)] px-5 pt-4 backdrop-blur-md"
        style={{ background: 'color-mix(in oklab, var(--bg) 88%, transparent)' }}
      >
        {errorPago && (
          <p className="mb-2 text-center text-xs font-medium" style={{ color: 'var(--error)' }}>
            No pudimos abrir tu prueba — intenta de nuevo, no se hizo ningún cargo.
          </p>
        )}
        <AnimatePresence mode="wait">
          <motion.div key={plan} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
            <PrimaryButton onClick={comenzar} disabled={procesando}>
              {procesando ? 'Un momento…' : errorPago ? 'Reintentar' : 'Empezar mi prueba de 2 días'}
            </PrimaryButton>
          </motion.div>
        </AnimatePresence>
        <p className="mt-2 text-center text-xs text-[var(--text-secondary)]">
          Garantía: cancela en 1 tap, sin preguntas
        </p>
        <div className="mt-3 flex items-center justify-center gap-4 pb-1">
          <button type="button" onClick={ahoraNo} className="min-h-11 px-2 text-sm font-medium text-[var(--text-tertiary)]">
            Ahora no
          </button>
          <span className="text-[var(--text-tertiary)]">·</span>
          <button type="button" onClick={irALogin} className="min-h-11 px-2 text-sm font-medium text-[var(--text-tertiary)]">
            Ya compré, iniciar sesión
          </button>
        </div>
        <TrustRow>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} color="var(--text-tertiary)" /> Sin wearables, sin sensores · Pago seguro con Stripe
          </span>
        </TrustRow>
        <div className="pb-[max(12px,env(safe-area-inset-bottom))]" />
      </motion.div>
    </div>
  );
}
