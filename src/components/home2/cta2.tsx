import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CharacterReveal } from "@/components/motion/character-reveal";
import { cta2 } from "@/content/home-2";

/**
 * CTA final (home-2): titular gigante clicable, directo sobre el fondo.
 */
export function Cta2() {
  return (
    <section id="hablemos" className="relative py-36 sm:py-52">
      <div
        aria-hidden="true"
        className="section-depth pointer-events-none absolute inset-0 -z-10"
      />
      <Container>
        <ScrollReveal animation="blur-up">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {cta2.line}
          </p>
        </ScrollReveal>

        <Link
          href={cta2.primaryCta.href}
          className="group mt-8 inline-block"
          aria-label={cta2.primaryCta.label}
        >
          {/* Sin text-gradient: background-clip:text no pinta a través de los
             spans inline-block del CharacterReveal (quedarían invisibles). */}
          <CharacterReveal
            as="span"
            text={cta2.title}
            charDelay={40}
            className="block text-[clamp(3.5rem,14vw,10rem)] font-semibold leading-none tracking-tight transition-colors duration-300 group-hover:text-accent"
          />
          <span
            aria-hidden="true"
            className="mt-4 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
          />
        </Link>

        <ScrollReveal animation="blur-up" delay={200}>
          <p className="mt-12 max-w-lg text-sm leading-relaxed text-muted">
            {cta2.audience}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href={cta2.primaryCta.href}
              className="font-mono text-sm text-accent transition-colors hover:text-fg"
            >
              {cta2.primaryCta.label} <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={cta2.secondaryCta.href}
              className="font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              {cta2.secondaryCta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
