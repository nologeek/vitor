import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { hero2 } from "@/content/home-2";

/**
 * Hero manifiesto (home-2): tipografía como protagonista, viewport casi
 * completo, sin tarjetas ni fondo animado. El H1 se renderiza estático (LCP);
 * kicker, lede y CTAs entran con blur reveal.
 */
export function Hero2() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center">
      <div
        aria-hidden="true"
        className="glow-halo pointer-events-none absolute inset-x-0 top-0 h-1/2"
      />
      <Container>
        <ScrollReveal animation="blur-up">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            {hero2.kicker}
          </p>
        </ScrollReveal>

        <h1 className="mt-8 max-w-5xl text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
          {hero2.titleLines.map((line, i) => (
            <span key={line} className="block">
              <span className={i === hero2.titleLines.length - 1 ? "text-gradient" : ""}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <ScrollReveal animation="blur-up" delay={180}>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
            {hero2.lede}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="blur-up" delay={320}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href={hero2.primaryCta.href}>{hero2.primaryCta.label}</Button>
            <Button href={hero2.secondaryCta.href} variant="link">
              {hero2.secondaryCta.label} <span aria-hidden="true">→</span>
            </Button>
          </div>
        </ScrollReveal>
      </Container>

      {/* Indicador de scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent"
      />
    </section>
  );
}
