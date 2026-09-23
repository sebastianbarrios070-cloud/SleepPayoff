// Dispositivo ownable de SleepPayoff (FICHA-ARTE.md): línea de horizonte degradé
// naranja→violeta, repetida como separador entre secciones clave de la landing.
export function HorizonDivider() {
  return (
    <div className="flex justify-center py-2">
      <div
        aria-hidden="true"
        className="h-[5px] w-32 rounded-full"
        style={{
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          boxShadow: '0 0 16px 1px color-mix(in oklab, var(--accent) 55%, transparent)',
        }}
      />
    </div>
  );
}
