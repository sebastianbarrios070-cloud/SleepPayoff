import Link from 'next/link';

export const metadata = { title: 'Política de Privacidad — SleepPayoff' };

export default function Privacidad() {
  return (
    <main className="min-h-dvh bg-[var(--bg)] text-[var(--text-primary)] [font-family:var(--font-body)]">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <Link href="/" className="text-sm font-medium text-[var(--accent)]">
          ← Volver a SleepPayoff
        </Link>
        <h1 className="mt-6 [font-family:var(--font-display)] text-3xl font-bold leading-tight">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Última actualización: 22 de septiembre de 2026 · Versión 1
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Responsable</h2>
            <p className="mt-2">
              SleepPayoff es operado por Juan Sebastián Barrios Avilés, persona natural, desde México.
              Contacto: <a className="text-[var(--accent)]" href="mailto:sebastianbarrios070@gmail.com">sebastianbarrios070@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Qué datos recopilamos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Datos de cuenta: nombre, email.</li>
              <li>Datos que registras en la app: tus horas de sueño, hora de desconexión y respuestas del onboarding.</li>
              <li>Datos de uso: qué pantallas visitas, con qué frecuencia usas la app.</li>
              <li>Datos de pago: los procesa Stripe directamente — nosotros nunca vemos ni guardamos el número de tu tarjeta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Para qué los usamos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Calcular tu deuda de sueño y tu plan de recuperación de 3 días.</li>
              <li>Enviarte notificaciones que tú activaste (recordatorio diario de registro).</li>
              <li>Procesar tu suscripción y darte soporte.</li>
              <li>Entender qué partes de la app usan las personas, para mejorarla.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Con quién compartimos datos</h2>
            <p className="mt-2">No vendemos tus datos. Los siguientes terceros procesan datos en nuestro nombre, cada uno con una función específica:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong className="text-[var(--text-primary)]">Supabase</strong> — base de datos y autenticación.</li>
              <li><strong className="text-[var(--text-primary)]">Stripe</strong> — procesamiento de pagos.</li>
              <li><strong className="text-[var(--text-primary)]">Vercel</strong> — hosting de la aplicación.</li>
              <li><strong className="text-[var(--text-primary)]">Resend</strong> — envío de emails transaccionales.</li>
            </ul>
            <p className="mt-2">
              Si en el futuro usamos un proveedor de IA para ajustar tu plan de recuperación, lo nombraremos aquí antes de activarlo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Cómo eliminar tus datos</h2>
            <p className="mt-2">
              Puedes pedir la eliminación de tu cuenta y tus datos escribiendo a{' '}
              <a className="text-[var(--accent)]" href="mailto:sebastianbarrios070@gmail.com">sebastianbarrios070@gmail.com</a>.
              Respondemos en un máximo de 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Cambios a esta política</h2>
            <p className="mt-2">
              Si hacemos un cambio material, te avisamos por email a la dirección con la que te registraste.
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
