# VEREDICTO revisor-visual — landing
Fecha: 2026-09-22 00:00
Screenshot: docs/revisiones/landing-375.png
Usabilidad: 26/40
Craft: 13/20
Copy (si vende): 15/20
Fidelidad (si hubo referencia): N-A
Veredicto: NO LISTA
Top defectos:
1. [Oferta — CTAs "Calcular con el plan anual" / "Calcular con el plan mensual", app/page.tsx líneas 130 y 142] Ambos botones apuntan al mismo href genérico (CTA_HREF = '/onboarding') sin distinguir el plan elegido → pasar el plan como query param (/onboarding?plan=anual|mensual) y reflejarlo en el paso siguiente.
2. [AppPorDentro, primer frame del carrusel "Tu día, ya calculado"] Reutiliza el mismo mock /mocks/hoy.png que ya se vio en el Hero, restando valor a la sección → usar 4 mocks realmente distintos.
3. [HorizonDivider.tsx / Hero.tsx — dispositivo ownable] Sigue siendo una barra de 5×128px; a 375px real se lee como línea decorativa genérica entre secciones, no como firma de marca reconocible → aumentar su tamaño/tratamiento (ancho mayor con fade, o combinarla con un ícono/etiqueta fija).
4. [Faq.tsx, pregunta 5 "¿Cuánto tardo en ver resultados?"] No corresponde a ninguna de las 6 objeciones reales de FICHA-AVATAR.md, diluye el foco de la sección → sustituir por la objeción #5 (seguridad del pago/checkout), hoy solo fusionada dentro de la respuesta de suscripción.
5. [CtaButton, ui.tsx] No hay feedback de carga entre el tap y la navegación a /onboarding (ni spinner ni disabled temporal) → agregar estado de "cargando" breve tras whileTap.
