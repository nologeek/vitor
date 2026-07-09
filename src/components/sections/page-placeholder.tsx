import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Placeholder controlado para rutas cuyo contenido final aún no se entrega.
 * Mantiene la ruta navegable e indexable con SEO propio, sin inventar copy.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeading eyebrow={eyebrow} title={title}>
        {description}
      </SectionHeading>

      {children}

      <p className="mt-10 rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-6 text-sm text-muted">
        <span className="font-mono text-accent">[PENDIENTE]</span> Sección en
        construcción. Se completará con el material entregado por Manuel en las
        próximas fases del proyecto.
      </p>
    </Container>
  );
}
