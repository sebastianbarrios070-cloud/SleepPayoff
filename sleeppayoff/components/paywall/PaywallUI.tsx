'use client';

// Piezas del paywall — spec en docs/sistema/50-DISENO-ONBOARDING-PAYWALL.md §C.
// Mismos tokens que onboarding/landing (FICHA-ARTE): sin colores ni radios nuevos.

import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, CheckCircle2, Circle, X } from 'lucide-react';

export function CerrarButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Cerrar y volver"
      className="flex size-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]"
    >
      <X size={20} />
    </button>
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

export function Headline({ children, subcopy }: { children: ReactNode; subcopy: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="px-5 pt-1"
    >
      <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--text-primary)] [font-family:var(--font-display)]">
        {children}
      </h1>
      <HorizonteMini />
      <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">{subcopy}</p>
    </motion.div>
  );
}

type NodoEstado = 'hecho' | 'aviso' | 'cobro';

export function TimelineTrial({
  nodos,
}: {
  nodos: { estado: NodoEstado; titulo: string; caption?: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: reduce ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="mx-5 mt-4 rounded-[var(--radius-card)] bg-[var(--surface)] p-4"
    >
      {nodos.map((n, i) => (
        <div key={n.titulo} className="flex gap-3">
          <div className="flex flex-col items-center">
            {n.estado === 'hecho' && <CheckCircle2 size={14} color="var(--accent)" fill="none" strokeWidth={2} />}
            {n.estado === 'aviso' && <Circle size={14} color="var(--accent)" fill="var(--accent)" strokeWidth={0} />}
            {n.estado === 'cobro' && <Circle size={14} color="var(--text-tertiary)" strokeWidth={2} />}
            {i < nodos.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.15 + i * 0.1, ease: 'easeOut' }}
                className="my-1 w-0.5 flex-1 rounded-full"
                style={{
                  background: i === 0 ? 'var(--accent)' : 'color-mix(in oklab, var(--text-tertiary) 30%, transparent)',
                  transformOrigin: 'top',
                }}
              />
            )}
          </div>
          <div className={i < nodos.length - 1 ? 'pb-4' : ''}>
            <p className="text-base font-semibold text-[var(--text-primary)]">{n.titulo}</p>
            {n.caption && <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{n.caption}</p>}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export function PlanCard({
  nombre,
  precioMes,
  detalle,
  badge,
  selected,
  onClick,
}: {
  nombre: string;
  precioMes: string;
  detalle?: string;
  badge?: string;
  selected: boolean;
  onClick: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      whileTap={reduce ? undefined : { scale: 0.98 }}
      onClick={onClick}
      aria-pressed={selected}
      className={`relative flex w-full items-center justify-between rounded-[var(--radius-card)] border px-4 py-4 text-left transition-colors duration-150 ${
        selected
          ? 'bg-[color-mix(in_oklab,var(--accent)_11%,transparent)]'
          : 'border-[color-mix(in_oklab,var(--text-tertiary)_24%,transparent)] bg-[var(--surface)]'
      }`}
      style={
        selected
          ? {
              borderWidth: 2,
              borderColor: 'var(--accent)',
              boxShadow: '0 8px 24px -8px color-mix(in oklab, var(--accent) 45%, transparent)',
            }
          : undefined
      }
    >
      {badge && (
        <span
          className="absolute -top-2.5 left-4 rounded-lg px-2 py-0.5 text-xs font-bold uppercase tracking-[0.04em]"
          style={{ background: 'var(--accent)', color: 'var(--bg)' }}
        >
          {badge}
        </span>
      )}
      <div>
        <p className="text-base font-semibold text-[var(--text-primary)]">{nombre}</p>
        {detalle && <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{detalle}</p>}
      </div>
      <div className="flex items-center gap-2.5">
        <p className="text-2xl font-bold tabular-nums text-[var(--text-primary)] [font-family:var(--font-display)]">
          {precioMes}
        </p>
        <span
          className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
            selected ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[color-mix(in_oklab,var(--text-tertiary)_40%,transparent)]'
          }`}
        >
          {selected && <Check size={12} color="var(--bg)" strokeWidth={3} />}
        </span>
      </div>
    </motion.button>
  );
}

export function TrustRow({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-center text-xs text-[var(--text-tertiary)]">{children}</p>;
}

// Value stack (C2, variante d): qué se desbloquea, máx 3 checks — refuerza la
// objeción #3 de FICHA-AVATAR ("suscripción que voy a olvidar cancelar") justo
// antes del CTA, con más peso que solo "Cancela cuando quieras".
export function ValueStack({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--accent)_16%,transparent)]">
            <Check size={12} color="var(--accent)" strokeWidth={3} />
          </span>
          <span className="text-sm text-[var(--text-secondary)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Ancla emocional obligatoria (FICHA-AVATAR): dolor #1 antes de pedir el pago —
// recorre landing+onboarding+paywall sin excepción.
export function AnclaEmocional({ children }: { children: ReactNode }) {
  return (
    <p className="mx-5 mt-4 text-sm text-[var(--text-secondary)]">
      <span className="font-semibold text-[var(--text-primary)]">{children}</span>
    </p>
  );
}
