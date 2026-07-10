import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { finalCta } from "@/content/home";

/** CTA final directamente sobre el fondo (sin contenedor pesado). */
export function FinalCta() {
  return (
    <section
      id="contacto-cta"
      className="relative py-32 sm:py-48"
    >
      <div
        aria-hidden="true"
        className="section-depth pointer-events-none absolute inset-0 -z-10"
      />
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            <span className="text-gradient">{finalCta.title}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {finalCta.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={220}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href={finalCta.primaryCta.href}>
              {finalCta.primaryCta.label}
            </Button>
            <Button href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
