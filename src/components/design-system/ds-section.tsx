import type { ReactNode } from "react";

/** Bloque de sección del laboratorio: índice + título (H2) + descripción. */
export function DSSection({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-32 border-t border-border pt-14"
    >
      <p className="font-mono text-xs text-accent">{index}</p>
      <h2
        id={`${id}-title`}
        className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{description}</p>
      ) : null}
      <div className="mt-10">{children}</div>
    </section>
  );
}

/** Subtítulo de bloque dentro de una sección (etiqueta mono). */
export function DSLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}
