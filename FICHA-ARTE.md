# FICHA DE DIRECCIÓN DE ARTE — SleepPayoff

## Referencia del usuario (CONTRATO)
- ¿Hay imagen(es) de referencia del usuario?: NO — el usuario eligió "propónmelo tú" (pregunta de referencia hecha 2026-09-22)
- Extracción: N/A — sin referencia-mandato, se aplica PASO 0.2bis (fusión de líderes)
- Prohibiciones anti-IA que la referencia LEVANTA: ninguna — se aplica la capa anti-IA completa (16, Regla 1)

## Identidad derivada (FUSIÓN de líderes — PASO 0.2bis)

**TABLA DE LÍDERES** (RISE encabeza por ser la app modelo de FICHA-MODELO.md):

| App | Tipografía real → equivalente | Lógica de color | Radius y cards | Navegación | Celebra/gamifica | UN patrón robable |
|---|---|---|---|---|---|---|
| RISE (líder #1, modelo) | Sans geométrica extra-bold, tracking apretado → equiv. **Space Grotesk** (Google Fonts) | Oscuro casi-negro, acento degradé cálido→frío (naranja → violeta), UNA nota por pantalla, sin multicolor decorativo | Cards oscuras con ring/barra de progreso, radius medio (~16px) | Bottom-tabs 4 (Sleep · Schedule · Progress · Learn) | Caritas de humor (😞😐🙂) para autoevaluar y anclar el resultado | El degradé naranja→violeta SOLO en el elemento que representa "energía/resultado" (nunca fondo completo) — [screenshot risescience.com, 2026-09-22] |
| Fabulous | Sans redondeada media → equiv. **Sora** | Cards con gradiente propio + sombra del MISMO color de la card (translúcida) | Cards muy redondeadas (~20-24px), efecto "flotante" | Tarjetas de journey/hábito apiladas | Animaciones de celebración al completar acción | Sombra tintada del color de la card (no gris neutro) — fuente: [Uiland — Fabulous screens](https://uiland.design/screens/fabulous/) |
| Headspace | Apercu (custom) → equiv. **Sora** / **General Sans** | Acento cálido naranja (#ff7300) como marca, opción de fondo crema en modo claro; NO se usa aquí (nos quedamos en oscuro por RISE + contexto nocturno) — se toma solo la idea de UN acento cálido dominante | — | — | Ilustración de rango de emociones (no solo positivas) | Un acento cálido único que "es" la marca, usado con disciplina (60-30-10) — fuente: [Figma Blog — Headspace Design System, 2026](https://www.figma.com/blog/building-a-design-system-that-breathes-with-headspace/) |
| Linear (craft giant, otro nicho) | — | Contraste cuidado en dark mode, sin ruido | Bordes finos, casi sin sombra | — | — | Micro-motion sutil sin exceso de celebración — robado para que el producto de deuda de sueño no se sienta "gamificado de más" (nuestro avatar rechaza lo decorativo) |

**LA FUSIÓN:**
- Tipografía: de RISE (display bold geométrico, equivalente Google Fonts **Space Grotesk**) — combinación probada contra `29`: Space Grotesk (display) + **Inter** (body, alta legibilidad para cifras y copy largo).
- Lógica de color: de RISE, tomada TAL CUAL — modo oscuro, fondo casi-negro, acento degradé cálido→frío como ÚNICO elemento de color saturado, reservado para lo que representa el resultado/energía.
- Tratamiento de cards: de Fabulous — sombra tintada del color de la card en vez de sombra gris genérica, para que la card de "resultado" se sienta premium sin agregar más color a la paleta.
- Disciplina de acento: de Headspace — un acento cálido dominante, usado con contención (60-30-10), no decorado de más.
- Anti-sobre-gamificación: de Linear — motion mínimo y funcional; nada de confeti ni rachas infantiles (el avatar Carlos rechaza explícitamente lo "decorativo"/gimmick).

- Arquetipo: El Sabio / El Fuera-de-serie sereno — comunica precisión y control, no diversión infantil (coherente con "cero falsas promesas" de FICHA-MODELO §7)
- Mundo del sujeto (0.45): el ciclo noche/día — el dispositivo ownable nace de ahí (ver abajo)
- Dirección del banco 54 para el DISPOSITIVO OWNABLE: **línea de horizonte nocturno** — un divisor delgado con el mismo degradé naranja→violeta de RISE, usado como separador consistente entre secciones (landing) y entre "modo noche / modo día" de la app — es un uso NUEVO de una paleta ya probada (RISE), no una paleta inventada. Líder de origen de la paleta: RISE (tomada tal cual).

## Personalidad compilada
- 3 adjetivos: preciso, calmado, sin adornos
- Compilación: spring suave (sin rebote exagerado) · duración base 220ms · exclamaciones máx 1/pantalla (el resultado numérico, no confeti) · celebración nivel bajo (solo un cambio de color/glow sutil en el número al mejorar, sin animación de personaje) · radio tendencial 16px

## Brand kit final
- Fondo: #0A0A10 (casi negro, tomado de RISE) · Superficie: #16161F · Hundido: #0D0D13 · Texto 1º/2º: #F5F5F7 / #9A9AA5
- Acento: degradé #FF7A45 → #7C4DFF (naranja→violeta, de RISE) — SOLO en: cifra de resultado, CTA principal, línea de horizonte (divisor) · 2ª nota: #34D399 (verde menta) — porqué: marca "energía recuperada / plan completado" y diferencia a SleepPayoff de RISE, que no usa verde como semántico
- Semánticos: éxito #34D399 · error #FF5C5C · aviso #FFC24B
- Display: Space Grotesk (pesos 500/700) · Body: Inter (pesos 400/500/600) · Escala: display 40px / title 24px / body 16px / label 13px
- Radio: 16px · Profundidad: sombras tintadas del color del elemento (no gris neutro) — tomado de Fabulous · Espaciado base: 4·8·12·16·24·32·48·64
- Dispositivo ownable: línea de horizonte degradé (receta propia, descrita arriba)
- Motion signature: easing ease-out suave · stagger 60ms · firma: el degradé de la línea de horizonte se "enciende" de izquierda a derecha al revelar una sección

## Trazabilidad y vetos
- Ruta de diseño: propuesta propia (fusión de líderes, sin referencia del usuario)
- Protocolo A/B/C: opción elegida **A — "Deuda Clara"** · descartadas: B "Recupero" (fusión Fabulous/verde menta/anillo), C "Bitácora" (fusión editorial serif/timeline) · página comparativa: [direcciones-abc.html](direcciones-abc.html) · screenshot: [docs/revisiones/direcciones-abc.png](docs/revisiones/direcciones-abc.png)
- Réplica fiel: N/A — no hubo referencia-mandato
- Tour de la app: [vista-previa-app.html](vista-previa-app.html) · vistas: M0/Hoy, onboarding (pregunta de quiz), paywall (anual/mensual), mecanismo (plan de 3 días) · screenshot: [docs/revisiones/vista-previa-app.png](docs/revisiones/vista-previa-app.png) · aprobado por el usuario: pendiente (se presenta en este mensaje)
- Paleta derivada de: RISE (líder de origen, tomada tal cual, doctrina 29) · Dispositivo ownable elegido: línea de horizonte degradé
- Registro anti-repetición: paleta oscura naranja→violeta + Space Grotesk/Inter — anotado en ESTADO.md, vetado para el próximo proyecto de este usuario
- Modo (claro/oscuro) DERIVADO por: lógica de color del líder #1 (RISE) + coherencia con el momento de uso del avatar (mañana temprano agotado / noche antes de dormir — el oscuro refuerza el contexto, no es un default estético)

## Idioma UI: español (LATAM neutro, tuteo) · Fecha de cierre: 2026-09-22 · Aprobada por el usuario: pendiente
