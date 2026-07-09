/**
 * Contenido FINAL del home (aprobado por Manuel). Estructura orientada a
 * storytelling con narrativa Círculo Dorado: WHY → HOW → WHAT.
 * El enfoque es la solución/el sistema/el valor para organizaciones.
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
  primaryCta: { label: "Hablemos", href: "/contacto" },
  secondaryCta: { label: "Ver proyectos", href: "/portafolio" },
} as const;

/* WHY --------------------------------------------------------------------- */

export const opportunity = {
  eyebrow: "WHY · La oportunidad",
  title:
    "El crecimiento ocurre cuando la marca, el negocio, la operación y la tecnología trabajan en la misma dirección.",
  lines: [
    "Una presencia digital puede atraer.",
    "Una marca puede generar confianza.",
    "Una estrategia puede abrir mercado.",
    "Un sistema puede ordenar procesos.",
    "Y la inteligencia artificial puede acelerar la forma en que una organización aprende, decide y crece.",
  ],
} as const;

export const beyondMarketing = {
  eyebrow: "WHY · Más allá del marketing",
  title: "El marketing por sí solo no resuelve el crecimiento.",
  paragraphs: [
    "Una organización también necesita claridad de negocio, propuesta de valor, procesos, datos, tecnología y capacidad de ejecución.",
    "Por eso el reto no es solo comunicar mejor.",
  ],
  emphasis:
    "El reto es construir sistemas donde la estrategia empresarial, la marca, el marketing, la operación, el software, los datos y la inteligencia artificial se integren para generar valor.",
} as const;

/* HOW --------------------------------------------------------------------- */

export const proposal = {
  eyebrow: "HOW · La propuesta",
  title: "Diseñar ecosistemas que conecten lo importante.",
  intro:
    "Negocio, marca, marketing, operación, software, datos e inteligencia artificial.",
  transformations: [
    { from: "Presencia digital", to: "Confianza y autoridad" },
    { from: "Procesos", to: "Automatización" },
    { from: "Información", to: "Decisiones" },
    { from: "Esfuerzos comerciales", to: "Crecimiento" },
  ],
} as const;

export const pillars = {
  eyebrow: "HOW · Pilares del ecosistema",
  title: "Seis pilares conectados para construir ecosistemas digitales completos.",
  items: [
    {
      title: "Estrategia empresarial y modelo de negocio",
      description:
        "Propuesta de valor, operación, procesos, oportunidades, sistema empresarial y rutas de crecimiento.",
    },
    {
      title: "Branding y filosofía empresarial",
      description:
        "Identidad, narrativa, posicionamiento, propósito, valores, cultura y claridad estratégica.",
    },
    {
      title: "Growth Marketing",
      description:
        "Adquisición, conversión, contenido, funnels, loops, campañas, medición y crecimiento.",
    },
    {
      title: "Software, plataformas y productos digitales",
      description:
        "Webs, portales, apps móviles, e-commerce, marketplaces, directorios, observatorios de datos, LMS y soluciones a medida.",
    },
    {
      title: "Datos, investigación e inteligencia de negocios",
      description:
        "Investigación de mercado, comportamiento humano, análisis de sistemas, métricas, reportes, dashboards y toma de decisiones.",
    },
    {
      title: "Inteligencia artificial, automatización y educación",
      description:
        "Agentes, asistentes, flujos inteligentes, automatización de procesos, transferencia de conocimiento, formación y adopción tecnológica.",
    },
  ],
} as const;

export const method = {
  eyebrow: "HOW · Método de trabajo",
  title: "Toda evolución necesita una arquitectura.",
  intro:
    "El trabajo empieza por entender el negocio, leer el ecosistema y encontrar qué debe conectarse para generar valor.",
  steps: [
    {
      title: "Diagnóstico",
      description:
        "Marca, negocio, usuarios, procesos, canales, datos, tecnología y capacidades internas.",
    },
    {
      title: "Arquitectura estratégica",
      description:
        "Modelo de crecimiento, narrativa, experiencia, operación, herramientas y ruta de implementación.",
    },
    {
      title: "Construcción",
      description:
        "Plataformas, productos digitales, contenidos, automatizaciones, integraciones y sistemas de medición.",
    },
    {
      title: "Inteligencia",
      description:
        "Datos, indicadores, dashboards, investigación, reportes y aprendizajes para decidir mejor.",
    },
    {
      title: "Evolución",
      description:
        "Optimización, documentación, capacitación, automatización y escalamiento con estrategia, tecnología e IA.",
    },
  ],
} as const;

/* WHAT -------------------------------------------------------------------- */

export const assets = {
  eyebrow: "WHAT · Qué se puede construir",
  title:
    "Cada ecosistema puede tomar una forma distinta según el momento de la organización.",
  scenarios: [
    "Una marca que necesita orden.",
    "Una empresa que necesita vender mejor.",
    "Un equipo que necesita automatizar procesos.",
    "Una institución que necesita una plataforma.",
    "Un gremio que necesita organizar información.",
    "Un proyecto educativo que necesita transferir conocimiento.",
  ],
  itemsTitle: "Activos que se pueden construir",
  items: [
    {
      title: "Plataformas web institucionales",
      description:
        "Sitios, portales, arquitectura de contenidos, formularios, analítica y operación.",
    },
    {
      title: "Productos digitales",
      description:
        "Apps móviles, marketplaces, directorios, observatorios, e-commerce y soluciones a medida.",
    },
    {
      title: "Sistemas de crecimiento",
      description:
        "Funnels, campañas, CRM, automatización comercial, contenidos y loops de adquisición.",
    },
    {
      title: "Sistemas de inteligencia",
      description:
        "Dashboards, investigación, analítica, datos de mercado, reportes y observatorios.",
    },
    {
      title: "Sistemas de automatización con IA",
      description:
        "Agentes, asistentes, integraciones, flujos operativos, reporting y productividad aumentada.",
    },
    {
      title: "Experiencias educativas",
      description:
        "LMS, academias virtuales, cursos, documentación, formación y transferencia de conocimiento.",
    },
  ],
} as const;

export const portfolio = {
  eyebrow: "WHAT · Portafolio",
  title:
    "Sistemas, plataformas y estrategias donde todo se integra para crecer.",
  paragraphs: [
    "Experiencia construyendo sistemas, plataformas, estrategias digitales y procesos de automatización para empresas, instituciones, gremios, cooperativas y proyectos educativos.",
    "Proyectos donde la estrategia, la tecnología, los datos y la inteligencia artificial se integran para crear ecosistemas de crecimiento.",
  ],
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

/* Cierre ------------------------------------------------------------------ */

export const hybridProfile = {
  eyebrow: "Perfil híbrido",
  title: "Una mirada híbrida para construir soluciones completas.",
  body: "Administración, marketing, branding, educación, investigación, software e inteligencia artificial se integran para leer el negocio, diseñar la estrategia, construir la solución y acompañar a los equipos en nuevas formas de trabajar.",
  tags: [
    "Estrategia empresarial",
    "Modelo de negocio",
    "Branding y filosofía empresarial",
    "Growth Marketing",
    "Software y plataformas",
    "Datos e inteligencia de negocios",
    "IA y automatización",
    "Educación y transferencia",
  ],
} as const;

export const audience = {
  eyebrow: "Para quién es este trabajo",
  title: "Para organizaciones que quieren crecer con más claridad.",
  items: [
    "Empresas que buscan ordenar su estrategia digital.",
    "Marcas que quieren confianza y autoridad.",
    "Instituciones que necesitan plataformas y mejores procesos.",
    "Equipos que quieren automatizar su operación.",
    "Gremios que gestionan información y generan valor.",
    "Proyectos educativos que crean experiencias de aprendizaje.",
  ],
} as const;

export const finalCta = {
  title:
    "Una idea, una marca, una plataforma o un proceso puede convertirse en un sistema.",
  subtitle: "Hablemos de lo que quieres construir.",
  primaryCta: { label: "Hablemos", href: "/contacto" },
  secondaryCta: { label: "Ver proyectos", href: "/portafolio" },
} as const;
