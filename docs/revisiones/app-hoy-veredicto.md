# VEREDICTO revisor-visual — app-hoy
Fecha: 2026-09-23 00:00
Screenshot: docs/revisiones/app-hoy-375.png
Usabilidad: 31/40
Craft: 14/20
Copy (si vende): N-A
Fidelidad (si hubo referencia): N-A
Veredicto: NO LISTA
Top defectos:
1. [pantalla completa, estado "registrado"/"editando"] Vacío muerto ~35-40% del alto de pantalla bajo la card "Desconéctate hoy a las 22:00" hasta el BottomNav → agregar un bloque más (mini-tendencia semanal, progreso del plan, insight secundario) para que la pantalla se sienta llena en TODOS los estados, no solo con el formulario abierto.
2. [header] Cifra héroe (4xl/36px, "5.0h") y título "Hoy" (3xl/30px) quedan muy cerca en tamaño — al entrecerrar los ojos compiten como el mismo nivel de jerarquía en vez de 2 niveles claros → bajar el título a ~24-26px o su peso, para que ceda dominancia clara al dato de deuda.
3. [card de deuda acumulada] El borde-gradiente + shadow-2 (glow) alrededor de la cifra se acerca a la receta "glow regado en card" que el propio sistema prohíbe como huella de diseño genérico-IA, pese a estar documentado como intencional (fusión RISE/Fabulous) → atenuar la intensidad del glow (sombra más sutil, borde más fino) para que lea "card premium" y no "card neón".
4. [badge "X días seguidos", esquina superior derecha] Forma de píldora con ícono y borde imita la afordancia de un chip/botón tocable pero es un `<span>` sin acción → o se le da una acción (ver detalle de racha) o se le quita el tratamiento de borde/relleno que sugiere interactividad.
