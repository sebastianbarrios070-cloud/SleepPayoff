'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check } from 'lucide-react';

export interface LineaCarga {
  texto: string;
}

// B1/B2 de 50-DISENO-ONBOARDING-PAYWALL.md: labor illusion — el plan se arma a la vista,
// con mesetas (no un fill lineal) y líneas personalizadas con las respuestas reales.
export function LoadingStep({
  lineas,
  onComplete,
}: {
  lineas: LineaCarga[];
  onComplete: () => void;
}) {
  const reduce = useReducedMotion();
  const [activa, setActiva] = useState(0);
  const total = lineas.length;
  const pct = Math.round(((activa + 1) / total) * 100);

  useEffect(() => {
    if (activa >= total - 1) {
      const t = setTimeout(onComplete, reduce ? 300 : 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setActiva((a) => a + 1), reduce ? 200 : 750);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activa]);

  const circunferencia = 2 * Math.PI * 52;

  return (
    <div
      className="flex flex-1 flex-col items-center justify-center px-8"
      aria-live="polite"
      aria-busy={activa < total - 1}
    >
      <div className="relative flex size-28 items-center justify-center">
        <svg width={112} height={112} viewBox="0 0 112 112" className="-rotate-90">
          <circle cx={56} cy={56} r={52} fill="none" strokeWidth={9} stroke="color-mix(in oklab, var(--accent) 14%, transparent)" />
          <motion.circle
            cx={56}
            cy={56}
            r={52}
            fill="none"
            strokeWidth={9}
            strokeLinecap="round"
            stroke="var(--accent)"
            strokeDasharray={circunferencia}
            animate={{ strokeDashoffset: circunferencia - (circunferencia * pct) / 100 }}
            transition={{ duration: reduce ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute text-2xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
          {pct}%
        </span>
      </div>

      <h1 className="mt-6 text-2xl font-bold text-[var(--text-primary)] [font-family:var(--font-display)]">
        Calculando tu deuda de sueño…
      </h1>

      <ul className="mt-8 flex w-full max-w-xs flex-col gap-4">
        {lineas.map((l, i) => {
          const estado = i < activa ? 'hecha' : i === activa ? 'activa' : 'pendiente';
          return (
            <motion.li
              key={l.texto}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: estado === 'pendiente' ? 0.4 : 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3"
            >
              {estado === 'hecha' ? (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
                  <Check size={12} color="var(--bg)" strokeWidth={3} />
                </span>
              ) : estado === 'activa' ? (
                <motion.span
                  animate={reduce ? {} : { opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="size-5 shrink-0 rounded-full bg-[var(--accent)]"
                />
              ) : (
                <span className="size-5 shrink-0 rounded-full border-2 border-[color-mix(in_oklab,var(--text-tertiary)_45%,transparent)]" />
              )}
              <span className="text-sm text-[var(--text-primary)]">{l.texto}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
