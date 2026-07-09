import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { DataNetworkBackground } from "@/components/motion/data-network-background";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Capas de fondo: grid casi imperceptible + red de nodos muy sutil. */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        aria-hidden="true"
      />
      <DataNetworkBackground className="opacity-30" density={0.7} />

      <Container className="relative py-28 sm:py-40">
        {/* Greeting y H1 se renderizan de inmediato (LCP), sin animación. */}
        <p className="mb-4 font-mono text-sm text-accent">{hero.greeting}</p>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          <span className="text-gradient">{hero.headline}</span>
        </h1>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Disciplinas">
          {hero.tags.map((tag, i) => (
            <ScrollReveal as="li" key={tag} delay={i * 70}>
              <Tag>{tag}</Tag>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal
          animation="slide-up"
          delay={140}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
