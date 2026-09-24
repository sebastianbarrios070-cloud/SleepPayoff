'use client';

// Historial — protagonista: noches pasadas, ver/entender el registro acumulado
// (la inversión del loop de retención hecha visible). Paso 5, pantalla secundaria
// (no una de las "4 del dinero" — medición + checklist, sin revisor obligatorio).

import { useSleepData } from '@/lib/sleepData';
import { Entra, PantallaTitulo } from '@/components/app/AppUI';

export default function HistorialPage() {
  const { listo, estado } = useSleepData();
  if (!listo) return null;

  const ordenadas = [...estado.noches].sort((a, b) => (a.fecha < b.fecha ? 1 : -1));

  return (
    <div>
      <PantallaTitulo subcopy={`${ordenadas.length} noches registradas`}>Historial</PantallaTitulo>

      <div className="mt-4 flex flex-col gap-2 px-5 pb-4">
        {ordenadas.length === 0 ? (
          <p className="mt-8 text-center text-sm text-[var(--text-tertiary)]">
            Todavía no registras ninguna noche — vuelve a &quot;Hoy&quot; para tu primer registro.
          </p>
        ) : (
          ordenadas.map((n, i) => {
            const deficit = Math.max(0, 8 - n.horas);
            return (
              <Entra key={n.fecha} delay={Math.min(i * 0.03, 0.3)}>
                <div className="flex items-center justify-between rounded-[var(--radius-card)] bg-[var(--surface)] p-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{formatearFecha(n.fecha)}</p>
                    <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
                      {deficit > 0 ? `Déficit de ${deficit.toFixed(1)}h` : 'Meta cumplida'}
                    </p>
                  </div>
                  <p className="text-xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
                    {n.horas.toFixed(1)}h
                  </p>
                </div>
              </Entra>
            );
          })
        )}
      </div>
    </div>
  );
}

function formatearFecha(iso: string): string {
  const hoy = new Date().toISOString().slice(0, 10);
  const ayer = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (iso === hoy) return 'Hoy';
  if (iso === ayer) return 'Ayer';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'short' });
}
