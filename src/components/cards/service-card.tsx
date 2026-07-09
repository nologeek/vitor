import type { ReactNode } from "react";

/** Card de servicio. Icono opcional + título (H3) + descripción. */
export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-colors hover:border-accent">
      {icon ? (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-accent"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
