import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[var(--bg)] px-6 text-center text-[var(--text-primary)] [font-family:var(--font-body)]">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">Error 404</p>
      <h1 className="mt-3 max-w-xs text-2xl font-bold [font-family:var(--font-display)]">
        Esta página no existe
      </h1>
      <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
        Puede que el enlace esté roto o la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-6 flex h-12 items-center justify-center rounded-[var(--radius-button)] px-6 text-sm font-semibold text-[var(--bg)]"
        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
