import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CharacterReveal } from "@/components/motion/character-reveal";
import { portfolio } from "@/content/home";

export function PortfolioTeaser() {
  return (
    <section id="portafolio" className="py-28 sm:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {portfolio.label}
          </p>
          <ScrollReveal>
            <CharacterReveal
              as="h2"
              text={portfolio.title}
              className="mt-6 block text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl"
            />
          </ScrollReveal>

          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {portfolio.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul
            className="mt-10 flex flex-wrap justify-center gap-2"
            aria-label="Categorías"
          >
            {portfolio.categories.map((category, i) => (
              <ScrollReveal as="li" key={category} delay={i * 45}>
                <Tag>{category}</Tag>
              </ScrollReveal>
            ))}
          </ul>

          <div className="mt-12">
            <Button href={portfolio.cta.href} variant="secondary">
              {portfolio.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
