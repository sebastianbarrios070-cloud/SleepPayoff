# VEREDICTO revisor-visual — onboarding (ronda 10)
Fecha: 2026-09-23 00:00
Screenshot: docs/revisiones/onboarding-375.png (+ onboarding-cafe-375.png, onboarding-horas-375.png, onboarding-resultado-375.png)
Usabilidad: 31/40
Craft: 15/20
Copy (si vende): N-A
Fidelidad (si hubo referencia): N-A
Veredicto: NO LISTA

Top defectos:
1. [components/onboarding/OnboardingUI.tsx PuntosBadge / botón "Salir" líneas 52-59] El botón "Salir" del header usa `px-2 py-1` sin `min-h-11`/`min-w-11` → área táctil por debajo de 44px (heurística 5/estándar mobile del SO) → fix: agregar `min-h-11 min-w-11 flex items-center justify-center` al botón.
2. [components/onboarding/ChipStep.tsx líneas 96 y 154] El input range sigue usando solo `accent-[var(--accent)]` (color sólido nativo del navegador) mientras TODO el resto de elementos de acento (número héroe, CTA, línea de horizonte, borde de la card resultado) usa el degradé naranja→violeta de FICHA-ARTE → el slider es el único elemento con acento plano, rompe la consistencia de identidad (persiste desde ronda 9, nota menor confirmada, no bloqueante mayor pero sigue siendo el defecto visual más visible que queda) → fix: envolver el track en un div con `background: linear-gradient(...)` recortado al % actual, dejando el thumb nativo encima.
3. [app/onboarding/page.tsx líneas 252-256, ResultStep.tsx línea 106] El número héroe "4.2 horas de deuda" (el dato más importante de todo el onboarding) no tiene ninguna explicación de cómo se calculó ni un ⓘ/tooltip en la propia pantalla — el usuario debe confiar a ciegas en un número sin poder verificarlo ni entenderlo (heurística 10, ayuda contextual) → fix: agregar una línea breve tipo "Calculado con tu promedio semanal vs. las 8h de referencia" bajo la cifra, o un ⓘ con el detalle.
4. [components/onboarding/OnboardingUI.tsx PuntosBadge líneas 70-87 + ResultStep.tsx líneas 62-71] Mejora confirmada vs. ronda 9 (ya no queda sin explicar), pero el significado de "pts" solo se revela en la ÚLTIMA pantalla — durante las 9 pantallas previas el usuario ve un contador creciente ("0 pts" → "80 pts") sin ningún indicio de para qué sirve, lo que resta valor motivacional al badge mientras dura el flujo → fix: un microcopy corto la primera vez que aparece (paso "meta") tipo "Suma puntos por cada dato real que nos das" resolvería esto sin esperar al final.
5. [app/onboarding/page.tsx líneas 187-200 vs. resto de ChipStep] El paso "café" ofrece solo 3 opciones mientras las demás preguntas de chips ofrecen 4 — asimetría de patrón visual perceptible solo con ojo entrenado, sin impacto funcional (heurística 4, nota menor).

Variancia vs. ronda 9 (no son defectos nuevos, confirmación de fixes):
- Degradé del número/borde "4.2" (screenshot resultado): CONFIRMADO corregido — el naranja es claramente visible antes de pasar a violeta (90deg con stops explícitos, ResultStep.tsx líneas 90 y 100).
- Pérdida de selección al volver atrás con "Atrás": CONFIRMADO corregido — ChipStep.tsx línea 27 inicializa `seleccion` desde `valorActual`, y page.tsx pasa `valorActual={r.meta}` etc. en cada ChipStep.
- Badge de puntos sin explicar: PARCIALMENTE corregido — ver defecto #4 arriba (se explica al final, no durante el flujo).
- Input range con color sólido: SIN CAMBIOS, confirmado nota menor persistente (defecto #2).

Nota de cierre: los 4 defectos críticos/moderados de la ronda 9 están resueltos o mitigados; lo que queda son ajustes de pulido (área táctil de un botón secundario, consistencia de un slider, ayuda contextual del número héroe, timing del microcopy del badge). Ninguno es un bug funcional ni un defecto de identidad visual grave. El gate formal (≥36/40 y ≥16/20) sigue sin alcanzarse por la acumulación de anclas en 2-3 en varias heurísticas de "ojo entrenado" — no por fallos que un usuario note sin buscarlos, salvo el defecto #3 (número sin explicar) que sí es notable a simple vista.
