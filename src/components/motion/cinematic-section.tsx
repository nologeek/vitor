import type { ReactNode } from "react";

/**
 * Sección cinemática: alta, con mucho espacio negativo, titular grande y texto
 * corto. Pensada para intros de bloque con ritmo de lectura por scroll.
 * `as` controla el nivel del título para respetar la jerarquía de cada página.
 */
export function CinematicSection({
  eyebrow,
  title,
  as: TitleTag = "h2",
  align = "left",
  children,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  as?: "h2" | "h3";
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[70vh] flex-col justify-center py-20 sm:min-h-[80vh] ${
        align === "center" ? "items-center text-center" : ""
      } ${className}`}
    >
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
        {title}
      </TitleTag>
      {children ? (
        <div
          className={`mt-6 max-w-xl text-lg leading-relaxed text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
