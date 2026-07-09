import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Design System",
  description:
    "Laboratorio vivo del sistema de diseño: colores, tipografía, componentes, estados y layouts del ecosistema de marca de Manuel Ayala.",
  path: "/design-system",
});

const TOKENS: ReadonlyArray<{ name: string; varName: string }> = [
  { name: "Background", varName: "--color-bg" },
  { name: "Surface", varName: "--color-surface" },
  { name: "Surface 2", varName: "--color-surface-2" },
  { name: "Foreground", varName: "--color-fg" },
  { name: "Muted", varName: "--color-muted" },
  { name: "Border", varName: "--color-border" },
  { name: "Accent", varName: "--color-accent" },
];

export default function DesignSystemPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading eyebrow="Laboratorio" title="Sistema de diseño">
        Documento vivo donde construimos y validamos el lenguaje visual del
        proyecto. Cambia el tema con el botón de la cabecera para ver cada token
        en claro y oscuro.
      </SectionHeading>

      {/* Colores / tokens */}
      <DSBlock title="1 · Colores y tokens">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {TOKENS.map((token) => (
            <div
              key={token.varName}
              className="overflow-hidden rounded-[var(--radius-card)] border border-border"
            >
              <div
                className="h-20 w-full"
                style={{ background: `var(${token.varName})` }}
              />
              <div className="bg-surface px-3 py-2">
                <p className="text-sm font-medium">{token.name}</p>
                <p className="font-mono text-xs text-muted">{token.varName}</p>
              </div>
            </div>
          ))}
        </div>
      </DSBlock>

      {/* Tipografía */}
      <DSBlock title="2 · Tipografía">
        <div className="space-y-4">
          <p className="text-5xl font-semibold tracking-tight">Aa — Geist Sans</p>
          <p className="font-mono text-2xl">Aa — Geist Mono</p>
          <div className="space-y-2 border-t border-border pt-4">
            <p className="text-4xl font-semibold tracking-tight">Display / H1</p>
            <p className="text-2xl font-semibold">Título / H2</p>
            <p className="text-lg text-muted">
              Cuerpo — texto de párrafo con color muted para lectura cómoda.
            </p>
            <p className="font-mono text-sm text-accent">
              mono / eyebrow · 0.2em tracking
            </p>
          </div>
        </div>
      </DSBlock>

      {/* Botones */}
      <DSBlock title="3 · Botones">
        <div className="flex flex-wrap items-center gap-4">
          <button className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5">
            Primario
          </button>
          <button className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
            Secundario
          </button>
          <button className="inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold text-muted transition-colors hover:bg-surface hover:text-fg">
            Ghost
          </button>
        </div>
      </DSBlock>

      {/* Tags */}
      <DSBlock title="4 · Etiquetas (tags)">
        <div className="flex flex-wrap gap-2">
          {siteConfig.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </DSBlock>

      {/* Cards */}
      <DSBlock title="5 · Cards y superficies">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Surface
            </p>
            <p className="mt-2 font-medium">Card base</p>
            <p className="mt-1 text-sm text-muted">
              Contenedor estándar sobre superficie con borde sutil.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-border bg-surface-2 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Surface 2
            </p>
            <p className="mt-2 font-medium">Card elevada</p>
            <p className="mt-1 text-sm text-muted">
              Nivel visual superior para destacar contenido.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-accent bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Accent
            </p>
            <p className="mt-2 font-medium">Card destacada</p>
            <p className="mt-1 text-sm text-muted">
              Borde de acento para estados activos o seleccionados.
            </p>
          </div>
        </div>
      </DSBlock>

      <p className="mt-16 rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-6 text-sm text-muted">
        <span className="font-mono text-accent">[PENDIENTE]</span> Próximos
        módulos: grids y layouts, estados (hover/focus/disabled), animaciones y
        motion, navegación, iconografía, inspiraciones y ejemplos de secciones.
      </p>
    </Container>
  );
}

function DSBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-border pt-10">
      <h3 className="mb-6 text-xl font-semibold tracking-tight">{title}</h3>
      {children}
    </section>
  );
}
