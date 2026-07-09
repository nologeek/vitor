import type { ReactNode } from "react";

/** Pill/etiqueta para tags de disciplinas y estados. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-fg">
      {children}
    </span>
  );
}
