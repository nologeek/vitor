# Principios de diseño

La estética debe evocar: **sofisticación, futurismo, inteligencia, evolución,
claridad, pensamiento sistémico, innovación, tecnología elegante y autoridad
profesional.** No plantillas genéricas.

## Principios

1. **Claridad sobre decoración.** Cada elemento comunica; el espacio en blanco
   es intencional. Minimalismo con propósito.
2. **Sistema, no páginas sueltas.** Todo nace de tokens y componentes
   reutilizables. Coherencia = autoridad.
3. **Dual por diseño.** Claro y oscuro se cuidan por igual; ninguno es un
   "modo secundario".
4. **Tipografía como estructura.** Geist Sans para lectura, Geist Mono para
   señales técnicas (eyebrows, etiquetas, metadatos).
5. **Movimiento sobrio.** Micro-interacciones sutiles; se respeta
   `prefers-reduced-motion`.
6. **Rendimiento es diseño.** Rápido, accesible y ligero. Sin librerías
   innecesarias.

## Tokens (resumen)

- Color: `bg`, `surface`, `surface-2`, `fg`, `muted`, `border`, `accent`,
  `accent-fg`, `ring`.
- Radios: `--radius-card` (1rem), `--radius-pill` (999px).
- Acento base: índigo/violeta (inteligencia + futurismo), ajustado por tema.

Referencia viva y ejemplos: [`/design-system`](../src/app/design-system/page.tsx).
