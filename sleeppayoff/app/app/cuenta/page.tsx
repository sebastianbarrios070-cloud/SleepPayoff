'use client';

// Cuenta/Plan — protagonista: estado de suscripción y límites. Pantalla secundaria
// del Paso 5. El plan/trial mostrados son los que el usuario eligió en el paywall
// (Stripe real llega en el Paso 6 — hoy es informativo, sin facturación real).

import { useRouter } from 'next/navigation';
import { ChevronRight, LogOut, Moon } from 'lucide-react';
import Link from 'next/link';
import { useSleepData } from '@/lib/sleepData';
import { Entra, PantallaTitulo } from '@/components/app/AppUI';

export default function CuentaPage() {
  const router = useRouter();
  const { listo, estado } = useSleepData();
  if (!listo) return null;

  return (
    <div>
      <PantallaTitulo>Cuenta</PantallaTitulo>

      <Entra delay={0.06}>
        <div className="mx-5 mt-5 rounded-[var(--radius-card)] bg-[var(--surface)] p-4">
          <p className="text-xs font-medium uppercase tracking-[0.04em] text-[var(--text-tertiary)]">Tu plan</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-bold text-[var(--text-primary)]">Anual — $3.00/mes</p>
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ color: 'var(--accent)', background: 'color-mix(in oklab, var(--accent) 12%, transparent)' }}
            >
              Prueba activa
            </span>
          </div>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">Se cobra $36.00/año al terminar tu prueba</p>
        </div>
      </Entra>

      <Entra delay={0.12}>
        <div className="mx-5 mt-4 flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--surface)] p-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-button)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]">
            <Moon size={16} color="var(--accent)" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">Hora de desconexión</p>
            <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{estado.horaDesconexion} — la ajustas en el próximo registro</p>
          </div>
        </div>
      </Entra>

      <Entra delay={0.18}>
        <div className="mx-5 mt-5 flex flex-col gap-1 overflow-hidden rounded-[var(--radius-card)] bg-[var(--surface)]">
          <FilaEnlace href="/terminos" texto="Términos de uso" />
          <FilaEnlace href="/privacidad" texto="Privacidad" />
          <FilaEnlace href="/reembolsos" texto="Reembolsos" />
          <FilaEnlace href="/aviso-ia" texto="Aviso de IA" />
        </div>
      </Entra>

      <Entra delay={0.24}>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="mx-5 mt-5 flex min-h-11 w-[calc(100%-2.5rem)] items-center justify-center gap-2 rounded-[var(--radius-button)] border border-[color-mix(in_oklab,var(--text-tertiary)_24%,transparent)] py-3 text-sm font-medium text-[var(--text-secondary)]"
        >
          <LogOut size={16} />
          Cerrar sesión
        </button>
      </Entra>
    </div>
  );
}

function FilaEnlace({ href, texto }: { href: string; texto: string }) {
  return (
    <Link href={href} className="flex min-h-12 items-center justify-between px-4 py-3 text-sm text-[var(--text-primary)]">
      {texto}
      <ChevronRight size={16} color="var(--text-tertiary)" />
    </Link>
  );
}
