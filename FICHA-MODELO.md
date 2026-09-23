# FICHA-MODELO — el plano de la app que ya gana — SleepPayoff
(se llena en Sesión 1, ANTES de construir; cosa juzgada como las demás fichas)

- Estado: APROBADA (revenue verificado por 2 señales independientes + plano completo)

## 1. LA APP MODELO
- Nombre: RISE: Sleep Tracker (Rise Science) · Plataforma: iOS / Android · País/idioma: EE.UU., inglés (app global)
- POR QUÉ ella (criterios): [x] mecanismo replicable (score de deuda de sueño + hora de desconexión) [x] sin foso estructural (no requiere marca, red social ni datos propietarios — cálculo basado en horas ingresadas/sensores del teléfono) [x] demanda creciendo [x] grietas visibles (ver §5)

## 2. REVENUE PROBADO (2 señales INDEPENDIENTES)
- [x] Sensor Tower lookup (descargas último mes: ~200k · revenue último mes: ~$400k USD) | fuente: [SensorTower — RISE overview](https://app.sensortower.com/overview/1453884781?country=US) | fecha: marzo 2026
- [x] Top grossing (posición: #50 · categoría: Health & Fitness · país: US) | fuente: [SensorTower top charts / reportado por WebSearch] | fecha: octubre 2024
- [ ] MRR verificado (TrustMRR): NO ENCONTRADO — se buscó "Rise" en trustmrr.com/startup/rise, no expone cifra pública
- [ ] Ads >90 días activos (Meta Ads Library): NO ENCONTRADO el rango exacto de fecha de inicio; sí se confirmó volumen (~1.000 ads activos, ~95 creativos nuevos/semana) vía [Segwise — RISE App Creative Strategy](https://segwise.ai/blog/rise-app-creative-strategy-ad-insights) (2026), lo que indica gasto sostenido pero no cuenta como señal de revenue independiente por sí sola.
- ⚠️ 2 tipos de señal distintos marcados (Sensor Tower + ranking top grossing) → ficha APROBADA.

## 3. EL MECANISMO DEL MODELO
- Qué hace, en una frase: calcula tu "deuda de sueño" acumulada y te dice la hora exacta para desconectarte hoy y recuperar energía.
- Su momento aha exacto: al terminar el onboarding ve su "Energy Schedule" — un timeline del día marcando picos y caídas de energía predichos, más su cifra de deuda de sueño.
- Cómo lo COMUNICA en sus ads (promesa textual): "Encuentra tu hora ideal de despertar (al minuto) para eliminar tu deuda de sueño y desbloquear energía" (paráfrasis del hook dominante — arco antes/después: cansado → energizado). Fuente: [Segwise — RISE App Creative Strategy](https://segwise.ai/blog/rise-app-creative-strategy-ad-insights), 2026.

## 4. EL PLANO DE PRODUCTO
- Onboarding: preguntas sobre hábitos de sueño, movimiento diario y niveles de energía, explica ritmo circadiano y cómo se calcula la deuda de sueño, termina en paywall. Nº exacto de pasos: NO ENCONTRADO con precisión (fuentes hablan de "serie de preguntas", Appllama documenta 35 pantallas de onboarding sin desglose público).
- Momento del paywall: al finalizar el cuestionario, antes de mostrar el resultado completo (paywall post-cuestionario, pre-resultado detallado). Fuente: [RISE App Review — risescience.com](https://www.risescience.com/blog/rise-app-review).
- Pricing (del MODELO, RISE): $69.99/año tras 7 días de prueba gratis; también existen plan mensual y "lifetime". Fuente: [RISE App Review](https://www.risescience.com/blog/rise-app-review), 2026. **Nota: SleepPayoff no copia esta duración de trial — ver ESTADO.md, el usuario decidió 2 días.**
- Features CORE (las que enseña primero): deuda de sueño acumulada · Energy Schedule (timeline de energía del día) · hora de desconexión recomendada.
- Features accesorias: integración con Apple Watch/wearables para tracking automático (existe pero es fuente de las quejas más fuertes — ver §5).

## 5. LO QUE SUS USUARIOS DICEN
- Top-3 quejas de reseñas 1-2★ (= lo que NOSOTROS mejoramos 10x):
  1. "El cálculo de deuda de sueño es terriblemente inaccurate; soporte confirmó que resta el doble cada mañana y no lo priorizan." (fuente: App Store reviews, vía búsqueda — justuseapp.com/appsupports.co, 2026)
  2. "Sin abrir el Apple Watch, la app cambia solo los datos de sueño y quedan completamente incorrectos (a veces 10-12h de registro falso)." (fuente: reseñas negativas App Store, 2026)
  3. "Cobros de prueba confusos: cargan la suscripción antes de que termine el trial, o crean dos trials (app + teléfono) y si solo cancelás uno te siguen cobrando." (fuente: [Trustpilot — risescience.com](https://www.trustpilot.com/review/risescience.com), 2026)
- Lo que aman las 5★ (= lo que NO se toca al modelar): "el concepto de deuda de sueño ayuda a entender exactamente cuánto descanso necesito" (fuente: reseñas positivas mezcladas en las mismas búsquedas) · el arco simple "cansado → energizado" del onboarding/ads.

## 6. SUS ÁNGULOS DE VENTA
- Meta Ads Library — datos agregados (no 5 ads individuales con fecha exacta, ver nota):
  1. hook: "Encuentra tu hora ideal de despertar, al minuto" · ángulo: precisión obsesiva / optimización metabólica · activo desde: NO ENCONTRADO (fecha exacta) · volumen: ~1.000 ads activos simultáneos
  2. hook: comparación "early bird vs night owl" (formato street-interview/UGC) · ángulo: identidad + curiosidad · activo desde: NO ENCONTRADO · —
  3. hook: skit/testimonio amigo-a-amigo mostrando la app · ángulo: prueba social casual · activo desde: NO ENCONTRADO · —
  - NO ENCONTRADO — se intentó acceder directamente a Meta Ads Library vía WebSearch/WebFetch; no hay navegador autenticado en esta sesión para filtrar por fecha de inicio exacta de cada ad. Dato agregado disponible y citado: ~95 creativos nuevos/semana, formatos dominantes Skit (21%), Screen Recording (15%), Street Interview (9%). Fuente: [Segwise, 2026](https://segwise.ai/blog/rise-app-creative-strategy-ad-insights).
- Top ads del vertical (TikTok Creative Center): NO ENCONTRADO — no se consultó (fuera del alcance de esta sesión sin login).

## 7. NUESTRO EJE ÚNICO DE DIFERENCIACIÓN
- Eje que cambiamos (UNO solo): ángulo → de "wearable/tracking automático + optimización metabólica general" a "registro manual honesto + plan de recuperación de 3 días enfocado en productividad laboral" para freelancers/remotos.
- POR QUÉ solo ese: el dolor #1 de nuestro cliente ideal (campo 5 del RESUMEN FINAL) es desconfianza en el tracking automático ("sleep tracking is a giant gimmick") — quejas §5 de RISE lo confirman (tracking de Apple Watch se corrompe solo). Resolvemos eso eliminando la dependencia de sensores, no reinventando el mecanismo de deuda de sueño que ya está probado.
- Qué CONSERVAMOS del modelo (probado, no se toca): estructura de onboarding (preguntas → explicación del mecanismo → paywall) · momento del paywall (post-cuestionario, antes del resultado completo) · arquitectura de pricing (suscripción anual con descuento + trial corto, aquí 7 días).
- Nuestro mecanismo derivado: "el mismo cálculo de deuda de sueño que RISE ya probó que la gente paga por entender + registro 100% manual (sin depender de wearables, la queja #1 de RISE) + salida orientada a productividad laboral en vez de salud general" (el nombre se bautiza en la Constitución 4b de `01`).

## 8. A QUIÉN ALIMENTA ESTA FICHA
- Constitución 4b de `01` (mecanismo) · `02B` (baseline de onboarding) · `02C` (baseline de pricing) · `19` (Big Idea/landing) · `34` (ángulos de ads) · `16` (la app modelo encabeza la TABLA DE LÍDERES)

## Cierre
- Fecha de cierre: 2026-09-22 · Aprobada por el usuario: pendiente (se presenta en este mensaje)
- Regla de caché: todo dato lleva fuente y FECHA — las fuentes gratuitas se cierran; lo cacheado aquí es la evidencia.
