import Link from 'next/link';

export const metadata = { title: 'Política de Reembolso — SleepPayoff' };

export default function Reembolsos() {
  return (
    <main className="min-h-dvh bg-[var(--bg)] text-[var(--text-primary)] [font-family:var(--font-body)]">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <Link href="/" className="text-sm font-medium text-[var(--accent)]">
          ← Volver a SleepPayoff
        </Link>
        <h1 className="mt-6 [font-family:var(--font-display)] text-3xl font-bold leading-tight">
          Política de Reembolso
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Última actualización: 22 de septiembre de 2026 · Versión 1
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">La Garantía Cero Falsas Promesas</h2>
            <p className="mt-2">
              Tienes 2 días de prueba gratis. Si en ese tiempo el cálculo de tu deuda de sueño no te da una
              hora de desconexión clara para hoy, escríbenos y te devolvemos cualquier cobro que se haya
              hecho, sin preguntas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Cómo cancelar</h2>
            <p className="mt-2">
              Puedes cancelar tu suscripción en cualquier momento desde Ajustes → Suscripción, dentro de la
              app. La cancelación evita el próximo cobro; no se prorratea el período ya pagado, salvo que
              apliques a la garantía de arriba.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Cómo pedir un reembolso</h2>
            <p className="mt-2">
              Escribe a{' '}
              <a className="text-[var(--accent)]" href="mailto:sebastianbarrios070@gmail.com">sebastianbarrios070@gmail.com</a>
              {' '}con el email de tu cuenta. Respondemos en un máximo de 3 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Pagos</h2>
            <p className="mt-2">
              Los pagos son procesados por Stripe. Los reembolsos se emiten al mismo método de pago original.
            </p>
          </section>

          <p className="border-t border-[color-mix(in_oklab,var(--text-tertiary)_25%,transparent)] pt-6 text-sm">
            Este es un borrador redactado para el lanzamiento inicial de SleepPayoff. Antes de operar a escala,
            se recomienda una revisión por un abogado local.
          </p>
        </div>
      </div>
    </main>
  );
}
