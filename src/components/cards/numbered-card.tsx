import { MotionCard } from "@/components/motion/motion-card";

/**
 * Card numerada para pilares y activos. Título como H3 (jerarquía SEO).
 * `motion`: usa MotionCard (hover premium + spotlight) en vez del hover CSS
 * simple. Se activa en el home; el laboratorio puede mostrar ambas variantes.
 */
export function NumberedCard({
  index,
  title,
  description,
  motion = false,
}: {
  index: number;
  title: string;
  description: string;
  motion?: boolean;
}) {
  const content = (
    <>
      <span className="font-mono text-sm text-accent" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-balance">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </>
  );

  if (motion) {
    return (
      <MotionCard
        as="article"
        className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6"
      >
        {content}
      </MotionCard>
    );
  }

  return (
    <article className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-colors hover:border-accent">
      {content}
    </article>
  );
}
