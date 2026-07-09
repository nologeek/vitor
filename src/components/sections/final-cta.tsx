import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <section id="contacto-cta" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60"
            aria-hidden="true"
          />
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{finalCta.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={finalCta.primaryCta.href}>
              {finalCta.primaryCta.label}
            </Button>
            <Button href={finalCta.secondaryCta.href} variant="secondary">
              {finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
