# VEREDICTO revisor-visual — landing
Fecha: 2026-09-23 00:00
Screenshot: docs/revisiones/landing-375.png
Usabilidad: 37/40
Craft: 16/20
Copy (si vende): 19/20
Fidelidad (si hubo referencia): N-A
Veredicto: LISTA
Top defectos:
1. [app/entrar/page.tsx] El placeholder de "Entrar" no ofrece salida a la landing (solo botón a /onboarding) → agregar un link secundario "Volver al inicio" (mismo patrón que not-found.tsx).
2. [components/landing/Oferta.tsx L192-198] El CTA del plan Mensual es un `<motion.a>` suelto (outline, 52px) fuera del componente `CtaButton` reusado por el resto del kit → si el radius o el alto del botón primario cambian en el futuro, este queda desincronizado; no es un defecto visible hoy pero es la única variante de botón no centralizada.
3. [Hero.tsx / header] El link "Entrar" (14px, gris terciario) tiene un área táctil de solo `py-3` (~24px + texto) — por debajo del mínimo de 44px recomendado; en un dedo real es el elemento más difícil de acertar de todo el hero.
4. [Faq.tsx L93] La respuesta abierta usa `pr-9` fijo para dejar espacio al chevron — con textos más largos que los 5 actuales, en pantallas angostas (320px) podría quedar apretada; no se ve roto en 375px pero es un punto a vigilar si cambia el copy.

Nota: el defecto crítico de la ronda anterior (link "Entrar" → 404 sin `not-found.tsx`) está resuelto: `/entrar` ahora resuelve con un placeholder honesto y `not-found.tsx` cubre cualquier ruta rota con mensaje humano + CTA de regreso, ambos con los tokens de marca. La cadena `Oferta → ?plan= → /onboarding → /paywall?plan=` se verificó en código y es funcional. Gate doble (≥36/40 y ≥16/20) se cumple.
