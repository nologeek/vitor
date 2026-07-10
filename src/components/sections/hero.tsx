import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GeometricSymbol } from "@/components/motion/geometric-symbol";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative">
      <Container className="py-16 sm:py-24">
        <div className="glass mx-auto max-w-3xl rounded-[2rem] px-6 py-14 text-center sm:px-14 sm:py-20">
          {/* Avatar placeholder con anillo geométrico. Reemplazable por foto real. */}
          <div className="relative mx-auto mb-8 h-28 w-28">
            <GeometricSymbol
              variant="orbit"
              animate
              className="absolute inset-[-22%] text-accent opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-full border border-border bg-bg font-mono text-2xl font-semibold tracking-tight">
              MA
            </div>
          </div>

          {/* Etiqueta + H1 (se renderizan de inmediato, sin animación: LCP). */}
          <p className="font-mono text-sm text-accent">{hero.greeting}</p>
          <h1 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            <span className="text-gradient">{hero.headline}</span>
          </h1>

          <ul
            className="mt-8 flex flex-wrap justify-center gap-2"
            aria-label="Disciplinas"
          >
            {hero.tags.map((tag, i) => (
              <ScrollReveal as="li" key={tag} delay={i * 70}>
                <Tag>{tag}</Tag>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal
            animation="slide-up"
            delay={140}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
