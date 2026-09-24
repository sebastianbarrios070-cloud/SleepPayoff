'use client';

// Semana — protagonista: insight semanal (NO repite el plan de hoy, 17-VISUALIZACION-DATOS:
// máximo dato, mínima tinta, sin grid ni 3D). Pantalla secundaria del Paso 5.

import { motion, useReducedMotion } from 'motion/react';
import { useSleepData } from '@/lib/sleepData';
import { Entra, InsightCard, PantallaTitulo } from '@/components/app/AppUI';

export default function SemanaPage() {
  const { listo, estado, promedio7, promedioAnterior7 } = useSleepData();
  const reduce = useReducedMotion();
  if (!listo) return null;

  const ultimos7 = ultimosNDias(estado.noches, 7);
  const max = 10;
  const altoContenedor = 128; // h-32
  const diffSemana = promedio7 !== null && promedioAnterior7 !== null ? promedio7 - promedioAnterior7 : null;

  return (
    <div>
      <PantallaTitulo subcopy="Tu patrón de los últimos 7 días">Semana</PantallaTitulo>

      <Entra delay={0.06}>
        <div className="mx-5 mt-5 rounded-[var(--radius-card)] bg-[var(--surface)] p-5">
          <div className="flex h-32 items-end justify-between gap-2">
            {ultimos7.map((n, i) => (
              <div key={n?.fecha ?? `vacio-${i}`} className="flex flex-1 flex-col items-center gap-1.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: Math.max(4, ((n?.horas ?? 0) / max) * altoContenedor) }}
                  transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-full"
                  style={{
                    background: n ? 'linear-gradient(180deg, var(--accent), var(--accent-2, var(--accent)))' : 'transparent',
                  }}
                />
                <span className="text-xs font-medium text-[var(--text-tertiary)]">{etiquetaDia(n?.fecha)}</span>
              </div>
            ))}
          </div>
        </div>
      </Entra>

      <Entra delay={0.14}>
        <div className="mx-5 mt-4 flex items-center justify-between rounded-[var(--radius-card)] bg-[var(--surface)] p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--text-tertiary)]">Promedio</p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
              {(promedio7 ?? 0).toFixed(1)}h
            </p>
          </div>
          {diffSemana !== null && (
            <p
              className="text-sm font-semibold"
              style={{ color: diffSemana >= 0 ? '#4ade80' : 'var(--text-secondary)' }}
            >
              {diffSemana >= 0 ? '↑' : '↓'} {Math.abs(diffSemana).toFixed(1)}h vs semana pasada
            </p>
          )}
        </div>
      </Entra>

      <Entra delay={0.2}>
        <div className="mx-5 mt-4">
          <InsightCard>
            {ultimos7.filter(Boolean).length < 3
              ? 'Registra unas noches más para ver el patrón completo de tu semana.'
              : 'Tus noches de mayor deuda tienden a ser entre semana — tu plan de desconexión está pensado para eso.'}
          </InsightCard>
        </div>
      </Entra>
    </div>
  );
}

function ultimosNDias(noches: { fecha: string; horas: number }[], n: number): ({ fecha: string; horas: number } | null)[] {
  const porFecha = new Map(noches.map((x) => [x.fecha, x]));
  const resultado: ({ fecha: string; horas: number } | null)[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    resultado.push(porFecha.get(iso) ?? null);
  }
  return resultado;
}

function etiquetaDia(iso?: string): string {
  if (!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('es-MX', { weekday: 'narrow' }).toUpperCase();
}
