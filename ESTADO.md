# ESTADO DEL PROYECTO

## Idea validada (RESUMEN FINAL pegado por el usuario — 2026-09-22)

- **Nombre tentativo:** SleepPayoff (alternativas: SleepDebt, RestCalculator)
- **En una frase:** Calculadora y planificador de "deuda de sueño" que muestra a trabajadores y freelancers cuánta energía pierden y cómo recuperarla en 3 días, sin falsas promesas.
- **Problema:** la gente se despierta agotada, rinde mal en el trabajo y no sabe cuántas horas de sueño debe ni cómo recuperarse sin alterar su rutina laboral.
- **Cliente ideal:** freelancers y profesionales remotos de alto rendimiento, 25-45 años, cansancio acumulado. Pagan $5.99-$6.99 USD/mes. Avatar: "Carlos", 32, developer remoto.
- **Campo 5 — dolores reales (textuales, usar para copy):**
  - "I don't need another app telling me I slept poorly, I need to know how to fix my sleep debt practically."
  - "Sleep tracking is a giant gimmick that just gives you a random score without actionable steps."
  - "All these apps push long expensive subscriptions before showing if the calculation is even accurate for my schedule."
- **Campo 11 — funciones núcleo v1 (construir):**
  1. Calculadora rápida de deuda de sueño acumulada.
  2. Generador de plan de recuperación de 3 días (siestas estratégicas + hora de desconexión).
  3. Indicador de impacto en productividad/energía diaria.
  - **NO construir todavía:** grabador de ronquidos, catálogo de música/meditaciones, sincronización con wearables.
- **Campo 15 — precio y modelo:** $6.99/mes o $39.99/año (35% más barato que competencia), **2 días de prueba gratis** (ajustado por el usuario 2026-09-22, el RESUMEN FINAL original proponía 7). Pasarela: Stripe.
- **Campo 16 — costo por cliente:** ~$0.05 USD/mes infra/IA. Margen ~99%.
- **Campo 18 — las 3 tomas del video (30s):**
  1. 0s: "Deuda de sueño: 8.5 horas. Tu cerebro está funcionando al 60%."
  2. 10s: usuario desliza barra de horas dormidas.
  3. 25s: plan claro — "Desconéctate a las 10:15 PM, siesta de 20 min a las 2:00 PM."
- **Campo 20 — ventaja del usuario:** enfoque de cero falsas promesas — no vende "curar el insomnio", sino una herramienta cuantitativa y honesta.
- **Competencia:** Rise Science ($59.99/año, caro/complejo), Sleep Cycle (falla el tracking por micrófono), ShutEye (audios + subs agresivas). 8 apps parecidas 🟢 (mercado poco saturado). Facturación categoría: +$1M-$2M/mes.
- **Diferenciador:** "La única app que traduce tu deuda de sueño en un plan claro de recuperación de 3 días para no perder productividad."
- **Propuesta de valor ganadora (v1, enfoque productividad/dinero):** "Ayudo a freelancers y trabajadores remotos a eliminar la neblina mental y recuperar su claridad de trabajo en 3 días sin comprar relojes inteligentes caros ni perder tiempo en meditaciones guiadas."
- **3 razones de compra dominantes:** escapar del dolor mental/físico (neblina mental, culpa) → ahorrar tiempo/evitar esfuerzo (30s/día, instrucción exacta) → ganar dinero vía productividad.
- **Objeciones a resolver en landing/onboarding:** "otra app de sueño inservible", "no quiero reloj inteligente", "es una suscripción más", "mi horario es caótico".
- **Lenguaje del cliente (para copy):** "cabeza con neblina", "modo zombi", "no sé cómo pagar la deuda de sueño que traigo encima".
- **Canales:** TikTok Ads, Instagram Reels, contenido orgánico freelance/remote work.

## Etapa actual

Paso 1 de la secuencia maestra (página de ventas). FICHA-MODELO.md y FICHA-AVATAR.md aprobadas. Usuario eligió Opción A "Deuda Clara" en el protocolo A/B/C; pidió un ajuste (trial de 7→2 días) ya aplicado en [vista-previa-app.html](vista-previa-app.html). Pendiente: mostrar el tour ajustado y su confirmación final (me encanta / otro ajuste) para cerrar FICHA-ARTE.md y pasar a tematizar tokens.css + escribir el copy marcado.

## Registro anti-repetición (para no reciclar en el próximo proyecto de este usuario)
- Nombre elegido: SleepPayoff.
- Paleta/tipografía: oscuro casi-negro + degradé naranja→violeta (de RISE) + verde menta como 2ª nota · Space Grotesk (display) + Inter (body). Vetados para el próximo proyecto — ver [FICHA-ARTE.md](FICHA-ARTE.md).

## Decisiones tomadas (con evidencia del SO)

- **App modelo elegida: RISE: Sleep Tracker (Rise Science).** Revenue probado por 2 señales independientes (Sensor Tower ~$400k/mes marzo 2026 + top grossing #50 Health&Fitness US oct 2024). Plano completo, quejas y ángulo de diferenciación en [FICHA-MODELO.md](FICHA-MODELO.md). Nuestro eje: registro 100% manual (sin depender de wearables — su queja #1) + enfoque en productividad laboral para freelancers, en vez de salud general.
- **Avatar aprobado por el usuario: Carlos, 32, freelancer/developer remoto.** Ficha completa con 13 frases VoC, dolores/deseos en 3 niveles, 6 objeciones con respuesta/destino, diagnóstico de consciencia (consciente del problema, soluciones ya probadas fallaron) y sofisticación (mercado quemado — ángulo del hero: mecanismo al frente, no promesa genérica). Ver [FICHA-AVATAR.md](FICHA-AVATAR.md).
- **Identidad visual: fusión de líderes (usuario delegó la decisión).** Modo oscuro + degradé naranja→violeta de RISE (líder #1/modelo) + tratamiento de cards de Fabulous + disciplina de acento de Headspace + anti-sobre-gamificación de Linear. Dispositivo ownable propio: línea de horizonte degradé. Detalle completo en [FICHA-ARTE.md](FICHA-ARTE.md).

## Problemas conocidos

- FICHA-MODELO.md §6 (ángulos de ads): no se pudieron obtener los 5 ads individuales de Meta Ads Library con fecha de inicio exacta (sin navegador autenticado en esta sesión). Se documentaron datos agregados (formatos, volumen semanal) con fuente y fecha. Revisar con acceso a Meta Ads Library antes de definir los ads propios en la etapa `34-ADQUISICION`.
- ~~**vista-previa**: `vista-previa-app.html` ausente~~ — RESUELTO: usuario eligió Opción A, tour construido ([vista-previa-app.html](vista-previa-app.html), screenshot en docs/revisiones/). FICHA-ARTE.md sigue en estado "pendiente aprobación del tour" hasta que el usuario responda 1/2/3 a la pregunta del tour.
