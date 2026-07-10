import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { work2 } from "@/content/home-2";

/**
 * Portafolio (home-2): teaser editorial + cinta tipográfica de categorías
 * (marquee GPU-friendly, se detiene con prefers-reduced-motion).
 */
export function Work2() {
  const tape = [...work2.categories, ...work2.categories];

  return (
    <section id="portafolio-2" className="py-32 sm:py-44">
      <Container>
        <ScrollReveal animation="blur-up">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            {work2.label}
          </p>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {work2.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {work2.line}
          </p>
        </ScrollReveal>
      </Container>

      {/* Cinta de categorías full-bleed */}
      <div className="marquee-mask mt-16 overflow-hidden" aria-hidden="true">
        <div className="marquee items-baseline gap-10 pr-10">
          {tape.map((cat, i) => (
            <span
              key={`${cat}-${i}`}
              className="flex items-baseline gap-10 whitespace-nowrap"
            >
              <span className="text-4xl font-semibold tracking-tight text-muted/60 sm:text-6xl">
                {cat}
              </span>
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
      {/* Lista accesible (el marquee es decorativo) */}
      <p className="sr-only">{work2.categories.join(", ")}</p>

      <Container>
        <div className="mt-16">
          <Button href={work2.cta.href} variant="secondary">
            {work2.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
