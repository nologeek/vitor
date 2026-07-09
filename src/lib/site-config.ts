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

/**
 * Fuente única de rutas del sitio. De aquí se derivan la navegación (header y
 * footer) y el sitemap, evitando desincronización. `title`/`description` se usan
 * como metadatos por defecto de cada página.
 */
export type Route = {
  path: string;
  label: string;
  title: string;
  description: string;
  /** Prioridad en sitemap (0–1). */
  priority: number;
  nav: { header: boolean; footer: boolean };
};

export const routes: ReadonlyArray<Route> = [
  {
    path: "/",
    label: "Inicio",
    title: "",
    description: siteConfig.description,
    priority: 1,
    nav: { header: false, footer: true },
  },
  {
    path: "/metodo",
    label: "Método",
    title: "Método",
    description:
      "Cómo se construyen ecosistemas digitales conectando branding, growth marketing, software, datos, automatización, educación e investigación.",
    priority: 0.7,
    nav: { header: true, footer: true },
  },
  {
    path: "/servicios",
    label: "Servicios",
    title: "Servicios",
    description:
      "Servicios de branding, growth marketing, desarrollo de software, IA, educación e investigación para construir ecosistemas digitales que generan crecimiento.",
    priority: 0.8,
    nav: { header: true, footer: true },
  },
  {
    path: "/portafolio",
    label: "Portafolio",
    title: "Portafolio",
    description:
      "Plataformas, productos digitales, apps, e-commerce, marketplaces, LMS, observatorios y sistemas construidos por Manuel Ayala.",
    priority: 0.8,
    nav: { header: true, footer: true },
  },
  {
    path: "/blog",
    label: "Blog",
    title: "Blog",
    description:
      "Ideas y pensamiento sistémico sobre marca, negocio, tecnología, datos e inteligencia artificial.",
    priority: 0.7,
    nav: { header: true, footer: true },
  },
  {
    path: "/sobre-mi",
    label: "Sobre mí",
    title: "Sobre mí",
    description:
      "Manuel Ayala, estratega híbrido que conecta branding, growth marketing, software, IA, educación e investigación.",
    priority: 0.6,
    nav: { header: true, footer: true },
  },
  {
    path: "/contacto",
    label: "Contacto",
    title: "Contacto",
    description:
      "Contacta a Manuel Ayala para explorar proyectos, colaboraciones y oportunidades.",
    priority: 0.6,
    nav: { header: true, footer: true },
  },
  {
    path: "/design-system",
    label: "Design System",
    title: "Design System",
    description:
      "Laboratorio vivo del sistema de diseño: colores, tipografía, componentes, estados y layouts.",
    priority: 0.4,
    nav: { header: false, footer: true },
  },
];

export const headerNav = routes.filter((r) => r.nav.header);
export const footerNav = routes.filter((r) => r.nav.footer);

/** Devuelve una ruta registrada por su path (falla en build si no existe). */
export function getRoute(path: string): Route {
  const route = routes.find((r) => r.path === path);
  if (!route) throw new Error(`Ruta no registrada en site-config: ${path}`);
  return route;
}

export type SiteConfig = typeof siteConfig;
