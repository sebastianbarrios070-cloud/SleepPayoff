'use client';

// Hoy (M0) — la pantalla principal de SleepPayoff, Paso 5 de la secuencia maestra.
// Especificación: docs/sistema/56-MOMENTOS-EMOCIONALES.md §M0 (las 4 piezas en
// orden: dato de hoy → acción de 1 tap → racha → insight). Es una de las "4
// pantallas del dinero" (Regla 7 de CLAUDE.md) — mismo rigor que el paywall.
// Datos: lib/sleepData.ts (localStorage, versionado — Supabase real en el Paso 6).

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Check } from 'lucide-react';
import { useSleepData } from '@/lib/sleepData';
import { Entra, InsightCard, PantallaTitulo, RachaBadge } from '@/components/app/AppUI';
import { PrimaryButton } from '@/components/onboarding/OnboardingUI';

const HORAS_RAPIDAS = [5, 6, 7, 8];

// Módulo, no estado de componente: sobrevive a que "Hoy" se desmonte al cambiar
// de pestaña y se vuelva a montar al volver — el conteo solo se anima una vez
// por sesión de navegador, no cada vez que se revisita la pantalla.
let contadoAnimadoEstaSesion = false;

export default function HoyPage() {
  const { listo, estado, registrarHoy, registradoHoy, entradaHoy, promedio7, promedioAnterior7, deuda, racha, errorGuardado } =
    useSleepData();
  const reduce = useReducedMotion();
  const [contado, setContado] = useState(reduce ? deuda : 0);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    if (!listo) return;
    if (reduce || contadoAnimadoEstaSesion) {
      setContado(deuda);
      return;
    }
    contadoAnimadoEstaSesion = true;
    const inicio = performance.now();
    const duracion = 700;
    let raf: number;
    const tick = (t: number): void => {
      const p = Math.min(1, (t - inicio) / duracion);
      setContado(Number((deuda * p).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [deuda, reduce, listo]);

  if (!listo) return null;

  const insight = calcularInsight(estado.noches.length, promedio7, promedioAnterior7, estado.horaDesconexion);

  return (
    <div>
      <PantallaTitulo subcopy="Tu deuda de sueño de hoy">Hoy</PantallaTitulo>

      <Entra delay={0.06}>
        <div className="mx-5 mt-4 flex items-start justify-between">
          <div
            className="rounded-[var(--radius-card)] px-5 py-4"
            style={{
              background:
                'linear-gradient(var(--surface), var(--surface)) padding-box, linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent))) border-box',
              border: '1.5px solid transparent',
              boxShadow: 'var(--shadow-2)',
            }}
          >
            <p
              className="text-4xl font-bold tabular-nums"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-2, var(--accent)) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {contado.toFixed(1)}h
            </p>
            <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">de deuda acumulada</p>
          </div>
          <div className="pt-2">
            <RachaBadge dias={racha} />
          </div>
        </div>
      </Entra>

      <Entra delay={0.12}>
        <div className="mx-5 mt-5">
          <AnimatePresence mode="wait">
            {registradoHoy && !editando ? (
              <motion.div
                key="confirmado"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                transition={{ duration: reduce ? 0.1 : 0.2 }}
                className="flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4"
                style={{ boxShadow: 'var(--shadow-1)' }}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--accent)_16%,transparent)]">
                  <Check size={18} color="var(--accent)" strokeWidth={3} />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Registraste {entradaHoy?.horas.toFixed(1)}h de anoche
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">Vuelve mañana para seguir tu racha</p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditando(true)}
                  className="min-h-11 px-2 text-xs font-semibold text-[var(--accent)]"
                >
                  Editar
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="formulario"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                transition={{ duration: reduce ? 0.1 : 0.2 }}
              >
                <RegistroHoy
                  valorInicial={entradaHoy?.horas ?? null}
                  onRegistrar={(h) => {
                    registrarHoy(h);
                    setEditando(false);
                  }}
                  onCancelar={registradoHoy ? () => setEditando(false) : undefined}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {errorGuardado && (
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs font-medium" style={{ color: 'var(--error)' }}>
                No pudimos guardar tu registro en este dispositivo — podrías perderlo al cerrar la app.
              </p>
              {entradaHoy && (
                <button
                  type="button"
                  onClick={() => registrarHoy(entradaHoy.horas)}
                  className="shrink-0 text-xs font-semibold text-[var(--accent)]"
                >
                  Reintentar
                </button>
              )}
            </div>
          )}
        </div>
      </Entra>

      <Entra delay={0.18}>
        <div className="mx-5 mt-5">
          <InsightCard>{insight}</InsightCard>
        </div>
      </Entra>

      <Entra delay={0.24}>
        <div className="mx-5 mt-5 rounded-[var(--radius-card)] bg-[var(--surface)] p-4" style={{ boxShadow: 'var(--shadow-1)' }}>
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            Desconéctate hoy a las {estado.horaDesconexion}
          </p>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">Así arrancas a pagar tu deuda desde esta noche</p>
        </div>
      </Entra>
    </div>
  );
}

function RegistroHoy({
  valorInicial,
  onRegistrar,
  onCancelar,
}: {
  valorInicial: number | null;
  onRegistrar: (horas: number) => void;
  onCancelar?: () => void;
}) {
  const [horas, setHoras] = useState<number>(valorInicial ?? 7);
  const reduce = useReducedMotion();

  return (
    <div className="rounded-[var(--radius-card)] bg-[var(--surface)] p-4" style={{ boxShadow: 'var(--shadow-1)' }}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--text-primary)]">¿Cuántas horas dormiste anoche?</p>
        {onCancelar && (
          <button type="button" onClick={onCancelar} className="min-h-11 px-2 text-xs font-medium text-[var(--text-tertiary)]">
            Cancelar
          </button>
        )}
      </div>

      <div
        className="mt-3 rounded-[var(--radius-button)] px-4 py-4"
        style={{ background: 'var(--surface-2)', boxShadow: 'inset 0 2px 4px rgb(0 0 0 / 0.35)' }}
      >
        <p className="text-center text-4xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
          {horas.toFixed(1)}h
        </p>
        <input
          type="range"
          min={3}
          max={10}
          step={0.5}
          value={horas}
          onChange={(e) => setHoras(Number(e.target.value))}
          className="mt-3 h-2 w-full appearance-none rounded-full bg-[color-mix(in_oklab,var(--text-tertiary)_22%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--bg)] [&::-webkit-slider-thumb]:bg-[var(--accent)] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--bg)] [&::-moz-range-thumb]:bg-[var(--accent)]"
          style={{
            backgroundImage: `linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))`,
            backgroundSize: `${((horas - 3) / 7) * 100}% 100%`,
            backgroundRepeat: 'no-repeat',
          }}
          aria-label="Horas dormidas anoche"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {HORAS_RAPIDAS.map((h) => (
          <motion.button
            key={h}
            type="button"
            whileTap={reduce ? undefined : { scale: 0.95 }}
            onClick={() => setHoras(h)}
            className="flex min-h-11 min-w-14 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors duration-150"
            style={
              horas === h
                ? { borderColor: 'var(--accent)', color: 'var(--accent)', background: 'color-mix(in oklab, var(--accent) 8%, transparent)' }
                : { borderColor: 'color-mix(in oklab, var(--text-tertiary) 28%, transparent)', color: 'var(--text-secondary)' }
            }
          >
            {h.toFixed(1)}h
          </motion.button>
        ))}
      </div>
      <div className="mt-4">
        <PrimaryButton onClick={() => onRegistrar(horas)}>Registrar</PrimaryButton>
      </div>
    </div>
  );
}

// El insight que no sabía (M0.1 §4) — la inversión activa hecha visible: el
// registro de hoy cambia lo que la app dice mañana (test binario de 24).
function calcularInsight(
  totalNoches: number,
  promedio7: number | null,
  promedioAnterior7: number | null,
  horaDesconexion: string
): string {
  if (totalNoches < 3) {
    return `Con tus ${totalNoches} noches registradas ya podemos calcular tu patrón real — sigue registrando para afinarlo.`;
  }
  if (promedio7 !== null && promedioAnterior7 !== null) {
    const diff = promedio7 - promedioAnterior7;
    if (diff > 0.2) {
      return `Tu promedio subió ${diff.toFixed(1)}h esta semana — tu neblina de las 2 PM debería sentirse más ligera.`;
    }
    if (diff < -0.2) {
      return `Tu promedio bajó ${Math.abs(diff).toFixed(1)}h esta semana — cuida tu hora de desconexión de las ${horaDesconexion}.`;
    }
    return `Tu promedio se mantiene estable en ${promedio7.toFixed(1)}h — sigue así para bajar tu deuda de a poco.`;
  }
  return `Con ${totalNoches} noches registradas, tu promedio real es ${(promedio7 ?? 6).toFixed(1)}h por noche.`;
}
