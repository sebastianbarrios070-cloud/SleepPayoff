'use client';

// Piezas compartidas del onboarding — spec en docs/sistema/50-DISENO-ONBOARDING-PAYWALL.md §A.
// Consumen solo los tokens de FICHA-ARTE (var(--bg)/--accent/...), igual que el kit de landing.

import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, Check } from 'lucide-react';

export function ProgressHeader({
  paso,
  total,
  onBack,
  onExit,
}: {
  paso: number;
  total: number;
  onBack?: () => void;
  onExit?: () => void;
}) {
  // Endowed progress (A2): nunca arranca en 0% — ya trae 8% de regalo.
  const pct = Math.round(8 + (paso / total) * 92);
  return (
    <div className="pt-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Volver"
          disabled={!onBack}
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-[var(--text-secondary)] disabled:opacity-0"
        >
          <ChevronLeft size={22} />
        </button>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--text-tertiary)_18%,transparent)]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <span className="w-9 shrink-0 text-right text-xs font-semibold tabular-nums text-[var(--text-tertiary)]">
          {pct}%
        </span>
      </div>
      {onExit && (
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onExit}
            className="px-2 py-1 text-xs font-medium text-[var(--text-tertiary)]"
          >
            Salir
          </button>
        </div>
      )}
    </div>
  );
}

export function StepShell({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduce ? 0 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reduce ? 0 : -24 }}
      transition={{ duration: reduce ? 0.15 : 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-1 flex-col justify-start px-5 pt-6 pb-10"
    >
      {children}
    </motion.div>
  );
}

// Dispositivo ownable de FICHA-ARTE.md (línea de horizonte degradé) — se repite también
// aquí, bajo cada pregunta, para que la identidad no viva solo en la landing.
function HorizonteMini() {
  return (
    <div
      aria-hidden="true"
      className="mt-4 h-1 w-16 rounded-full"
      style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
    />
  );
}

export function PreguntaTitulo({ children, subcopy }: { children: ReactNode; subcopy?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] [font-family:var(--font-display)]">
        {children}
      </h1>
      <HorizonteMini />
      {subcopy && <p className="mt-3 text-sm text-[var(--text-secondary)]">{subcopy}</p>}
    </div>
  );
}

export function ChipOption({
  label,
  icon: Icono,
  selected,
  onClick,
}: {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  selected: boolean;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      whileTap={reduce ? undefined : { scale: 0.97 }}
      onClick={onClick}
      className={`flex h-14 w-full items-center gap-3 rounded-[var(--radius-button)] border px-4 text-left transition-colors duration-150 ${
        selected
          ? 'border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_10%,transparent)]'
          : 'border-[color-mix(in_oklab,var(--text-tertiary)_22%,transparent)] bg-[var(--surface)]'
      }`}
    >
      {Icono && <Icono size={20} color={selected ? 'var(--accent)' : 'var(--text-secondary)'} />}
      <span className="flex-1 text-[16px] font-medium text-[var(--text-primary)]">{label}</span>
      {selected && (
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex size-5 items-center justify-center rounded-full bg-[var(--accent)]"
        >
          <Check size={13} color="var(--bg)" strokeWidth={3} />
        </motion.span>
      )}
    </motion.button>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type={type}
      whileTap={disabled || reduce ? undefined : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className="flex h-14 w-full items-center justify-center rounded-[var(--radius-button)] text-[16px] font-semibold transition-opacity duration-150"
      style={{
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))',
        color: 'var(--bg)',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </motion.button>
  );
}

export function FooterCta({ children, pegadoAbajo = true }: { children: ReactNode; pegadoAbajo?: boolean }) {
  return (
    <div className={`${pegadoAbajo ? 'mt-auto' : 'mt-10'} pb-[max(20px,env(safe-area-inset-bottom))] pt-6`}>
      {children}
    </div>
  );
}
