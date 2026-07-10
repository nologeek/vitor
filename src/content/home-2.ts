/**
 * Contenido del HOME-2 (propuesta alternativa, ruta /home-2).
 * Copy reescrito y sintetizado a partir del contenido aprobado del home:
 * mensajes más cortos, editoriales y memorables. El home original permanece
 * intacto con su copy completo; este archivo no lo reemplaza.
 */

export const hero2 = {
  kicker: "Manuel Ayala — Estratega híbrido",
  /** Titular corto, tipográfico, en líneas deliberadas. */
  titleLines: ["Ecosistemas digitales", "que generan crecimiento."],
  lede: "Ideas, marcas y organizaciones transformadas en sistemas donde negocio, tecnología, datos e inteligencia artificial trabajan en la misma dirección.",
  primaryCta: { label: "Hablemos", href: "/contacto" },
  secondaryCta: { label: "Ver proyectos", href: "/portafolio" },
} as const;

/* Tesis: apertura filosófica antes del trabajo (síntesis de "Más allá del
   marketing"). */
export const thesis2 = {
  lines: ["El marketing solo", "no resuelve el crecimiento.", "Los sistemas sí."],
  support:
    "Estrategia, marca, operación, software, datos e IA, integrados para generar valor.",
} as const;

/* Transformaciones (mismo contenido aprobado, presentación editorial). */
export const transforms2 = [
  { from: "Presencia digital", to: "Confianza y autoridad" },
  { from: "Procesos", to: "Automatización" },
  { from: "Información", to: "Decisiones" },
  { from: "Esfuerzos comerciales", to: "Crecimiento" },
] as const;

/* Capacidades: los 7 pilares condensados a lista editorial. */
export const capabilities2 = {
  label: "Capacidades",
  title: "Siete disciplinas, un solo sistema.",
  items: [
    {
      title: "Estrategia y modelo de negocio",
      note: "Propuesta de valor, operación y rutas de crecimiento.",
    },
    {
      title: "Branding y filosofía empresarial",
      note: "Identidad, narrativa y posicionamiento.",
    },
    {
      title: "Growth Marketing",
      note: "Adquisición, conversión y medición.",
    },
    {
      title: "Software y plataformas",
      note: "Webs, apps, e-commerce y soluciones a medida.",
    },
    {
      title: "Datos e inteligencia de negocios",
      note: "Investigación, métricas y decisiones.",
    },
    {
      title: "IA y automatización",
      note: "Agentes, asistentes y flujos inteligentes.",
    },
    {
      title: "Educación y transferencia",
      note: "Formación y adopción tecnológica.",
    },
  ],
} as const;

/* Portafolio: teaser editorial con cinta de categorías. */
export const work2 = {
  label: "Portafolio",
  title: "Donde todo se integra para crecer.",
  line: "Experiencia construyendo sistemas y plataformas para empresas, instituciones, gremios, cooperativas y proyectos educativos.",
  categories: [
    "Empresas",
    "Instituciones",
    "Gremios",
    "Educación",
    "Finanzas",
    "E-commerce",
    "Tecnología",
    "Sector agua",
  ],
  cta: { label: "Ver portafolio", href: "/portafolio" },
} as const;

/* Método: 5 movimientos, una línea cada uno. */
export const method2 = {
  label: "Método",
  title: "Toda evolución necesita una arquitectura.",
  steps: [
    { title: "Diagnóstico", note: "Leer el negocio y su ecosistema." },
    { title: "Arquitectura", note: "Definir el modelo y la ruta." },
    { title: "Construcción", note: "Plataformas, contenidos y automatización." },
    { title: "Inteligencia", note: "Datos para decidir mejor." },
    { title: "Evolución", note: "Optimizar, documentar y escalar." },
  ],
} as const;

/* CTA final: gigante y directo. */
export const cta2 = {
  title: "Hablemos.",
  line: "Una idea, una marca, una plataforma o un proceso puede convertirse en un sistema.",
  audience:
    "Para empresas, marcas, instituciones, equipos, gremios y proyectos educativos que quieren crecer con claridad.",
  primaryCta: { label: "Iniciar una conversación", href: "/contacto" },
  secondaryCta: { label: "Ver proyectos", href: "/portafolio" },
} as const;
