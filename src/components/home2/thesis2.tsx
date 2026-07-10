import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { thesis2 } from "@/content/home-2";

/**
 * Tesis (home-2): apertura filosófica antes del trabajo. Líneas grandes con
 * blur reveal escalonado; la última línea remata con acento.
 */
export function Thesis2() {
  return (
    <section className="py-32 sm:py-44">
      <Container>
        <h2 className="max-w-4xl text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1.1] tracking-tight">
          {thesis2.lines.map((line, i) => (
            <ScrollReveal
              as="span"
              key={line}
              animation="blur-up"
              delay={i * 160}
              className={`block ${
                i === thesis2.lines.length - 1 ? "text-gradient" : ""
              }`}
            >
              {line}
            </ScrollReveal>
          ))}
        </h2>
        <ScrollReveal animation="blur-up" delay={520}>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-muted">
            {thesis2.support}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
