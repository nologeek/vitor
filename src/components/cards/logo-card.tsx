/** Card contenedora de logo de cliente/aliado (placeholder hasta tener assets). */
export function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface p-6 grayscale transition-all hover:grayscale-0">
      <span className="font-mono text-sm text-muted">{name}</span>
    </div>
  );
}
