/**
 * Muestra de color (swatch). Puede mostrar un token semántico (`varName`, que
 * cambia por tema) o un color de marca fijo (`hex`).
 */
export function Swatch({
  name,
  varName,
  hex,
  hint,
}: {
  name: string;
  varName?: string;
  hex?: string;
  hint: string;
}) {
  const background = hex ?? (varName ? `var(${varName})` : "transparent");
  const code = hex ?? varName ?? "";

  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-border">
      <div className="h-16 w-full" style={{ background }} />
      <figcaption className="bg-surface p-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs text-muted">{code}</p>
        <p className="mt-1 text-xs text-muted">{hint}</p>
      </figcaption>
    </figure>
  );
}
