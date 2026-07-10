import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { GeometricSymbol } from "@/components/motion/geometric-symbol";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative">
      <Container className="py-24 sm:py-32">
        {/* Contenido flotando sobre el fondo global (sin card). */}
        <div className="mx-auto max-w-6xl text-center">
          {/* Avatar placeholder con anillo geométrico (glass mínimo). */}
          <div className="relative mx-auto mb-9 h-24 w-24 sm:h-28 sm:w-28">
            <GeometricSymbol
              variant="orbit"
              animate
              className="absolute inset-[-24%] text-accent opacity-70"
            />
            <div className="glass absolute inset-0 flex items-center justify-center rounded-full font-mono text-2xl font-semibold tracking-tight">
              MA
            </div>
          </div>

          {/* Etiqueta + H1 se renderizan de inmediato (LCP), sin animación. */}
          <p className="font-mono text-sm text-accent">{hero.greeting}</p>
          <h1 className="mx-auto mt-5 max-w-6xl text-pretty text-[clamp(1.85rem,2.9vw,2.4rem)] font-semibold leading-[1.14] tracking-tight">
            <span className="text-gradient">{hero.headline}</span>
          </h1>

          <ul
            className="mt-9 flex flex-wrap justify-center gap-2"
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
