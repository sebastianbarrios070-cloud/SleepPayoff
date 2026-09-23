import Link from 'next/link';

export const metadata = { title: 'Entrar — SleepPayoff' };

// Placeholder honesto: el Paso 4 (login/auth real) todavía no se construyó — ver
// ESTADO.md, "Próximo paso". El link "Entrar" de la landing ya navega aquí para no
// dejar un enlace roto (404) mientras se construye.
export default function EntrarPlaceholder() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[var(--bg)] px-6 text-center text-[var(--text-primary)] [font-family:var(--font-body)]">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Próximamente</p>
      <h1 className="mt-3 max-w-xs text-2xl font-bold [font-family:var(--font-display)]">
        Aquí vas a iniciar sesión
      </h1>
      <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
        Esta pantalla se construye más adelante. Por ahora, calcula tu deuda de sueño primero.
      </p>
      <Link
        href="/onboarding"
        className="mt-6 flex h-12 items-center justify-center rounded-[var(--radius-button)] px-6 text-sm font-semibold text-[var(--bg)]"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
      >
        Calcular mi deuda de sueño
      </Link>
    </main>
  );
}
