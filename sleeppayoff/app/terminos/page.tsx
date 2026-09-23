import Link from 'next/link';

export const metadata = { title: 'Términos y Condiciones — SleepPayoff' };

export default function Terminos() {
  return (
    <main className="min-h-dvh bg-[var(--bg)] text-[var(--text-primary)] [font-family:var(--font-body)]">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <Link href="/" className="text-sm font-medium text-[var(--accent)]">
          ← Volver a SleepPayoff
        </Link>
        <h1 className="mt-6 [font-family:var(--font-display)] text-3xl font-bold leading-tight">
          Términos y Condiciones
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Última actualización: 22 de septiembre de 2026 · Versión 1
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Qué es SleepPayoff</h2>
            <p className="mt-2">
              SleepPayoff es una aplicación que calcula tu deuda de sueño a partir de las horas que registras
              manualmente, y te propone un plan de recuperación de 3 días (hora de desconexión, siestas
              estratégicas). Operada por Juan Sebastián Barrios Avilés desde México.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Qué NO es SleepPayoff</h2>
            <p className="mt-2">
              No es un dispositivo médico ni ofrece diagnóstico o tratamiento de trastornos del sueño. No
              reemplaza a un médico. Ver el <Link href="/aviso-ia" className="text-[var(--accent)]">Aviso de IA</Link> para más detalle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Tu cuenta</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Debes tener al menos 18 años para crear una cuenta.</li>
              <li>Eres responsable de mantener segura tu contraseña.</li>
              <li>Podemos suspender cuentas que usen la app de forma abusiva o fraudulenta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Suscripción y pago</h2>
            <p className="mt-2">
              El acceso a SleepPayoff es por suscripción mensual o anual, procesada por Stripe. Los precios
              vigentes se muestran en la app antes de cada cobro. Puedes cancelar en cualquier momento desde
              la app; la cancelación aplica al final del período ya pagado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Limitación de responsabilidad</h2>
            <p className="mt-2">
              SleepPayoff genera orientación calculada a partir de los datos que tú ingresas — no es consejo
              médico, legal o financiero. Los resultados pueden ser incompletos o no ajustarse a tu situación
              particular; eres responsable de las decisiones que tomes a partir de ellos. En la máxima medida
              permitida por la ley, no somos responsables por daños indirectos derivados del uso de la app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Ley aplicable</h2>
            <p className="mt-2">
              Estos términos se rigen por las leyes de México. Cualquier disputa se resuelve ante los
              tribunales competentes de esa jurisdicción, salvo que la ley de tu país de residencia disponga
              otra cosa de forma imperativa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Contacto</h2>
            <p className="mt-2">
              <a className="text-[var(--accent)]" href="mailto:sebastianbarrios070@gmail.com">sebastianbarrios070@gmail.com</a>
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
