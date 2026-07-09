import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { DSNav } from "@/components/design-system/ds-nav";
import { DSSection, DSLabel } from "@/components/design-system/ds-section";
import { Swatch } from "@/components/design-system/swatch";
import { LabFrame } from "@/components/design-system/lab-frame";
import { Reveal } from "@/components/design-system/reveal";
import { NodesGraphic } from "@/components/design-system/nodes-graphic";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MotionCard } from "@/components/motion/motion-card";
import { CinematicSection } from "@/components/motion/cinematic-section";
import { StickyStorySection } from "@/components/motion/sticky-story-section";
import { DataNetworkBackground } from "@/components/motion/data-network-background";
import { NumberedCard } from "@/components/cards/numbered-card";
import { StepCard } from "@/components/cards/step-card";
import { ProjectCard } from "@/components/cards/project-card";
import { ServiceCard } from "@/components/cards/service-card";
import { LogoCard } from "@/components/cards/logo-card";
import { MetricCard } from "@/components/cards/metric-card";
import { QuoteCard } from "@/components/cards/quote-card";
import { buildMetadata } from "@/lib/seo";
import { pillars, method, hero } from "@/content/home";
import {
  colorGroups,
  tagExamples,
  sampleProjects,
  sampleServices,
  sampleLogos,
  sampleMetrics,
  sampleQuote,
  usageRules,
  stickyStoryDemo,
} from "@/content/design-system";

export const metadata = buildMetadata({
  title: "Design System",
  description:
    "Laboratorio vivo del sistema de diseño: colores, tipografía, componentes, cards, layouts, navegación, animaciones y reglas de uso del ecosistema de marca de Manuel Ayala.",
  path: "/design-system",
});

export default function DesignSystemPage() {
  return (
    <Container className="py-16 sm:py-24">
      {/* 01 · Introducción */}
      <header id="introduccion" className="scroll-mt-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          01 · Laboratorio
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Sistema de diseño
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Este es el laboratorio visual del ecosistema digital de Manuel Ayala:
          el espacio para construir, probar y documentar el lenguaje de diseño
          antes de llevarlo al home o a páginas internas. Cambia el tema con el
          botón de la cabecera para ver cada elemento en claro y oscuro.
        </p>
        <div className="mt-8 max-w-md rounded-[var(--radius-card)] border border-border bg-surface p-6">
          <NodesGraphic />
        </div>
      </header>

      <DSNav />

      <div className="space-y-16">
        {/* 02 · Color */}
        <DSSection
          id="color"
          index="02"
          title="Paleta de color"
          description="Tokens semánticos por rol. Cambian de valor entre claro y oscuro manteniendo el mismo nombre."
        >
          <div className="space-y-8">
            {colorGroups.map((g) => (
              <div key={g.group}>
                <DSLabel>{g.group}</DSLabel>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {g.swatches.map((s) => (
                    <Swatch key={s.name} {...s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DSSection>

        {/* 03 · Tipografía */}
        <DSSection
          id="tipografia"
          index="03"
          title="Tipografía"
          description="Geist Sans para lectura, Geist Mono para señales técnicas (eyebrows, etiquetas y metadatos)."
        >
          <div className="divide-y divide-border">
            <TypeRow token="Display / H1" cls="text-4xl sm:text-5xl font-semibold tracking-tight">
              Ecosistemas digitales que crecen
            </TypeRow>
            <TypeRow token="Título / H2" cls="text-3xl font-semibold tracking-tight">
              Seis pilares conectados
            </TypeRow>
            <TypeRow token="Subtítulo / H3" cls="text-xl font-semibold">
              Estrategia empresarial
            </TypeRow>
            <TypeRow token="Cuerpo / p" cls="text-lg leading-relaxed text-muted">
              Texto de párrafo para lectura cómoda, con color muted y buen
              interlineado.
            </TypeRow>
            <TypeRow token="Caption" cls="text-sm text-muted">
              Texto de apoyo y pies de figura.
            </TypeRow>
            <TypeRow token="Etiqueta / mono" cls="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              WHY · La oportunidad
            </TypeRow>
            <TypeRow token="Texto pequeño" cls="text-xs text-muted">
              Metadatos, notas legales y detalles secundarios.
            </TypeRow>
          </div>
        </DSSection>

        {/* 04 · Botones y CTAs */}
        <DSSection
          id="botones"
          index="04"
          title="Botones y CTAs"
          description="Un único botón primario por vista. Secundario para acción alterna; ghost y link para acciones terciarias."
        >
          <DSLabel>Variantes</DSLabel>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#botones">Primario</Button>
            <Button href="#botones" variant="secondary">
              Secundario
            </Button>
            <Button href="#botones" variant="ghost">
              Ghost
            </Button>
            <Button href="#botones" variant="link">
              Link <span aria-hidden="true">→</span>
            </Button>
            <IconButton label="Ejemplo de botón de icono">
              <PlusIcon />
            </IconButton>
          </div>

          <DSLabel>Estados</DSLabel>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex h-12 items-center justify-center rounded-full bg-accent-solid px-6 text-sm font-semibold text-accent-fg">
              Normal
            </span>
            <span className="inline-flex h-12 items-center justify-center rounded-full bg-accent-solid px-6 text-sm font-semibold text-accent-fg outline outline-2 outline-offset-2 outline-[var(--ring)]">
              Focus
            </span>
            <button
              type="button"
              disabled
              className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-full bg-accent-solid px-6 text-sm font-semibold text-accent-fg opacity-40"
            >
              Disabled
            </button>
            <IconButton label="Icono deshabilitado" disabled>
              <PlusIcon />
            </IconButton>
          </div>
          <p className="mt-4 text-sm text-muted">
            Los estados hover y focus son interactivos: pasa el cursor o usa el
            teclado (Tab) sobre las variantes de arriba.
          </p>
        </DSSection>

        {/* 05 · Badges y tags */}
        <DSSection
          id="badges"
          index="05"
          title="Badges y tags"
          description="Etiquetas de disciplinas, categorías y estados del ecosistema."
        >
          <div className="flex flex-wrap gap-2">
            {tagExamples.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </DSSection>

        {/* 06 · Cards */}
        <DSSection
          id="cards"
          index="06"
          title="Cards"
          description="Familia de cards reutilizables. Los datos mostrados son de ejemplo (ilustrativos)."
        >
          <div className="space-y-10">
            <div>
              <DSLabel>Pillar card · Method card</DSLabel>
              <div className="grid gap-4 lg:grid-cols-2">
                <NumberedCard
                  index={1}
                  title={pillars.items[0].title}
                  description={pillars.items[0].description}
                />
                <ol>
                  <StepCard
                    index={1}
                    title={method.steps[0].title}
                    description={method.steps[0].description}
                    isLast
                  />
                </ol>
              </div>
            </div>

            <div>
              <DSLabel>Project card</DSLabel>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sampleProjects.map((p) => (
                  <ProjectCard key={p.title} {...p} />
                ))}
              </div>
            </div>

            <div>
              <DSLabel>Service card</DSLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                {sampleServices.map((s) => (
                  <ServiceCard key={s.title} {...s} icon={<SparkIcon />} />
                ))}
              </div>
            </div>

            <div>
              <DSLabel>Portfolio logo card</DSLabel>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {sampleLogos.map((name) => (
                  <LogoCard key={name} name={name} />
                ))}
              </div>
            </div>

            <div>
              <DSLabel>Metric card</DSLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                {sampleMetrics.map((m) => (
                  <MetricCard key={m.label} {...m} />
                ))}
              </div>
            </div>

            <div>
              <DSLabel>Quote / testimonial card</DSLabel>
              <div className="max-w-2xl">
                <QuoteCard {...sampleQuote} />
              </div>
            </div>
          </div>
        </DSSection>

        {/* 07 · Layouts de sección */}
        <DSSection
          id="layouts"
          index="07"
          title="Layouts de sección"
          description="Patrones de composición para armar páginas. Mockups a escala reducida."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <LabFrame label="Hero">
              <MockEyebrow>Hola, soy Manuel Ayala.</MockEyebrow>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gradient">
                Ecosistemas digitales que generan crecimiento.
              </p>
              <div className="mt-4 flex gap-2">
                <MockPill primary>Hablemos</MockPill>
                <MockPill>Ver proyectos</MockPill>
              </div>
            </LabFrame>

            <LabFrame label="Sección narrativa">
              <MockEyebrow>WHY · La oportunidad</MockEyebrow>
              <p className="mt-2 text-xl font-semibold tracking-tight">
                El crecimiento ocurre cuando todo apunta en la misma dirección.
              </p>
              <p className="mt-3 text-sm text-muted">
                Cuerpo de apoyo con buen aire y jerarquía clara.
              </p>
            </LabFrame>

            <LabFrame label="Grid de cards">
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-lg border border-border bg-surface p-4"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{n}
                    </span>
                    <div className="mt-2 h-2 w-3/4 rounded bg-surface-2" />
                    <div className="mt-1.5 h-2 w-1/2 rounded bg-surface-2" />
                  </div>
                ))}
              </div>
            </LabFrame>

            <LabFrame label="Texto + visual">
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <p className="text-lg font-semibold">Sistema conectado</p>
                  <p className="mt-2 text-sm text-muted">
                    Texto a la izquierda, apoyo visual a la derecha.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-3">
                  <NodesGraphic />
                </div>
              </div>
            </LabFrame>

            <LabFrame label="Sección de logos">
              <div className="grid grid-cols-4 gap-3">
                {sampleLogos.slice(0, 4).map((name) => (
                  <div
                    key={name}
                    className="flex h-12 items-center justify-center rounded-lg border border-border bg-surface text-xs text-muted"
                  >
                    logo
                  </div>
                ))}
              </div>
            </LabFrame>

            <LabFrame label="CTA final">
              <div className="rounded-lg border border-border bg-surface bg-grid p-6 text-center">
                <p className="text-lg font-semibold tracking-tight">
                  Hablemos de lo que quieres construir.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <MockPill primary>Hablemos</MockPill>
                  <MockPill>Ver proyectos</MockPill>
                </div>
              </div>
            </LabFrame>
          </div>
        </DSSection>

        {/* 08 · Navegación */}
        <DSSection
          id="navegacion"
          index="08"
          title="Navegación"
          description="Variantes de cabecera, pie y barras con CTA. Mockups ilustrativos."
        >
          <div className="space-y-6">
            <LabFrame label="Header desktop" padded={false}>
              <div className="flex items-center justify-between px-6 py-4">
                <MockBrand />
                <div className="hidden items-center gap-4 text-sm text-muted sm:flex">
                  <span>Método</span>
                  <span>Servicios</span>
                  <span>Portafolio</span>
                  <span>Blog</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
                    <SunIconMini />
                  </span>
                </div>
              </div>
            </LabFrame>

            <div className="grid gap-6 lg:grid-cols-2">
              <LabFrame label="Header mobile simple" padded={false}>
                <div className="flex items-center justify-between px-5 py-4">
                  <MockBrand />
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                    <MenuIcon />
                  </span>
                </div>
              </LabFrame>

              <LabFrame label="Navegación con CTA" padded={false}>
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="flex gap-4 text-sm text-muted">
                    <span>Servicios</span>
                    <span>Método</span>
                  </div>
                  <MockPill primary>Hablemos</MockPill>
                </div>
              </LabFrame>
            </div>

            <LabFrame label="Footer" padded={false}>
              <div className="px-6 py-6">
                <MockBrand />
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted sm:grid-cols-4">
                  <span>Inicio</span>
                  <span>Servicios</span>
                  <span>Portafolio</span>
                  <span>Contacto</span>
                </div>
                <div className="mt-4 border-t border-border pt-3 text-xs text-muted">
                  © Manuel Ayala
                </div>
              </div>
            </LabFrame>
          </div>
        </DSSection>

        {/* 09 · Animaciones */}
        <DSSection
          id="animaciones"
          index="09"
          title="Animaciones sutiles"
          description="Microinteracciones ligeras en CSS/IntersectionObserver (sin librerías). Todas respetan prefers-reduced-motion."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal animation="fade-in">
              <DemoBox>fade-in (al entrar en viewport)</DemoBox>
            </Reveal>
            <Reveal animation="slide-up">
              <DemoBox>slide-up (al entrar en viewport)</DemoBox>
            </Reveal>
            <div className="ds-glow-hover flex items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface p-8 text-sm text-muted">
              glow suave (hover)
            </div>
            <div className="flex items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface p-8">
              <NodesGraphic />
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            Los botones y cards de todo el sitio ya incluyen transiciones de
            color y elevación al hover.
          </p>
        </DSSection>

        {/* 10 · Motion & Scroll Storytelling */}
        <DSSection
          id="motion"
          index="10"
          title="Motion & Scroll Storytelling"
          description="Prototipos de motion premium: aparición por scroll, storytelling sticky, fondo de datos y cards con vida. Ligero, accesible y respetando prefers-reduced-motion. Aún NO aplicado al home."
        >
          <div className="space-y-14">
            {/* Hero con fondo de nodos */}
            <div>
              <DSLabel>Hero con fondo de nodos · DataNetworkBackground</DSLabel>
              <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg">
                <DataNetworkBackground className="opacity-40" density={0.8} />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="relative p-8 sm:p-12">
                  <p className="font-mono text-xs text-accent">
                    {hero.greeting}
                  </p>
                  <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-gradient sm:text-4xl">
                    {hero.headline}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {hero.tags.slice(0, 4).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <MockPill primary>Hablemos</MockPill>
                    <MockPill>Ver proyectos</MockPill>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">
                Fondo muy sutil (opacidad baja), pausado fuera de viewport,
                estático en mobile / reduce-motion. El titular no se anima en el
                primer render.
              </p>
            </div>

            {/* Sección cinemática */}
            <div>
              <DSLabel>Sección cinemática amplia · CinematicSection</DSLabel>
              <div className="glow-halo overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface px-6 sm:px-10">
                <CinematicSection
                  as="h3"
                  eyebrow="HOW · Sistema"
                  title="Ecosistemas que conectan negocio, marca, datos e inteligencia."
                >
                  Bloque alto, mucho espacio negativo, titular grande y texto
                  corto. El ritmo lo marca el scroll.
                </CinematicSection>
              </div>
            </div>

            {/* Sticky storytelling */}
            <div>
              <DSLabel>Sticky storytelling por pasos · StickyStorySection</DSLabel>
              <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
                <StickyStorySection label="Método" steps={stickyStoryDemo} />
              </div>
              <p className="mt-3 text-sm text-muted">
                Panel fijo con <code className="font-mono text-xs">position: sticky</code>{" "}
                nativo (sin scroll-jacking). En mobile degrada a lista apilada.
              </p>
            </div>

            {/* Cards con motion + reveal stagger */}
            <div>
              <DSLabel>Grilla de cards con motion · MotionCard + ScrollReveal</DSLabel>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.items.slice(0, 3).map((item, i) => (
                  <ScrollReveal
                    key={item.title}
                    animation="slide-up"
                    delay={i * 90}
                  >
                    <MotionCard className="h-full rounded-[var(--radius-card)] border border-border bg-surface p-6">
                      <span className="font-mono text-sm text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </MotionCard>
                  </ScrollReveal>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted">
                Aparición con stagger + hover premium (borde luminoso, elevación
                mínima y spotlight en desktop).
              </p>
            </div>

            {/* Capas visuales / microinteracciones */}
            <div>
              <DSLabel>Capas visuales y microinteracciones</DSLabel>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="glass rounded-[var(--radius-card)] p-6">
                  <p className="font-medium">Glass surface</p>
                  <p className="mt-1 text-sm text-muted">
                    Superficie translúcida con blur.
                  </p>
                </div>
                <div className="glow-halo rounded-[var(--radius-card)] border border-border bg-surface p-6">
                  <p className="font-medium">Glow halo</p>
                  <p className="mt-1 text-sm text-muted">
                    Halo de acento muy sutil.
                  </p>
                </div>
                <MotionCard className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
                  <p className="font-medium">Motion card</p>
                  <p className="mt-1 text-sm text-muted">
                    Pasa el cursor: borde + spotlight.
                  </p>
                </MotionCard>
              </div>
            </div>

            {/* Cuándo usar cada patrón */}
            <div>
              <DSLabel>Cuándo usar cada patrón</DSLabel>
              <div className="grid gap-4 sm:grid-cols-2">
                {motionUsage.map((rule) => (
                  <div
                    key={rule.title}
                    className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
                  >
                    <h3 className="text-lg font-semibold tracking-tight">
                      {rule.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {rule.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DSSection>

        {/* 11 · Reglas de uso */}
        <DSSection
          id="reglas"
          index="11"
          title="Reglas de uso"
          description="Criterios para mantener coherencia visual y accesibilidad."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {usageRules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {rule.body}
                </p>
              </div>
            ))}
          </div>
        </DSSection>
      </div>
    </Container>
  );
}

/* -------------------------------------------------------------------------- */
/*  Helpers locales del laboratorio                                            */
/* -------------------------------------------------------------------------- */

const motionUsage: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "ScrollReveal",
    body: "Para aparición suave de textos, listas y cards al entrar en viewport. Usa stagger (delay incremental) en grids. Evítalo en el titular LCP del hero.",
  },
  {
    title: "CinematicSection",
    body: "Para intros de bloque con titular grande y mucho aire. Ideal en las aperturas de WHY/HOW/WHAT. No abuses: una o dos por página.",
  },
  {
    title: "StickyStorySection",
    body: "Para explicar un proceso por pasos (p. ej. el método). Solo cuando aporte narrativa. En mobile degrada a lista apilada.",
  },
  {
    title: "DataNetworkBackground / MotionCard",
    body: "Fondo de nodos muy sutil detrás de secciones clave (hero); MotionCard en cards de pilares/portafolio/servicios. Ambos se reducen o desactivan en mobile y con reduce-motion.",
  },
];

function TypeRow({
  token,
  cls,
  children,
}: {
  token: string;
  cls: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <p className={`${cls} text-balance`}>{children}</p>
      <span className="shrink-0 font-mono text-xs text-muted">{token}</span>
    </div>
  );
}

function DemoBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface p-8 text-sm text-muted">
      {children}
    </div>
  );
}

function MockEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

function MockPill({
  children,
  primary = false,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-8 items-center rounded-full px-4 text-xs font-semibold ${
        primary
          ? "bg-accent-solid text-accent-fg"
          : "border border-border text-muted"
      }`}
    >
      {children}
    </span>
  );
}

function MockBrand() {
  return (
    <span className="font-mono text-sm font-semibold">
      Manuel Ayala<span className="text-accent">.</span>
    </span>
  );
}

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    </svg>
  );
}

function SunIconMini() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
