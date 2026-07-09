/** Muestra de color (swatch) con nombre, variable CSS y pista de uso. */
export function Swatch({
  name,
  varName,
  hint,
}: {
  name: string;
  varName: string;
  hint: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-border">
      <div className="h-16 w-full" style={{ background: `var(${varName})` }} />
      <figcaption className="bg-surface p-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs text-muted">{varName}</p>
        <p className="mt-1 text-xs text-muted">{hint}</p>
      </figcaption>
    </figure>
  );
}
