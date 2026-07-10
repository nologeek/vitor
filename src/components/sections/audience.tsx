import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GeometricSymbol,
  type GeometricVariant,
} from "@/components/motion/geometric-symbol";
import { audience } from "@/content/home";

/* Un símbolo por tipo de audiencia. */
const VARIANTS: ReadonlyArray<GeometricVariant> = [
  "triangle", // Empresas
  "circle", // Marcas
  "layers", // Instituciones
  "node", // Equipos
  "grid", // Gremios
  "orbit", // Proyectos educativos
];

export function Audience() {
  return (
    <section id="para-quien" className="relative py-24 sm:py-36">
      <div
        aria-hidden="true"
        className="section-depth pointer-events-none absolute inset-0 -z-10"
      />
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {audience.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
            {audience.title}
          </h2>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audience.items.map((item, i) => (
            <ScrollReveal
              as="li"
              key={item.type}
              animation="slide-up"
              delay={i * 70}
              className="motion-card group flex flex-col rounded-[var(--radius-card)] border border-border/70 bg-surface/50 p-7 backdrop-blur-sm"
            >
              <span className="motion-card__spot" aria-hidden="true" />
              <GeometricSymbol
                variant={VARIANTS[i % VARIANTS.length]}
                animate
                className="h-10 w-10 text-accent"
              />
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-muted">
                {item.type}
              </p>
              <p className="mt-2 text-lg leading-relaxed">{item.text}</p>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
