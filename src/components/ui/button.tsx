import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";

const pill = "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all";

const styles: Record<Variant, string> = {
  primary: `${pill} bg-accent text-accent-fg hover:-translate-y-0.5`,
  secondary: `${pill} border border-border hover:border-accent hover:text-accent`,
  ghost: `${pill} text-muted hover:bg-surface hover:text-fg`,
  link: "inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 transition-colors hover:underline",
};

/** Enlace estilizado como botón. Variantes: primary, secondary, ghost, link. */
export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
