import type { ReactNode } from "react";

/** Lienzo etiquetado para mostrar ejemplos de layout/navegación aislados. */
export function LabFrame({
  label,
  padded = true,
  children,
}: {
  label: string;
  padded?: boolean;
  children: ReactNode;
}) {
  return (
    <figure>
      <figcaption className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </figcaption>
      <div
        className={`overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg ${
          padded ? "p-6 sm:p-8" : ""
        }`}
      >
        {children}
      </div>
    </figure>
  );
}
