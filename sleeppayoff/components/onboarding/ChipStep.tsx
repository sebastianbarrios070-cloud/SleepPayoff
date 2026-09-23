'use client';

import { useState } from 'react';
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
}: {
  pregunta: string;
  subcopy?: string;
  opciones: ChipOpcion[];
  onSelect: (label: string) => void;
}) {
  const [seleccion, setSeleccion] = useState<string | null>(null);

  const elegir = (label: string): void => {
    if (seleccion) return; // bloquea doble-tap durante la pausa (A3)
    setSeleccion(label);
    setTimeout(() => onSelect(label), 320);
  };

  return (
    <StepShell>
      <PreguntaTitulo subcopy={subcopy}>{pregunta}</PreguntaTitulo>
      <div className="flex flex-col gap-3">
        {opciones.map((o) => (
          <ChipOption
            key={o.label}
            label={o.label}
            icon={o.icon}
            selected={seleccion === o.label}
            onClick={() => elegir(o.label)}
          />
        ))}
      </div>
    </StepShell>
  );
}

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
      </div>
      <FooterCta pegadoAbajo={false}>
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
        <p className="mt-6 text-sm font-medium text-[var(--accent)]">⚡ {feedback}</p>
      </div>
      <FooterCta pegadoAbajo={false}>
        <PrimaryButton onClick={() => onFijar(label)}>Fijar mi hora</PrimaryButton>
      </FooterCta>
    </StepShell>
  );
}
