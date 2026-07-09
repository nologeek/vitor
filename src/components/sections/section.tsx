import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

/**
 * Envoltura semántica de sección con ritmo vertical consistente y contenedor
 * centrado. `divider` añade una línea superior sutil para separar bloques.
 */
export function Section({
  id,
  ariaLabelledby,
  divider = false,
  /** Desactiva el padding vertical propio (p. ej. cuando el hijo ya trae el
   * suyo, como CinematicSection). */
  padded = true,
  className = "",
  children,
}: {
  id?: string;
  ariaLabelledby?: string;
  divider?: boolean;
  padded?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${padded ? "py-16 sm:py-24" : ""} ${divider ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
