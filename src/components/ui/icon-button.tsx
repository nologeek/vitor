import type { ReactNode } from "react";

/** Botón cuadrado para iconos. Requiere `label` accesible (aria-label). */
export function IconButton({
  label,
  children,
  disabled = false,
}: {
  label: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border"
    >
      {children}
    </button>
  );
}
