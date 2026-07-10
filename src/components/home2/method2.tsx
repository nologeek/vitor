import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { method2 } from "@/content/home-2";

/**
 * Método (home-2): cinco movimientos en columnas minimalistas, con una línea
 * de progreso que las une. Sin paneles: solo tipografía y hairlines.
 */
export function Method2() {
  return (
    <section id="metodo-2" className="py-32 sm:py-44">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            {method2.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {method2.title}
          </h2>
        </div>

        <ol className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {method2.steps.map((step, i) => (
            <ScrollReveal as="li" key={step.title} delay={i * 90}>
              <div className="border-t border-border/60 pt-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.note}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
