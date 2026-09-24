# VEREDICTO revisor-visual — entrar
Fecha: 2026-09-23 00:00
Screenshot: docs/revisiones/entrar-375.png
Usabilidad: 30/40
Craft: 14/20
Copy (si vende): N-A
Fidelidad (si hubo referencia): N-A
Veredicto: NO LISTA
Top defectos:
1. [Botón "Continuar con Google", ambos pasos] Se ve y se comporta como CTA en vivo (mismo estilo, mismo peso visual que el resto de controles funcionales) pero al tocarlo NO hace login: solo mueve el foco al campo de correo y muestra un texto explicativo ("se activa junto con tu cuenta"). Un usuario real lo toca esperando el flujo de Google y recibe una redirección de foco desconcertante → ocultar el botón o marcarlo "Próximamente" (opacidad reducida + badge) hasta conectar OAuth real en el Paso 6; no simular una acción que no ocurre. Rompe la regla UX 11 ("todo elemento con apariencia interactiva hace algo definido") y la consistencia entre afordancia y comportamiento (heurística 4).
2. [Fondo, tercio superior e inferior en ambos pasos] Sigue leyéndose como negro plano. Los radiales de acento (18%/16% de opacidad) no alcanzan a cubrir los vacíos que dejó el nuevo centrado vertical — el problema reportado en la ronda anterior persiste, solo se movió de posición → subir el color-mix a ~26-30% y/o acercar los centros del gradiente al área visible real a 375px; considerar un segundo elemento decorativo sutil (textura, segunda línea de horizonte tenue) en las zonas que quedan mudas.
3. [Contenedor general, distribución vertical] El botón de cerrar (X) vive FUERA del bloque `flex-1 justify-center` (está en su propia fila con `pt-2`), así que el aire sobre el formulario (fila del botón + mitad del espacio centrado) es mayor que el aire debajo — la composición no queda realmente centrada pese al fix → mover el botón cerrar dentro del cálculo de centrado, o restar su altura del padding superior del bloque centrado.
4. [Mensaje "Escribe un correo válido"] No dice qué está mal específicamente (¿falta la arroba?, ¿falta el dominio?) — mejora respecto a la ronda anterior (el error de código sí quedó accionable) pero este mensaje de email quedó sin ese mismo nivel de detalle → especificar, ej. "Escribe un correo con formato válido (ej. tu@correo.com)".
5. [Footer del paso código] "¿Compraste y no te llega? Revisa spam o vuelve a intentar en unos minutos" es solo texto informativo, sin acción ni enlace de soporte real — un usuario bloqueado no tiene a dónde ir → agregar un enlace/mailto de soporte, no dejarlo como frase muda.
