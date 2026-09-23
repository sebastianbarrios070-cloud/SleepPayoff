export const metadata = { title: 'Tu plan — SleepPayoff' };

// Placeholder honesto: el Paso 3 (paywall real, con planes y checkout) todavía no se
// construyó — ver ESTADO.md, "Próximo paso". El onboarding ya navega aquí para no
// romper el flujo mientras se construye.
export default function PaywallPlaceholder() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[var(--bg)] px-6 text-center text-[var(--text-primary)] [font-family:var(--font-body)]">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Próximamente</p>
      <h1 className="mt-3 max-w-xs text-2xl font-bold [font-family:var(--font-display)]">
        Aquí va tu plan y tus precios
      </h1>
      <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
        Esta pantalla se construye en el siguiente paso.
      </p>
    </main>
  );
}
