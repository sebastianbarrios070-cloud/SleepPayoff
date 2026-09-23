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
- **Campo 15 — precio y modelo:** **$5.00/mes o $36.00/año ($3.00/mes, ahorra 40%)** — ajustado por el usuario 2026-09-22 (el RESUMEN FINAL original proponía $6.99/$39.99). **2 días de prueba gratis** (también ajustado, original proponía 7). Pasarela: Stripe.
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

**Paso 1 (landing) → LISTA** (11ª pasada del revisor-visual: 37/40 usabilidad, 16/20 craft, 19/20 copy — cruzó los 3 umbrales). Paso 2 (onboarding) construido — **NO LISTA todavía** (ver "Problemas conocidos" → veredicto:onboarding), en pulido activo.

Onboarding: flujo de 11 pasos en `/onboarding` — reordenado y ampliado tras comparar con una propuesta externa (Gemini) que el usuario trajo 2026-09-23: meta (primero, "perceived fit") → neblina (dolor) → reconocimiento → objeción dominante ("¿ya probaste algo?") → hora de despertar (ancla horaria) → **café** (nuevo — eco literal de VoC de FICHA-AVATAR "3 o 4 cafés al día") → promedio de horas dormidas **de la última semana** (cambiado de "anoche" — más honesto, la deuda se acumula en días) [slider] → hora de desconexión [slider, commitment device] → reconocimiento con etiquetado positivo → loading animado con labor illusion → resultado real calculado con los datos del usuario. Se descartaron 2 ideas de la propuesta externa por no ser honestas/consistentes: una métrica inventada ("62% de capacidad mental", sin base real — violaría "cero falsas promesas") y el precio/trial de la competencia ($6.99, 7 días — ya decidido $5/$3, 2 días). CTA final lleva a `/paywall` (placeholder honesto — Paso 3 aún no construido).

Próximo paso: esperando que el usuario elija cómo seguir — pulir más el onboarding/landing, o avanzar al Paso 3 (paywall).

## Registro anti-repetición (para no reciclar en el próximo proyecto de este usuario)
- Nombre elegido: SleepPayoff.
- Paleta/tipografía: oscuro casi-negro + degradé naranja→violeta (de RISE) + verde menta como 2ª nota · Space Grotesk (display) + Inter (body). Vetados para el próximo proyecto — ver [FICHA-ARTE.md](FICHA-ARTE.md).

## Decisiones tomadas (con evidencia del SO)

- **App modelo elegida: RISE: Sleep Tracker (Rise Science).** Revenue probado por 2 señales independientes (Sensor Tower ~$400k/mes marzo 2026 + top grossing #50 Health&Fitness US oct 2024). Plano completo, quejas y ángulo de diferenciación en [FICHA-MODELO.md](FICHA-MODELO.md). Nuestro eje: registro 100% manual (sin depender de wearables — su queja #1) + enfoque en productividad laboral para freelancers, en vez de salud general.
- **Avatar aprobado por el usuario: Carlos, 32, freelancer/developer remoto.** Ficha completa con 13 frases VoC, dolores/deseos en 3 niveles, 6 objeciones con respuesta/destino, diagnóstico de consciencia (consciente del problema, soluciones ya probadas fallaron) y sofisticación (mercado quemado — ángulo del hero: mecanismo al frente, no promesa genérica). Ver [FICHA-AVATAR.md](FICHA-AVATAR.md).
- **Identidad visual: fusión de líderes (usuario delegó la decisión).** Modo oscuro + degradé naranja→violeta de RISE (líder #1/modelo) + tratamiento de cards de Fabulous + disciplina de acento de Headspace + anti-sobre-gamificación de Linear. Dispositivo ownable propio: línea de horizonte degradé. Detalle completo en [FICHA-ARTE.md](FICHA-ARTE.md).

## Problemas conocidos

- FICHA-MODELO.md §6 (ángulos de ads): no se pudieron obtener los 5 ads individuales de Meta Ads Library con fecha de inicio exacta (sin navegador autenticado en esta sesión). Se documentaron datos agregados (formatos, volumen semanal) con fuente y fecha. Revisar con acceso a Meta Ads Library antes de definir los ads propios en la etapa `34-ADQUISICION`.
- ~~**vista-previa**: `vista-previa-app.html` ausente~~ — RESUELTO: usuario eligió Opción A, aprobó el tour tras 2 ajustes. FICHA-ARTE.md cerrada (aprobada: SÍ).
- **docs/copy**: páginas legales son un BORRADOR redactado por el agente (47-LEGAL-FISCAL-Y-PRIVACIDAD.md permite esto para no bloquear la landing), no revisado por un abogado. ⚠️ Recomendado antes de vender a escala: revisión legal local (México).
- **FICHA-MERCADO**: no se creó una ficha dedicada — la investigación de mercado vive en ESTADO.md (RESUMEN FINAL pegado por el usuario) y en FICHA-MODELO.md/FICHA-AVATAR.md, que ya la citan con fuentes. Se documenta acá por si un gate futuro la busca como archivo aparte.
- ~~**veredicto:landing**~~ — RESUELTO 2026-09-23: 11 pasadas del revisor-visual, veredicto final **LISTA** (37/40 usabilidad, 16/20 craft, 19/20 copy — docs/revisiones/landing-veredicto.md). Progreso de usabilidad: 9→24→26→28→31→33→32→29→27→37. Fixes clave de las últimas rondas: CTA principal pasado a degradé naranja→violeta (FICHA-ARTE lo exigía y solo vivía en los mocks, no en el componente real), Kicker desaturado a `--text-tertiary` (disciplina 60-30-10), `focus-visible` global en `app/globals.css` para todo `<a>`/`<button>`, ruta `/entrar` creada (antes 404), `app/not-found.tsx` agregado, y el `?plan=` de Oferta conectado hasta `/paywall` vía el onboarding. Craft y copy habían cruzado su umbral desde la ronda 8-9; usabilidad fue la última en converger tras corregir el 404 real de "Entrar".
- **veredicto:onboarding** — 4 pasadas del revisor-visual (docs/revisiones/onboarding-veredicto.md tiene la 4ª). Usabilidad: 27→27→32→28/40 (umbral ≥36, sin convergencia monótona — variancia entre instancias del revisor). Craft: 12→12→14→13/20 (umbral ≥16). Copy N/A (no vende). Corregido en las 4 rondas: contenido vertical centrado luego top-anchored, screenshot a media transición recapturado, indicador dev de Next.js desactivado, link "Salir" agregado (y luego con confirmación en modal propio, no `window.confirm` nativo), subcopy en las 3 preguntas que faltaban, línea de horizonte agregada a las 10 pantallas (antes solo 7 la tenían), mesh de fondo con profundidad, celebración (pulso + glow) al terminar el conteo del resultado, `whileTap` respeta `prefers-reduced-motion`. Pendiente real sin resolver: ~30% de espacio vacío en la mitad inferior de las pantallas de pregunta/slider (estructural, requeriría rediseñar la composición, no un fix de una línea) y falta de estados de error/offline en el flujo. Me detuve tras 4 rondas por la misma regla de no reintentar en loop sin avisar.
