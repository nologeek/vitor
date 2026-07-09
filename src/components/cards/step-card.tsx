/**
 * Paso del método. Lectura de proceso (número + título + descripción) con línea
 * de conexión vertical entre pasos. Título como H3.
 */
export function StepCard({
  index,
  title,
  description,
  isLast = false,
}: {
  index: number;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <li className="relative flex gap-5 pb-10 last:pb-0">
      {/* Línea de conexión */}
      {!isLast ? (
        <span
          className="absolute left-5 top-11 bottom-0 w-px bg-border"
          aria-hidden="true"
        />
      ) : null}

      <span
        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm text-accent"
        aria-hidden="true"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="pt-1.5">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </li>
  );
}
