# Sistema visual (refinamiento)

Decisiones de dirección de arte del home y su representación en
[`/design-system`](../src/app/design-system/page.tsx). No cambia contenido ni
narrativa; solo lenguaje visual, fondo, geometría y jerarquía.

## Fondo global — `GlobalDataGridBackground`

Capa **fixed** (grid CSS + red de nodos en canvas 2D) que persiste durante todo
el scroll del home.

- Grid sutil por tema (light delicado, dark con algo más de profundidad),
  máscara radial que desvanece los bordes.
- Nodos/líneas de baja opacidad, movimiento lento, reacción suave al mouse
  (desktop), parallax muy leve al scroll.
- **Estático** en mobile y con `prefers-reduced-motion`; `aria-hidden` +
  `pointer-events-none` (no bloquea lectura ni interacción).
- Una sola instancia por página. Hoy solo en el home (`src/app/page.tsx`);
  reutilizable en otras rutas cuando se valide.

## Hero editorial — `sections/hero.tsx`

Panel central redondeado (glass) con: avatar placeholder (iniciales **MA**) y
anillo geométrico `orbit`, etiqueta, H1 centrado (sin animación, LCP), tags y
CTAs. Los textos aprobados no cambian. La foto real reemplaza el placeholder
sin tocar la estructura.

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
