'use client';

// Piezas compartidas de la app interna (Paso 5) — mismos tokens de FICHA-ARTE que
// landing/onboarding/paywall. Nav de 3-5 secciones (SECUENCIA-MAESTRA §Paso 5).

import { type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BarChart3, Flame, History, Moon, User } from 'lucide-react';

// Transición entre pestañas (BottomNav) — una de las 7 baseline de movimiento
// no-negociables del SO (14/22): fade+slide corto, respeta prefers-reduced-motion.
export function TransicionRuta({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduce ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0.1 : 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

const TABS = [
  { href: '/app', label: 'Hoy', icon: Moon },
  { href: '/app/historial', label: 'Historial', icon: History },
  { href: '/app/semana', label: 'Semana', icon: BarChart3 },
  { href: '/app/cuenta', label: 'Cuenta', icon: User },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="sticky bottom-0 flex items-center justify-around border-t px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md"
      style={{
        borderColor: 'color-mix(in oklab, var(--text-tertiary) 16%, transparent)',
        background: 'color-mix(in oklab, var(--bg) 88%, transparent)',
      }}
    >
      {TABS.map(({ href, label, icon: Icono }) => {
        const activo = href === '/app' ? pathname === '/app' : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className="flex min-h-11 min-w-16 flex-col items-center justify-center gap-1 rounded-[var(--radius-button)] px-2 py-1.5"
            style={activo ? { background: 'color-mix(in oklab, var(--accent) 16%, transparent)' } : undefined}
          >
            <Icono size={20} color={activo ? 'var(--accent)' : 'var(--text-tertiary)'} />
            <span
              className="text-xs font-medium"
              style={{ color: activo ? 'var(--accent)' : 'var(--text-tertiary)' }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
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

export function PantallaTitulo({ children, subcopy }: { children: ReactNode; subcopy?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="px-5 pt-6"
    >
      <h1 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] [font-family:var(--font-display)]">
        {children}
      </h1>
      <HorizonteMini />
      {subcopy && <p className="mt-3 text-sm text-[var(--text-secondary)]">{subcopy}</p>}
    </motion.div>
  );
}

export function Entra({ delay, children }: { delay: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.25, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Racha visible-no-protagonista (24 §Mecánica 1 / 56 §M0.1-3): badge chico, no
// un hero — solo adopta más peso si está en riesgo (fuera de alcance del MVP).
const HITOS_RACHA = [7, 14, 30, 100, 365];

export function RachaBadge({ dias }: { dias: number }) {
  if (dias <= 0) return null;
  const hito = HITOS_RACHA.includes(dias);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold"
      style={{
        color: 'var(--accent)',
        background: 'color-mix(in oklab, var(--accent) 12%, transparent)',
        border: '1px solid color-mix(in oklab, var(--accent) 25%, transparent)',
        boxShadow: hito ? '0 0 16px -2px color-mix(in oklab, var(--accent) 55%, transparent)' : undefined,
      }}
    >
      <Flame size={15} color="var(--accent)" />
      {dias} {dias === 1 ? 'día seguido' : 'días seguidos'}
    </span>
  );
}

export function InsightCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4" style={{ boxShadow: 'var(--shadow-1)' }}>
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]">
        <Moon size={16} color="var(--accent)" />
      </span>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{children}</p>
    </div>
  );
}
