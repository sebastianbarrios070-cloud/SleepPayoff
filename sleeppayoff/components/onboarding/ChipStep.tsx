'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Zap } from 'lucide-react';
import { ChipOption, FooterCta, PreguntaTitulo, PrimaryButton, StepShell } from './OnboardingUI';

export interface ChipOpcion {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}

export function ChipStep({
  pregunta,
  subcopy,
  opciones,
  onSelect,
  valorActual,
}: {
  pregunta: string;
  subcopy?: string;
  opciones: ChipOpcion[];
  onSelect: (label: string) => void;
  /** Respuesta ya guardada, si el usuario volvió con "Atrás" — no se pierde la selección. */
  valorActual?: string;
}) {
  const [seleccion, setSeleccion] = useState<string | null>(valorActual ?? null);
  const reduce = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const elegir = (label: string): void => {
    // Permite corregir un tap equivocado durante la pausa (A3): reelegir reinicia
    // el temporizador en vez de bloquear hasta que termine el primero.
    if (timerRef.current) clearTimeout(timerRef.current);
    setSeleccion(label);
    timerRef.current = setTimeout(() => onSelect(label), 320);
  };

  return (
    <StepShell>
      <PreguntaTitulo subcopy={subcopy}>{pregunta}</PreguntaTitulo>
      <div className="flex flex-col gap-3">
        {opciones.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : i * 0.06, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChipOption
              label={o.label}
              icon={o.icon}
              selected={seleccion === o.label}
              onClick={() => elegir(o.label)}
            />
          </motion.div>
        ))}
      </div>
      <FooterCta>
        <p className="text-center text-xs text-[var(--text-tertiary)]">
          {seleccion ? 'Avanzando…' : 'Toca una opción para continuar'}
        </p>
      </FooterCta>
    </StepShell>
  );
}

const HORAS_RAPIDAS = [5, 6, 7, 8];

export function InputHorasStep({
  onContinuar,
}: {
  onContinuar: (horas: number) => void;
}) {
  const [horas, setHoras] = useState(6.5);

  return (
    <StepShell>
      <PreguntaTitulo subcopy="No una sola noche: la deuda se acumula en días">
        En promedio, ¿cuántas horas dormiste esta última semana?
      </PreguntaTitulo>
      <div className="flex flex-col items-center py-8">
        <p
          className="text-5xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]"
        >
          {horas.toFixed(1)}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">horas/noche</p>
        <input
          type="range"
          min={3}
          max={10}
          step={0.5}
          value={horas}
          onChange={(e) => setHoras(Number(e.target.value))}
          className="mt-8 w-full accent-[var(--accent)]"
          aria-label="Promedio de horas dormidas esta semana"
        />
        <div className="mt-2 flex w-full justify-between text-xs text-[var(--text-tertiary)]">
          <span>3h</span>
          <span>10h</span>
        </div>
        <div className="mt-5 flex gap-2">
          {HORAS_RAPIDAS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setHoras(h)}
              className={`flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors duration-150 ${
                horas === h
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-[color-mix(in_oklab,var(--text-tertiary)_28%,transparent)] text-[var(--text-secondary)]'
              }`}
            >
              {h}h
            </button>
          ))}
        </div>
      </div>
      <FooterCta>
        <PrimaryButton onClick={() => onContinuar(horas)}>Continuar</PrimaryButton>
      </FooterCta>
    </StepShell>
  );
}

export function DesconexionStep({
  onFijar,
}: {
  onFijar: (hora: string) => void;
}) {
  const [minutosDesde0, setMinutosDesde0] = useState(21 * 60 + 30); // 21:30 default

  const hh = Math.floor(minutosDesde0 / 60);
  const mm = minutosDesde0 % 60;
  const label = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
  const feedback =
    hh < 21 ? 'Meta ambiciosa — te acompañamos' : hh < 23 ? 'Meta realista para empezar' : 'Un poco tarde para recuperar bien';

  return (
    <StepShell>
      <PreguntaTitulo>¿A qué hora te gustaría desconectarte cada noche?</PreguntaTitulo>
      <div className="flex flex-col items-center py-8">
        <p className="text-5xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
          {label}
        </p>
        <input
          type="range"
          min={20 * 60}
          max={24 * 60}
          step={15}
          value={minutosDesde0}
          onChange={(e) => setMinutosDesde0(Number(e.target.value))}
          className="mt-8 w-full accent-[var(--accent)]"
          aria-label="Hora de desconexión"
        />
        <div className="mt-2 flex w-full justify-between text-xs text-[var(--text-tertiary)]">
          <span>20:00</span>
          <span>00:00</span>
        </div>
        <div className="mt-5 flex gap-2">
          {['21:00', '21:30', '22:00', '22:30'].map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => {
                const [hStr, mStr] = h.split(':');
                setMinutosDesde0(Number(hStr) * 60 + Number(mStr));
              }}
              className={`flex min-h-11 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors duration-150 ${
                label === h
                  ? 'border-[var(--accent)] text-[var(--accent)]'
                  : 'border-[color-mix(in_oklab,var(--text-tertiary)_28%,transparent)] text-[var(--text-secondary)]'
              }`}
            >
              {h}
            </button>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
          <Zap size={14} color="var(--accent)" /> {feedback}
        </p>
      </div>
      <FooterCta>
        <PrimaryButton onClick={() => onFijar(label)}>Fijar mi hora</PrimaryButton>
      </FooterCta>
    </StepShell>
  );
}
