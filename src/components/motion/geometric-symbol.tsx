import type { ReactNode } from "react";

export type GeometricVariant =
  | "orbit"
  | "node"
  | "grid"
  | "loop"
  | "triangle"
  | "circle"
  | "diamond"
  | "layers";

export const geometricVariants: ReadonlyArray<{
  variant: GeometricVariant;
  label: string;
  meaning: string;
}> = [
  { variant: "orbit", label: "Orbit", meaning: "Órbita · sistema en movimiento" },
  { variant: "node", label: "Node", meaning: "Nodo · conexión" },
  { variant: "grid", label: "Grid", meaning: "Sistema · estructura" },
  { variant: "loop", label: "Loop", meaning: "Ciclo · iteración" },
  { variant: "triangle", label: "Triangle", meaning: "Estrategia · dirección" },
  { variant: "circle", label: "Circle", meaning: "Continuidad" },
  { variant: "diamond", label: "Diamond", meaning: "Crecimiento · valor" },
  { variant: "layers", label: "Layers", meaning: "Arquitectura · capas" },
];

/**
 * Símbolo geométrico en SVG inline. Líneas finas, trazos punteados y puntos
 * pequeños con estética premium. `animate` activa rotaciones lentas donde
 * aportan (orbit / loop); todas se anulan con prefers-reduced-motion (vía CSS).
 * El color se hereda de `currentColor` (usar utilidades text-accent, etc.).
 */
export function GeometricSymbol({
  variant = "orbit",
  animate = false,
  title,
  className = "",
}: {
  variant?: GeometricVariant;
  animate?: boolean;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {renderVariant(variant, animate)}
    </svg>
  );
}

function renderVariant(variant: GeometricVariant, animate: boolean): ReactNode {
  const spin = animate ? "gs-spin" : undefined;
  const spinRev = animate ? "gs-spin-rev" : undefined;

  switch (variant) {
    case "orbit":
      return (
        <>
          <g className={spin}>
            <circle cx="50" cy="50" r="42" opacity="0.45" />
            <ellipse
              cx="50"
              cy="50"
              rx="42"
              ry="17"
              opacity="0.4"
              strokeDasharray="2.5 4"
              transform="rotate(28 50 50)"
            />
            <circle cx="92" cy="50" r="3" fill="currentColor" stroke="none" />
          </g>
          <circle cx="50" cy="50" r="4" fill="currentColor" stroke="none" />
        </>
      );
    case "node":
      return (
        <>
          <circle cx="50" cy="50" r="30" opacity="0.35" />
          <g opacity="0.5">
            <line x1="50" y1="50" x2="50" y2="20" />
            <line x1="50" y1="50" x2="80" y2="50" />
            <line x1="50" y1="50" x2="50" y2="80" />
            <line x1="50" y1="50" x2="20" y2="50" />
          </g>
          <g fill="currentColor" stroke="none">
            <circle cx="50" cy="20" r="2.6" />
            <circle cx="80" cy="50" r="2.6" />
            <circle cx="50" cy="80" r="2.6" />
            <circle cx="20" cy="50" r="2.6" />
            <circle cx="50" cy="50" r="4.5" />
          </g>
        </>
      );
    case "grid":
      return (
        <g fill="currentColor" stroke="none">
          {[26, 50, 74].map((y) =>
            [26, 50, 74].map((x) => (
              <circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r="2.4"
                opacity={x === 50 && y === 50 ? "1" : "0.6"}
              />
            )),
          )}
        </g>
      );
    case "loop":
      return (
        <>
          <circle
            cx="50"
            cy="50"
            r="38"
            opacity="0.6"
            strokeDasharray="4 5"
            className={spin}
          />
          <circle cx="50" cy="12" r="3" fill="currentColor" stroke="none" />
        </>
      );
    case "triangle":
      return (
        <>
          <polygon points="50,13 85,79 15,79" opacity="0.6" />
          <circle cx="50" cy="57" r="3" fill="currentColor" stroke="none" />
        </>
      );
    case "circle":
      return (
        <>
          <circle cx="50" cy="50" r="38" opacity="0.6" />
          <circle cx="50" cy="12" r="3" fill="currentColor" stroke="none" />
        </>
      );
    case "diamond":
      return (
        <g className={spinRev}>
          <rect
            x="26"
            y="26"
            width="48"
            height="48"
            rx="4"
            transform="rotate(45 50 50)"
            opacity="0.6"
          />
          <rect
            x="38"
            y="38"
            width="24"
            height="24"
            rx="2"
            transform="rotate(45 50 50)"
            opacity="0.4"
          />
        </g>
      );
    case "layers":
      return (
        <g opacity="0.7">
          <path d="M25 40 L50 30 L75 40 L50 50 Z" opacity="0.9" />
          <path d="M25 52 L50 42 L75 52 L50 62 Z" opacity="0.6" />
          <path d="M25 64 L50 54 L75 64 L50 74 Z" opacity="0.4" />
        </g>
      );
  }
}
