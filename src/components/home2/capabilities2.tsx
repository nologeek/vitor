import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { capabilities2 } from "@/content/home-2";

/**
 * Capacidades (home-2): lista editorial numerada con hairlines y hover de
 * desplazamiento sutil. Siete disciplinas como índice, no como cards.
 */
export function Capabilities2() {
  return (
    <section id="capacidades" className="py-32 sm:py-44">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
              {capabilities2.label}
            </p>
            <h2 className="mt-6 text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl">
              {capabilities2.title}
            </h2>
          </div>

          <ol>
            {capabilities2.items.map((item, i) => (
              <ScrollReveal
                as="li"
                key={item.title}
                delay={Math.min(i * 60, 360)}
                className="group border-t border-border/60 last:border-b last:border-border/60"
              >
                <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-6 transition-transform duration-300 group-hover:translate-x-2 sm:grid-cols-[3.5rem_1fr_minmax(0,240px)]">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted sm:col-start-3">
                    {item.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
