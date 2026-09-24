# VEREDICTO revisor-visual — paywall
Fecha: 2026-09-23 00:00
Screenshot: docs/revisiones/paywall-375.png
Usabilidad: 36/40
Craft: 16/20
Copy (si vende): 19/20
Fidelidad (si hubo referencia): N-A
Veredicto: LISTA
Top defectos:
1. [PaywallUI.tsx / page.tsx] ValueStack y AnclaEmocional están construidos pero nunca importados en page.tsx — el paywall no muestra un "qué recibes" explícito (objeción #4 de FICHA-AVATAR) → importar ValueStack y renderizar 3 bullets antes del CTA (ej. hora de desconexión, plan de 3 días, registro sin sensores).
2. [page.tsx comenzar()] Selección de plan no persiste si el usuario sale y vuelve (solo default por query param, sin localStorage) → guardar el plan elegido y restaurarlo al reabrir la pantalla.
3. [page.tsx comenzar(), líneas 90-97] El try/catch alrededor de router.push es decorativo — no hay forma real de que falle, así que el estado errorPago es código muerto no verificable → conectar el catch a la llamada real de Stripe cuando se integre en el Paso 6.
4. [Headline / HorizonteMini] La línea de horizonte (dispositivo ownable) sigue leyéndose como acento decorativo menor a 375px, no como firma de marca reconocible → repetir el mismo degradé una segunda vez cerca del CTA o del trust row para reforzar la identidad.
5. [Pantalla completa] No hay recordatorio del mecanismo ("plan de 3 días") en el paywall mismo — si un usuario llega por deep link sin pasar por el onboarding completo, ve precio y trial pero no el valor concreto que compra.
