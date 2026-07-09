/** Card de proyecto para portafolio. Título como H3. */
export function ProjectCard({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface transition-colors hover:border-accent">
      <div
        className="flex aspect-video items-center justify-center bg-surface-2 bg-grid"
        aria-hidden="true"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          [imagen]
        </span>
      </div>
      <div className="flex flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
