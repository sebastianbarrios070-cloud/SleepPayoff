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

Paso 1 de la secuencia maestra (página de ventas) — **landing construida y funcionando**. FICHA-MODELO.md, FICHA-AVATAR.md y FICHA-ARTE.md aprobadas (Opción A "Deuda Clara", 2 ajustes de precio/trial confirmados por el usuario). Proyecto Next.js escalonado en `sleeppayoff/` (Next 16, React 19, Tailwind v4, motion, lucide-react). Landing compuesta desde el kit canónico con copy en `sleeppayoff/docs/copy/landing.md`, tokens tematizados en `sleeppayoff/components/landing/tokens.css`. 4 páginas legales creadas (privacidad, términos, reembolsos, aviso-ia) con datos del responsable (Juan Sebastián Barrios Avilés, México, sebastianbarrios070@gmail.com). Build + typecheck limpios, verificado en navegador (`npm run dev` vía `.claude/launch.json`).

Próximo paso: Paso 2 de la secuencia maestra — onboarding.

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
- **veredicto:landing** — 4 pasadas del revisor-visual (docs/revisiones/landing-veredicto.md tiene la última escrita a disco; el detalle de las 4 vive en este chat). Cada pasada corrigió defectos reales: placeholders → screenshots reales de los mocks ya aprobados, línea de horizonte más gruesa y repetida 4 veces, FAQ reordenado y recortado, claims sin prueba reemplazados, verbos de CTA unificados, badge de ahorro pasado a meses (no %), CTAs de planes con query param de plan. Puntaje no convergió de forma monótona al umbral (≥36/40 usabilidad, ≥16/20 craft) — cada pasada resolvía los defectos top y revelaba los siguientes, con algo de variancia entre instancias del revisor. Última puntuación conocida: 26/40 usabilidad, 13/20 craft, 15/20 copy, NO LISTA — con las últimas 3 correcciones (mocks del carrusel ya no repiten el del hero, CTAs de planes con `?plan=`, FAQ sin la pregunta genérica) aplicadas DESPUÉS de esa puntuación, sin una 5ª pasada que las confirme. Me detuve aquí (regla de "no reintentar una tercera vez sin avisar") para no seguir puliendo en loop sin que el usuario decida cómo seguir.
