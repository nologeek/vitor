import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { transforms2 } from "@/content/home-2";

/**
 * Transformaciones (home-2): filas editoriales con hairlines. Entrada → salida
 * en una tabla tipográfica de dos columnas, estilo case-study.
 */
export function Transforms2() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <ul>
          {transforms2.map((t, i) => (
            <ScrollReveal
              as="li"
              key={t.from}
              delay={i * 80}
              className="group grid grid-cols-1 gap-2 border-t border-border/60 py-7 transition-colors last:border-b last:border-border/60 sm:grid-cols-2 sm:items-baseline sm:gap-10"
            >
              <span className="font-mono text-sm uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-fg">
                {t.from}
              </span>
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                <span aria-hidden="true" className="mr-3 text-accent">
                  →
                </span>
                {t.to}
              </span>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
