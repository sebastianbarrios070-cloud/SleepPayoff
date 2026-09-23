# Copy marcado — Landing SleepPayoff

> Cada pieza se traza a [FICHA-AVATAR.md](../../FICHA-AVATAR.md) (avatar "Carlos") y a
> [FICHA-MODELO.md](../../FICHA-MODELO.md) (mecanismo derivado de RISE, eje: registro 100% manual).
> Modelo de monetización: onboarding-first (Modelo 2) — todos los CTA van a `/onboarding`, nunca
> directo a checkout. Mecanismo bautizado: **el Plan de 3 Días**.
> Marcadores: `[acento]…[/acento]` = la palabra que vende · `[b]…[/b]` = énfasis.

## 1. Hero
- h1Marked: `Sabe [acento]exactamente[/acento] cuándo desconectarte hoy`
- subtitleMarked: `30 segundos, cero sensores. [b]Calcula tu deuda de sueño[/b] y recibe tu plan de recuperación de 3 días.`
- ctaLabel: `Calcular mi deuda de sueño gratis`
- ctaHref: `/onboarding`
- socialProof: `2 días gratis · sin reloj inteligente · cancela cuando quieras`
- visualPlaceholderSugerencia: captura de la pantalla "Hoy" — deuda de sueño en grande + plan de 3 pasos (ver vista-previa-app.html, vista 1)

Traza: DESEO #1 de FICHA-AVATAR ("saber a qué hora apagar la pantalla hoy") + DOLOR #1 ("neblina mental a las 2 PM").

## 2. Problema — "¿Te suena?"
| Ícono (lucide-react) | Pregunta marcada |
|---|---|
| `Brain` | `¿Sientes una neblina mental a las 2 PM que no te deja avanzar?` |
| `AlarmClock` | `¿Te despiertas sintiendo que no descansaste, aunque dormiste 8 horas?` |
| `Coffee` | `¿Tomas 3 o 4 cafés al día solo para mantener los ojos abiertos?` |
| `Moon` | `¿Apagas la luz agotado pero tu mente no se apaga?` |

Traza: Dolores #1, #2 y VoC "Tengo la cabeza como con neblina" / "Me siento en modo zombi" de FICHA-AVATAR.

## 3. Agitación
- frases:
  1. `Cada semana pierdes horas de trabajo facturable por la neblina mental de la tarde.`
  2. `En 1 año, ese cansancio acumulado son [acento]miles de dólares[/acento] en entregas tardías y errores.`
  3. `Otra app que solo te dice que dormiste mal no lo arregla: [b]más gráficos no es más energía[/b].`
- contraste:
  - labelHoy: `Hoy`
  - hoy: `6.3 horas de deuda de sueño y ningún plan para pagarla.`
  - labelFuturo: `En 6 meses, si nada cambia`
  - futuro: `El mismo ciclo de cansancio y culpa — con 6 meses menos de rendimiento.`

Traza: campo "COSTO DE LA INACCIÓN" de FICHA-AVATAR + VoC "Sleep tracking is a giant gimmick that just gives you a random score without actionable steps."

## 4. Solución
- tituloMarked: `Tu energía, [acento]traducida a un plan[/acento]`
- mecanismo: `el Plan de 3 Días`
- bigIdeaMarked: `No te falta disciplina: te falta un número. El Plan de 3 Días te dice [b]exactamente cuándo desconectarte[/b] para pagar tu deuda de sueño.`
- pasos:
  1. titulo: `Registra tus horas` · detalle: `30 segundos, sin reloj inteligente ni sensores.`
  2. titulo: `Calculamos tu deuda` · detalle: `Tu cifra exacta de horas de sueño pendientes.`
  3. titulo: `Sigues tu plan` · detalle: `Hora de desconexión y siesta estratégica para hoy.`
- antesDespues:
  - labelAntes: `Antes` · antes: `Adivinas por qué estás agotado a las 2 PM.`
  - labelDespues: `Después` · despues: `Sabes la hora exacta para desconectarte y recuperar el 80% de tu energía mañana.`

Traza: eje de diferenciación de FICHA-MODELO §7 (registro manual, no wearables) + objeción #2 de FICHA-AVATAR.

## 5. La app por dentro (mid-page CTA)
- tituloMarked: `Tu día, [acento]ya calculado[/acento]`
- frames:
  1. label: `Tu deuda de sueño de hoy` · nombrePantalla: `Hoy`
  2. label: `Así te preguntamos al empezar` · nombrePantalla: `Onboarding`
  3. label: `Tu plan de 3 días en progreso` · nombrePantalla: `Plan`
  4. label: `Elige tu plan` · nombrePantalla: `Paywall`
- ctaLabel / ctaHref: igual que el Hero

Fuente visual: vista-previa-app.html (las 4 vistas ya aprobadas por el usuario).

## 6. Oferta
- tituloMarked: `Empieza gratis. Sigue por [acento]$0.10 al día[/acento]`
- trialDias: `2`
- stack:
  - lineas:
    1. resultado: `SleepPayoff Pro — Plan de 3 Días ilimitado (12 meses)` · valor: `$60`
    2. resultado: `Cálculo diario de tu deuda de sueño` · valor: `$15`
    3. resultado: `Hora exacta de desconexión cada noche` · valor: `$12`
  - totalTachado: `$87`
  - nota: `Hoy: $3.00/mes (se cobra $36.00/año)`
- anual:
  - nombre: `Anual` · badge: `MÁS POPULAR` · precioMes: `$3.00` · totalAnual: `Se cobra $36.00/año` · ahorro: `Ahorra 40%` · descomposicionDia: `menos de $0.10 al día`
  - ctaLabel: `Empezar mis 2 días gratis` · ctaHref: `/onboarding`
  - features: `Cálculo diario de tu deuda de sueño` · `Plan de recuperación de 3 días` · `Hora exacta de desconexión cada noche` · `Registro 100% manual, sin wearables`
- mensual:
  - nombre: `Mensual` · precioMes: `$5.00`
  - ctaLabel: `Elegir mensual` · ctaHref: `/onboarding`
  - features: `Cálculo diario de tu deuda de sueño` · `Plan de recuperación de 3 días` · `Hora exacta de desconexión cada noche` · `Cancelas cuando quieras`

Precios: decisión del usuario 2026-09-22 (ver ESTADO.md) — $5/mes, $36/año ($3/mes), 2 días de trial.

## 7. Garantía
- nombre: `la Garantía Cero Falsas Promesas`
- condicionMarked: `Si en tus primeros 2 días el cálculo no te da una hora de desconexión clara para hoy, escribes un correo y te devolvemos todo. Sin preguntas.`
- pisoLegal: `Cancelas y pides reembolso desde la app — el pago lo procesa Stripe, nunca guardamos tu tarjeta.`

Traza: FICHA-MODELO §7 ("cero falsas promesas") + objeción de pago (Stripe) de FICHA-AVATAR.

## 8. FAQ (las 6 objeciones de FICHA-AVATAR)
1. **¿Necesito un reloj inteligente o dejar el teléfono prendido toda la noche?**
   `No — [b]registro 100% manual[/b], 30 segundos por la mañana y 30 por la noche. Cero sensores.`
2. **Ya probé apps de sueño y las abandono, ¿esto es distinto?**
   `Sí: no te mostramos un gráfico bonito de lo mal que dormiste — te damos [b]la hora exacta[/b] para desconectarte hoy.`
3. **¿Es una suscripción más que voy a olvidar cancelar?**
   `$5/mes (~$0.17/día) o $3/mes en el plan anual. Cancelas [b]cuando quieras[/b] desde la app, sin llamadas.`
4. **¿Es seguro poner mi tarjeta?**
   `El pago lo procesa Stripe — nunca vemos ni guardamos el número de tu tarjeta.`
5. **Mi horario de trabajo es caótico, ¿igual funciona?**
   `Sí — el cálculo [b]se adapta al horario que ingreses[/b], no asume que duermes de 10 PM a 6 AM.`
6. **¿Cuánto tardo en ver resultados?**
   `Tu primer cálculo sale en 30 segundos. El plan de 3 días te muestra progreso [b]desde el día 1[/b].`

## 9. CTA final
- h2Marked: `Imagina saber [acento]exactamente[/acento] cuándo desconectarte`
- futurePacingMarked: `Esta noche registras tus horas, mañana recibes tu plan — y a las 2 PM ya no te agarra la neblina mental por sorpresa.`
- ctaLabel: `Calcular mi deuda de sueño gratis` · ctaHref: `/onboarding`
- recap: `Garantía Cero Falsas Promesas · 2 días gratis`
- psMarked: `PS: SleepPayoff calcula tu deuda de sueño y te da un plan de 3 días para pagarla — sin wearables, sin teoría de fases REM. Hoy entras con 2 días gratis.`

## 10. Footer legal
- appName: `SleepPayoff`
- soporteEmail: `soporte@sleeppayoff.app` — **NO ENCONTRADO / pendiente**: dominio aún no registrado, ver ESTADO.md "Problemas conocidos"
- enlaces: `/privacidad` · `/terminos` · `/reembolsos` · `/aviso-ia` — páginas stub pendientes de crear (ver ESTADO.md)
