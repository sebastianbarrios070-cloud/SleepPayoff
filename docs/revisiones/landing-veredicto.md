# VEREDICTO revisor-visual — landing
Fecha: 2026-09-22 00:00
Screenshot: docs/revisiones/landing-375.png
Usabilidad: 33/40
Craft: 15/20
Copy (si vende): 19/20
Fidelidad (si hubo referencia): N-A
Veredicto: NO LISTA
Top defectos:
1. Oferta.tsx (líneas 130-147): las features del plan Anual y Mensual siguen compartiendo texto literal idéntico en 2 de 4 líneas ("Tu deuda de sueño, calculada cada día" y "Hora exacta de desconexión, cada noche") — la corrección declarada quedó incompleta. Fix: reescribir cada set de features con valor propio por plan, sin frases completas repetidas.
2. CtaFinal.tsx (línea 106): el `<p>` del PS conserva la clase `italic` en todo el bloque; el bold añadido ancla dos frases pero el resto sigue en itálica corrida de 3-4 líneas, lo que mantiene la fricción de lectura que la ronda 5 ya señaló. Fix: quitar `italic` del contenedor y dejar el peso solo en los spans `[b]`.
3. HorizonDivider.tsx / Hero.tsx: la línea de horizonte (5px × 128px) sigue siendo el único elemento de identidad ownable de la página y a 375px se lee como un detalle menor, casi invisible en el screenshot junto al H1. Fix: no asumir el límite como definitivo; probar un grosor o largo mayor solo en mobile antes de cerrar el dispositivo ownable.
4. Composición general (screenshot completo): las 10 secciones repiten el mismo patrón de card centrada + radius 16px + padding similar sin variación de layout, lo que aplana la jerarquía visual de la página completa pese a la disciplina de color. Fix: romper el patrón en al menos 1-2 secciones (p. ej. bullets a ancho completo en vez de card) para dar ritmo.
5. Agitacion.tsx (línea 46): el punto de acento (`h-2 w-2`, 8px) es el único ancla visual de cada frase y es notablemente pequeño frente al resto de anclas de la página (chips de 44px en Problema, números en Solución) — la jerarquía de anclas es inconsistente entre secciones. Fix: igualar el tamaño/peso del ancla al lenguaje visual usado en las demás secciones o usar el mismo tipo de chip.

Auditoría de escaneabilidad:
| Sección | Bloque >4 líneas sin romper | Ícono/número ancla | Prueba solo-titulares | Respiro visual | FAQ acordeón (código) |
|---|---|---|---|---|---|
| Hero | No | Visual del mockup, no ícono propio | Sí | Sí | N/A |
| Problema | No | Sí (IconChip 44px) | Sí | Sí | N/A |
| Agitación | No (frases cortas) | Débil (dot 8px, ver defecto 5) | Parcial (frases rozan 18 palabras) | Sí | N/A |
| Solución | No | Sí (pasos numerados) | Sí | Sí | N/A |
| Carrusel (AppPorDentro) | No | Sí (frames con label) | Sí | Sí | N/A |
| Oferta | No | Sí (precio en caja) | Sí, pero features repetidas entre planes (defecto 1) | Sí | N/A |
| Garantía | No | Sí (hairline box) | Sí | Sí | N/A |
| FAQ | No (warn a 40 palabras) | Chevron como ancla de estado | Sí | Sí | Sí — button real, aria-expanded/aria-controls, uno abierto a la vez, confirmado en código |
| CTA final | Sí — PS de 3-4 líneas en itálica corrida (defecto 2) | Bold parcial como ancla | Parcial | Sí | N/A |
| Footer | No | N/A | Sí | Sí | N/A |
