import Link from 'next/link';

export const metadata = { title: 'Aviso de IA — SleepPayoff' };

export default function AvisoIA() {
  return (
    <main className="min-h-dvh bg-[var(--bg)] text-[var(--text-primary)] [font-family:var(--font-body)]">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <Link href="/" className="text-sm font-medium text-[var(--accent)]">
          ← Volver a SleepPayoff
        </Link>
        <h1 className="mt-6 [font-family:var(--font-display)] text-3xl font-bold leading-tight">
          Aviso de IA
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Última actualización: 22 de septiembre de 2026 · Versión 1
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Qué calcula SleepPayoff</h2>
            <p className="mt-2">
              Tu deuda de sueño y tu plan de recuperación de 3 días se calculan con una fórmula basada en las
              horas que tú registras manualmente — no con sensores ni con un modelo de IA que "adivina" tu
              sueño. Si en el futuro usamos un proveedor de IA para afinar el plan, lo indicaremos aquí y en
              la Política de Privacidad antes de activarlo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Esto es orientación, no consejo médico</h2>
            <p className="mt-2">
              SleepPayoff es una herramienta de orientación personal, no un dispositivo médico ni un
              diagnóstico. No trata insomnio, apnea del sueño ni ningún trastorno clínico. Si tienes
              problemas de sueño persistentes, consulta a un profesional de la salud.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Tú decides</h2>
            <p className="mt-2">
              Los horarios y recomendaciones que ves en la app son sugerencias calculadas a partir de tus
              propios datos. Eres tú quien decide seguirlas o ajustarlas a tu situación real.
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
