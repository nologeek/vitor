import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

/**
 * Sección editorial (inspiración case-study): columna izquierda con label y
 * lista breve de metadatos/ideas + columna principal con titular grande.
 * Divisoria vertical fina solo en desktop; sin líneas horizontales duras.
 * `as` controla el nivel del titular (H2 por defecto).
 */
export function EditorialSection({
  id,
  label,
  items,
  title,
  as: TitleTag = "h2",
  children,
}: {
  id?: string;
  label: string;
  items?: ReadonlyArray<string>;
  title: ReactNode;
  as?: "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <section id={id} className="py-24 sm:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-20">
          {/* Columna de metadatos */}
          <div className="lg:border-r lg:border-border/60 lg:pr-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {label}
            </p>
            {items && items.length > 0 ? (
              <ul className="mt-6 space-y-2.5">
                {items.map((item, i) => (
                  <ScrollReveal as="li" key={item} delay={i * 60}>
                    <span className="text-sm leading-relaxed text-muted">
                      {item}
                    </span>
                  </ScrollReveal>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Titular principal */}
          <div>
            <TitleTag className="max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-[2.6rem]">
              {title}
            </TitleTag>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
