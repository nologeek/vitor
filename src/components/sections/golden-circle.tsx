import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { goldenCircle, whatWeBuild } from "@/content/home";

/**
 * Círculo Dorado: WHY → HOW → WHAT. La estructura está lista para recibir el
 * copy final de Manuel (hoy con placeholders [PENDIENTE]). El bloque WHAT
 * renderiza la lista real de "qué se construye" del brief.
 */
export function GoldenCircle() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="golden-circle">
      <Container>
        <h2 id="golden-circle" className="sr-only">
          Círculo Dorado: Por qué, Cómo y Qué
        </h2>

        <div className="flex flex-col gap-16">
          {goldenCircle.map((block) => (
            <article
              key={block.key}
              className="border-t border-border pt-10"
              id={block.key}
            >
              <SectionHeading eyebrow={block.eyebrow} title={block.title}>
                {block.body}
              </SectionHeading>

              {block.key === "what" ? (
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {whatWeBuild.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-[var(--radius-card)] border border-border bg-surface p-5 transition-colors hover:border-accent"
                    >
                      <span className="font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
