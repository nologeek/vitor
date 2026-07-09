/**
 * Configuración central del sitio. Punto único de verdad para identidad,
 * navegación, URLs y metadatos base. Cambiar el dominio final (nolo.com.co)
 * es solo actualizar las variables de entorno del despliegue.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// URL pública completa (incluye subpath en GitHub Pages, vacío en dominio raíz).
export const baseUrl = `${rawSiteUrl.replace(/\/$/, "")}${basePath}`;

export const siteConfig = {
  name: "Manuel Ayala",
  shortName: "Manuel Ayala",
  // Titular corto para <title> / marca.
  role: "Estratega híbrido en branding, growth, software e IA",
  description:
    "Manuel Ayala transforma ideas, marcas, organizaciones y empresas en ecosistemas digitales que generan crecimiento, conectando branding, growth marketing, software, datos, automatización, IA, educación e investigación.",
  url: baseUrl,
  locale: "es-CO",
  // Dominio final del proyecto (aún no conectado).
  finalDomain: "https://nolo.com.co",
  author: {
    name: "Manuel Ayala",
    // TODO: reemplazar por handles/URLs reales cuando estén confirmados.
    email: "vmayalav@gmail.com",
  },
  tags: [
    "Branding",
    "Growth Marketing",
    "Software",
    "IA",
    "Educación",
    "Investigación",
  ],
  // Enlaces sociales — [PENDIENTE]: completar con URLs reales.
  social: {
    linkedin: "",
    github: "https://github.com/nologeek",
    x: "",
  },
} as const;

export const nav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Inicio", href: "/" },
  { label: "Design System", href: "/design-system" },
  // Rutas futuras (Fases 4–5), se activan cuando exista contenido:
  // { label: "Proyectos", href: "/proyectos" },
  // { label: "Blog", href: "/blog" },
];

export type SiteConfig = typeof siteConfig;
