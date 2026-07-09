/**
 * Contenido del home. La frase del hero y las etiquetas están APROBADAS por
 * Manuel. Los cuerpos narrativos del Círculo Dorado (WHY/HOW/WHAT) usan
 * placeholders controlados marcados con [PENDIENTE] — NO son copy final.
 * La lista de "qué se construye" proviene del brief del cliente.
 */

export const hero = {
  greeting: "Hola, soy Manuel Ayala.",
  headline:
    "Transformo ideas, marcas, organizaciones y empresas en ecosistemas digitales que generan crecimiento.",
  tags: [
    "Branding",
    "Growth Marketing",
    "Software",
    "IA",
    "Educación",
    "Investigación",
  ],
  primaryCta: { label: "[PENDIENTE: CTA principal]", href: "#contacto" },
  secondaryCta: { label: "Ver el sistema de diseño", href: "/design-system" },
} as const;

export type GoldenBlock = {
  key: "why" | "how" | "what";
  eyebrow: string;
  title: string;
  /** Cuerpo narrativo — placeholder hasta recibir copy final. */
  body: string;
};

export const goldenCircle: ReadonlyArray<GoldenBlock> = [
  {
    key: "why",
    eyebrow: "WHY · Propósito",
    title:
      "Por qué importa conectar marca, negocio, operación, tecnología, datos e IA.",
    body: "[PENDIENTE: narrativa del WHY entregada por Manuel. Explica por qué las organizaciones necesitan integrar marca, negocio, operación, tecnología, datos e IA como un solo sistema.]",
  },
  {
    key: "how",
    eyebrow: "HOW · Método",
    title:
      "Cómo se construyen ecosistemas digitales que conectan cada capa.",
    body: "[PENDIENTE: narrativa del HOW entregada por Manuel. Describe el método para conectar branding, growth marketing, software, datos, automatización, educación e investigación.]",
  },
  {
    key: "what",
    eyebrow: "WHAT · Resultado",
    title: "Qué se construye.",
    body: "[PENDIENTE: introducción del WHAT entregada por Manuel.]",
  },
];

/** "Qué se construye" — proviene del brief del cliente. */
export const whatWeBuild: ReadonlyArray<{ label: string }> = [
  { label: "Plataformas digitales" },
  { label: "Productos digitales" },
  { label: "Apps" },
  { label: "E-commerce" },
  { label: "Marketplaces" },
  { label: "LMS (educación)" },
  { label: "Observatorios" },
  { label: "Automatizaciones" },
  { label: "Sistemas de inteligencia" },
  { label: "Sistemas de marca" },
  { label: "Sistemas de crecimiento" },
  { label: "Contenidos" },
];
