/** Card numerada para pilares y activos. Título como H3 (jerarquía SEO). */
export function NumberedCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <article className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-colors hover:border-accent">
      <span
        className="font-mono text-sm text-accent"
        aria-hidden="true"
      >
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-balance">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
