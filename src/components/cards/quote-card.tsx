/** Card de testimonio/cita. */
export function QuoteCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6">
      <blockquote className="text-lg leading-relaxed text-balance">
        <span className="text-accent" aria-hidden="true">
          &ldquo;
        </span>
        {quote}
        <span className="text-accent" aria-hidden="true">
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-medium">{author}</span>{" "}
        <span className="text-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
