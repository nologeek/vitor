/**
 * Datos del laboratorio visual (/design-system). Todo aquí es material de
 * DEMOSTRACIÓN (muestras controladas), no contenido final del sitio.
 */

/* Índice de secciones (para la navegación interna del laboratorio). */
export const dsSections = [
  { id: "introduccion", label: "Introducción" },
  { id: "color", label: "Color" },
  { id: "tipografia", label: "Tipografía" },
  { id: "botones", label: "Botones y CTAs" },
  { id: "badges", label: "Badges y tags" },
  { id: "cards", label: "Cards" },
  { id: "layouts", label: "Layouts" },
  { id: "navegacion", label: "Navegación" },
  { id: "animaciones", label: "Animaciones" },
  { id: "motion", label: "Motion & Scroll" },
  { id: "reglas", label: "Reglas de uso" },
] as const;

/* Pasos de demostración para el prototipo de sticky storytelling. */
export const stickyStoryDemo: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Diagnóstico",
    body: "Se lee el negocio, la marca, los usuarios, los procesos y la tecnología para entender qué debe conectarse.",
  },
  {
    title: "Arquitectura",
    body: "Se define el modelo de crecimiento, la narrativa, la experiencia y la ruta de implementación.",
  },
  {
    title: "Construcción",
    body: "Se construyen plataformas, contenidos, automatizaciones e integraciones con medición desde el inicio.",
  },
  {
    title: "Evolución",
    body: "Se optimiza, se documenta y se escala con estrategia, datos e inteligencia artificial.",
  },
];

/* Paleta agrupada por rol semántico. */
export const colorGroups: ReadonlyArray<{
  group: string;
  swatches: ReadonlyArray<{ name: string; varName: string; hint: string }>;
}> = [
  {
    group: "Superficies y fondos",
    swatches: [
      { name: "Background", varName: "--color-bg", hint: "Fondo base de página" },
      { name: "Surface", varName: "--color-surface", hint: "Cards y paneles" },
      { name: "Surface 2", varName: "--color-surface-2", hint: "Nivel elevado" },
    ],
  },
  {
    group: "Texto",
    swatches: [
      { name: "Foreground", varName: "--color-fg", hint: "Texto principal" },
      { name: "Muted", varName: "--color-muted", hint: "Texto secundario" },
    ],
  },
  {
    group: "Bordes y acento",
    swatches: [
      { name: "Border", varName: "--color-border", hint: "Bordes y divisores" },
      { name: "Accent", varName: "--color-accent", hint: "Acción y foco" },
      { name: "Accent FG", varName: "--color-accent-fg", hint: "Texto sobre acento" },
    ],
  },
];

/* Tags del ecosistema. */
export const tagExamples = [
  "Branding",
  "Growth Marketing",
  "Software",
  "IA",
  "Educación",
  "Investigación",
  "Automatización",
  "Datos",
  "Estrategia empresarial",
] as const;

/* Muestras de cards (datos de ejemplo, no reales). */
export const sampleProjects = [
  {
    category: "Institucional",
    title: "Plataforma de ejemplo",
    description:
      "Portal con arquitectura de contenidos, formularios y analítica. Muestra de disposición de una project card.",
  },
  {
    category: "E-commerce",
    title: "Tienda de ejemplo",
    description:
      "Catálogo, checkout y automatización comercial. Contenido ilustrativo para demostración visual.",
  },
  {
    category: "Educación",
    title: "LMS de ejemplo",
    description:
      "Academia virtual con cursos y transferencia de conocimiento. Placeholder de portafolio.",
  },
] as const;

export const sampleServices = [
  {
    title: "Estrategia y arquitectura",
    description:
      "Diagnóstico, modelo de crecimiento y ruta de implementación del ecosistema.",
  },
  {
    title: "Construcción de plataformas",
    description:
      "Webs, productos digitales, e-commerce, LMS y soluciones a medida.",
  },
  {
    title: "IA y automatización",
    description:
      "Agentes, asistentes, integraciones y flujos operativos inteligentes.",
  },
] as const;

export const sampleLogos = [
  "Logotipo 01",
  "Logotipo 02",
  "Logotipo 03",
  "Logotipo 04",
  "Logotipo 05",
  "Logotipo 06",
] as const;

export const sampleMetrics = [
  { value: "6", label: "Pilares del ecosistema" },
  { value: "8", label: "Categorías de portafolio" },
  { value: "10", label: "Módulos del sistema visual" },
] as const;

export const sampleQuote = {
  quote:
    "Espacio reservado para un testimonio real. Este texto es una plantilla que ilustra la disposición de una quote card.",
  author: "[Nombre del cliente]",
  role: "[Cargo · Organización]",
} as const;

/* Reglas de uso (documentación viva). */
export const usageRules: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Jerarquía",
    body: "Un solo H1 por página (título principal). Secciones con H2 y títulos de card con H3. No saltar niveles.",
  },
  {
    title: "Aire visual",
    body: "Ritmo vertical de sección: py-16 en móvil, py-24 en desktop. Priorizar espacio en blanco sobre densidad.",
  },
  {
    title: "Color y acento",
    body: "El acento (accent) se reserva para acción, foco y señales; nunca como fondo de bloques largos. Texto largo en fg/muted.",
  },
  {
    title: "Botones",
    body: "Un único botón primario por vista/sección. Secundario para acción alterna, ghost/link para acciones terciarias.",
  },
  {
    title: "Cards",
    body: "Radio var(--radius-card), borde border, fondo surface. Hover: borde accent. Contenido escaneable, descripciones breves.",
  },
  {
    title: "Movimiento",
    body: "Microinteracciones sutiles (fade/slide/glow). Siempre respetar prefers-reduced-motion. Sin animaciones que distraigan.",
  },
  {
    title: "Accesibilidad",
    body: "Contraste suficiente en ambos temas, foco visible (ring), objetivos táctiles ≥ 40px, textos alternativos en imágenes.",
  },
];
