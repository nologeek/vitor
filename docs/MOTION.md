# Motion & Scroll Storytelling

Prototipos de motion del proyecto, visibles en [`/design-system`](../src/app/design-system/page.tsx)
(sección "Motion & Scroll Storytelling"). **Aún no aplicados al home** — a la
espera de aprobación.

## Principios

- La animación **acompaña** la narrativa, nunca compite con el contenido.
- Ligero por defecto: CSS + Tailwind + IntersectionObserver; canvas 2D solo
  cuando está bien optimizado. Sin Three.js/Spline/WebGL, sin secuencias de
  imágenes, sin scroll-jacking, sin parallax agresivo.
- **Mobile-first** y degradación: los efectos pesados se reducen o desactivan.
- Respeto total a `prefers-reduced-motion`.
- Nada de animaciones costosas en el primer render (no animar el titular LCP).

## Componentes (`src/components/motion/`)

| Componente | Uso | Notas de performance |
| --- | --- | --- |
| `ScrollReveal` | Aparición fade-in / slide-up al entrar en viewport, con `delay` para stagger. | IntersectionObserver; oculto solo con `.js` (fallback sin-JS visible). |
| `CinematicSection` | Intro de bloque: titular grande, mucho aire, texto corto. `as` fija el nivel del título. | Sin JS. |
| `StickyStorySection` | Proceso por pasos con panel `position: sticky`. | Sin scroll-jacking; en mobile → lista apilada. |
| `DataNetworkBackground` | Fondo de nodos/líneas muy sutil (sensación de red de datos). | Canvas 2D, nodos capados, pausa fuera de viewport, estático en mobile/reduce-motion, `aria-hidden` + `pointer-events-none`. |
| `MotionCard` | Card con hover premium (borde luminoso, elevación, spotlight). | Spotlight solo con puntero de ratón; se anula con reduce-motion. |

## Recomendación de aplicación al home (pendiente de aprobación)

- **Aplicar:** ScrollReveal con stagger en WHY/HOW/WHAT; `DataNetworkBackground`
  muy sutil tras el hero; MotionCard en pilares/activos/portafolio;
  CinematicSection en aperturas de bloque.
- **Solo desktop:** spotlight de MotionCard, interacción del fondo con el mouse,
  sticky multi-paso completo.
- **Dejar solo en laboratorio (por ahora):** StickyStorySection en el home hasta
  validar cómo se siente.
