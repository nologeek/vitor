import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg hover:-translate-y-0.5",
  secondary:
    "border border-border hover:border-accent hover:text-accent",
};

/** Enlace estilizado como botón (primario/secundario). Reutilizable en CTAs. */
export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
