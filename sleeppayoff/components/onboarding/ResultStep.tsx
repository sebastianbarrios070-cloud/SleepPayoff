'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Moon, TrendingDown, ShieldCheck } from 'lucide-react';
import { FooterCta, PrimaryButton } from './OnboardingUI';

// La primera victoria (regla 6 de 02B): el resultado real, calculado con las
// respuestas del propio usuario — nunca un número inventado ni de relleno.
export function ResultStep({
  deudaHoras,
  horaDesconexion,
  onVerPlan,
  error,
  puntos,
}: {
  deudaHoras: number;
  horaDesconexion: string;
  onVerPlan: () => void;
  error?: boolean;
  puntos?: number;
}) {
  const reduce = useReducedMotion();
  const [contado, setContado] = useState(reduce ? deudaHoras : 0);
  const [listo, setListo] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    const inicio = performance.now();
    const duracion = 900;
    let raf: number;
    const tick = (t: number): void => {
      const p = Math.min(1, (t - inicio) / duracion);
      setContado(Number((deudaHoras * p).toFixed(1)));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setListo(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [deudaHoras, reduce]);

  return (
    <div className="flex flex-1 flex-col justify-center px-5 pt-6 pb-10">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]"
      >
        Tu resultado
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="mt-2 text-center text-2xl font-bold text-[var(--text-primary)] [font-family:var(--font-display)]"
      >
        Tu deuda de sueño de hoy
      </motion.h1>
      {puntos !== undefined && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-1 text-center text-xs text-[var(--text-tertiary)]"
        >
          Perfil completo — {puntos} pts de precisión
        </motion.p>
      )}
      <div
        aria-hidden="true"
        className="mx-auto mt-3 h-1 w-16 rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: listo ? [1, 1.035, 1] : 1 }}
        transition={
          listo
            ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
            : { delay: 0.15 }
        }
        className="mx-auto mt-6 w-full max-w-xs rounded-[var(--radius-card)] border p-6 text-center"
        style={{
          borderColor: 'transparent',
          background:
            'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent))) border-box',
          borderWidth: 1.5,
          boxShadow: listo ? '0 0 32px -4px color-mix(in oklab, var(--accent) 45%, transparent)' : undefined,
        }}
      >
        <p
          className="text-6xl font-bold tabular-nums"
          style={{
            fontFamily: 'var(--font-display)',
            background:
              'linear-gradient(90deg, var(--accent) 0%, var(--accent) 35%, var(--accent-2, var(--accent)) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {contado.toFixed(1)}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">horas de deuda</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-6 flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]">
          <Moon size={20} color="var(--accent)" />
        </span>
        <div>
          <p className="text-sm font-bold text-[var(--text-primary)]">Desconéctate hoy a las {horaDesconexion}</p>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">Así arrancas a pagar tu deuda desde esta noche</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-3 flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]">
          <TrendingDown size={20} color="var(--accent)" />
        </span>
        <div>
          <p className="text-sm font-bold text-[var(--text-primary)]">Tu plan de 3 días para pagar esas {deudaHoras.toFixed(1)}h</p>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">Siestas y horarios calculados con tus propios datos</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-3 flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]">
          <ShieldCheck size={20} color="var(--accent)" />
        </span>
        <div>
          <p className="text-sm font-bold text-[var(--text-primary)]">Sin wearables, sin fases REM</p>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">Solo tus datos reales — cero falsas promesas</p>
        </div>
      </motion.div>

      <FooterCta>
        {error && (
          <p className="mb-3 text-center text-xs font-medium" style={{ color: '#ff5c5c' }}>
            No pudimos abrir tu plan. Tus respuestas están guardadas — intenta de nuevo.
          </p>
        )}
        <PrimaryButton onClick={onVerPlan}>{error ? 'Reintentar' : 'Ver mi plan completo'}</PrimaryButton>
      </FooterCta>
    </div>
  );
}
