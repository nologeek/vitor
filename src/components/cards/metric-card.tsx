/** Card de métrica: valor destacado + etiqueta. */
export function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
      <p className="text-4xl font-semibold tracking-tight text-gradient">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
