# Sistema visual

Decisiones de dirección de arte del home y su representación en
[`/design-system`](../src/app/design-system/page.tsx).

## Rediseño de storytelling (fase actual)

El home se rediseñó como una experiencia editorial por scroll. **Se retiraron
las líneas divisorias duras** entre secciones (el ritmo lo dan el espacio,
gradientes de profundidad y cambios de composición). Se retiraron los eyebrows
en inglés (WHY/HOW/WHAT); los labels ahora son en español directo. El **Perfil
híbrido** se ocultó del home (el contenido se conserva en `content/home.ts`).

Componentes nuevos, cada uno documentado en `/design-system`:

| Componente | Aplicado en |
| --- | --- |
| `EditorialSection` | Oportunidad · intro de "Qué se puede construir" |
| `CharacterReveal` | Énfasis de "Más allá del marketing" · titular de Portafolio |
| `ProposalOrbitDiagram` | La propuesta (reemplaza flow lineal) |
| `SevenPillarsMap` | Pilares (7 pilares en órbita, sticky + lista lateral) |
| `MethodPathway` | Método (paneles alternos con conectores dibujados) |
| `DepthCardsRow` | Activos que se pueden construir |
| `SiteFooter` (reescrito) | Footer real con firma, políticas y redes ("Próximamente" hasta tener URLs) |

`StickyStorySection` y `EcosystemFlowDiagram` **ya no se usan en el home**; se
conservan como patrones documentados en el laboratorio para otros contextos.

## Fondo global — `GlobalDataGridBackground`

Capa **fixed** (grid CSS **parcial** + red de nodos en canvas 2D) que persiste
durante todo el scroll del home.

- **Grid parcial**: no cubre todo por igual — se concentra en una zona (esquina
  arriba-derecha) y se desvanece con máscara radial + vignette de profundidad.
  Delicado en light, con algo más de cuerpo en dark. Nunca domina la pantalla.
- Nodos/líneas **sutiles pero perceptibles** (acento azul, baja opacidad),
  movimiento lento, reacción suave al mouse (desktop), parallax muy leve.
- **Estático** en mobile y con `prefers-reduced-motion`; `aria-hidden` +
  `pointer-events-none` (no bloquea lectura ni interacción).
- Una sola instancia por página. Hoy solo en el home (`src/app/page.tsx`);
  reutilizable en otras rutas cuando se valide.

## Hero editorial (flotante) — `sections/hero.tsx`

El contenido **flota sobre el fondo** (sin card pesada): avatar placeholder
(iniciales **MA**) con anillo geométrico `orbit` y glass mínimo, etiqueta, H1
centrado y ancho (~2 líneas en desktop, `clamp()` para el tamaño), tags y CTAs.
Los textos aprobados no cambian; el H1 no se anima (LCP). La foto real reemplaza
el placeholder sin tocar la estructura.

## Diagrama de flujo — `sections/ecosystem-flow-diagram.tsx`

`EcosystemFlowDiagram`: secuencia de transformaciones (entrada → salida) como
**arquitectura de sistema** — nodos con `GeometricSymbol` conectados por una
espina, micro-animación por scroll (stagger). Aplicado en el home en **"La
propuesta"** para representar `presencia digital → confianza`, `procesos →
automatización`, `información → decisiones`, `esfuerzos comerciales →
crecimiento`. No es infografía corporativa.

## Geometría simbólica — `motion/geometric-symbol.tsx`

SVG inline reutilizable. Variantes: `orbit · node · grid · loop · triangle ·
circle · diamond · layers`. Líneas finas, trazos punteados, puntos; acento azul,
baja opacidad; rotación lenta opcional (`animate`) que respeta reduce-motion.
Color por `currentColor`. **Hoy solo en el hero**; el resto se revisa en
`/design-system` antes de aplicarlo a pilares/servicios/método.

## Editorial case — `sections/editorial-case-layout.tsx`

Encabezado tipo case study: columna de metadatos (Year / Deliverables / Sector)
+ titular grande, divisoria fina, mucho aire, blanco/negro premium. **Solo
prototipado** en `/design-system`; se aplicará a `/portafolio` en fases futuras.

## Paleta

Sin cambios respecto a Fase 3.1: ~90% blanco/negro/grises + azul de marca
(`#325FEC` principal / `#518FFF` secundario) solo como energía visual (CTAs,
líneas, nodos, geometría, glows, estados). Ver `docs/DESIGN-PRINCIPLES.md`.

## Performance

Sin librerías nuevas, sin WebGL, sin scroll-jacking. Un único canvas fijo
(nodos capados por área), animaciones solo-`transform`, todo con guardas de
`prefers-reduced-motion` y degradación en mobile. H1 sin animación.
