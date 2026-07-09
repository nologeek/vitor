# Motion & Scroll Storytelling

Prototipos visibles en [`/design-system`](../src/app/design-system/page.tsx)
(sección "Motion & Scroll Storytelling"). Desde la Fase 3.1, un subconjunto
**ya está aplicado al home real** para validar la experiencia con contenido
real; el resto permanece como prototipo de laboratorio.

## Principios

- La animación **acompaña** la narrativa, nunca compite con el contenido.
- Ligero por defecto: CSS + Tailwind + IntersectionObserver; canvas 2D solo
  cuando está bien optimizado. Sin Three.js/Spline/WebGL, sin secuencias de
  imágenes, sin scroll-jacking, sin parallax agresivo.
- **Mobile-first** y degradación: los efectos pesados se reducen o desactivan.
- Respeto total a `prefers-reduced-motion`.
- Nada de animaciones costosas en el primer render (no se anima el H1/LCP).

## Componentes (`src/components/motion/`)

| Componente | Uso | Notas de performance |
| --- | --- | --- |
| `ScrollReveal` | Aparición fade-in / slide-up al entrar en viewport, con `delay` para stagger. | IntersectionObserver; oculto solo con `.js` (fallback sin-JS visible). |
| `CinematicSection` | Intro de bloque: titular grande, mucho aire, texto corto. `as` fija el nivel del título. | Sin JS. |
| `StickyStorySection` | Proceso por pasos con panel `position: sticky`. | Sin scroll-jacking; en mobile → lista apilada. |
| `DataNetworkBackground` | Fondo de nodos/líneas canvas 2D **muy sutil**. | Nodos capados, pausa fuera de viewport, **frame estático (sin loop) en mobile y con reduce-motion**, `aria-hidden`, `pointer-events-none`. |
| `MotionCard` | Card con hover premium (borde luminoso, elevación, spotlight). Prop `as` para renderizar como `article`/`div`. | Spotlight solo con puntero de ratón; se anula con reduce-motion. |

## Estado de aplicación (Fase 3.1)

**✅ Aplicado al home:**
- **Hero**: `DataNetworkBackground` muy sutil (`opacity-30`, `density={0.7}`) detrás del contenido. El saludo y el H1 se renderizan de inmediato sin animación (no afectan LCP). Tags con `ScrollReveal` + stagger corto. CTAs con entrada suave.
- **La oportunidad / Más allá del marketing / La propuesta**: `CinematicSection` (bloques ~70–80vh, mucho aire, titular grande). Listas y la frase de énfasis con `ScrollReveal`.
- **Pilares y Activos que se pueden construir**: `NumberedCard` en modo `motion` (usa `MotionCard`) + `ScrollReveal` con stagger por card.
- **Método de trabajo**: `StickyStorySection` — encaje natural porque son 5 pasos secuenciales de un proceso (Diagnóstico → Evolución). Panel `position: sticky` nativo, sin scroll-jacking; en mobile degrada a lista apilada.
- **Perfil híbrido y Para quién**: `ScrollReveal` con stagger en tags y lista.

**🧪 Solo en el laboratorio (por ahora):**
- Interacción de `DataNetworkBackground` con el puntero **fuera del hero** — no se replicó en otras secciones para no repetir el efecto y mantener el fondo como firma exclusiva del hero.
- Variantes adicionales de `MotionCard` (project/service/logo/metric/quote cards) — pertenecen a fases futuras (portafolio, servicios).
- `Reveal`/`NodesGraphic` originales del módulo 09 (versión previa) — se mantienen como muestra histórica junto a la versión evolucionada.

**Por qué `StickyStorySection` NO se usó en "La propuesta":** las 4 transformaciones (`Presencia digital → Confianza…`) son pares independientes, no una secuencia con orden narrativo — forzar un panel fijo "paso 1 de 4" ahí se sentía artificial. En cambio, el Método sí es un proceso ordenado (cada paso depende del anterior), que es exactamente el caso de uso de un sticky storytelling.

## Recomendaciones de ajuste fino

- Si el fondo de nodos se percibe demasiado presente en pantallas grandes, bajar `density` a `0.5` o `opacity-20`.
- El stagger de `ScrollReveal` usa incrementos de 40–90ms; si se siente lento en listas largas, capar el delay máximo (p. ej. `Math.min(i * 70, 400)`).
- `StickyStorySection` solo se probó en Método; antes de reutilizarlo en otra sección, validar que el contenido tenga una progresión real de pasos.
