// Marca de SleepPayoff: el chip en el acento de FICHA-ARTE (sin tocar el naranja) con el
// ícono del usuario (cerebro + calculadora + luna) como silueta blanca superpuesta.
export function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-[8px] bg-[var(--accent)]"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-mark-white.png"
        alt=""
        width={size}
        height={size}
        className="p-[3px]"
      />
    </span>
  );
}
