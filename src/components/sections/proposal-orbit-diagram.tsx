import { ScrollReveal } from "@/components/motion/scroll-reveal";

export type OrbitItem = { from: string; to: string };

/* Posición de cada transformación alrededor del anillo (arriba/dcha/abajo/izq). */
const LABEL_POSITIONS = [
  "md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2 md:text-center",
  "md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:max-w-[180px] md:text-left",
  "md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:text-center",
  "md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:max-w-[180px] md:text-right",
];

/* Nodos en los puntos cardinales del anillo (viewBox 400, r=150). */
const NODES = [
  { cx: 200, cy: 50 },
  { cx: 350, cy: 200 },
  { cx: 200, cy: 350 },
  { cx: 50, cy: 200 },
];

/**
 * Diagrama orbital de la propuesta: anillo segmentado con nodos cardinales,
 * órbita punteada girando lento y las 4 transformaciones alrededor. Centro
 * tipográfico. Arquitectura de sistema, no infografía. SVG + CSS puro.
 * En mobile las transformaciones se apilan bajo el círculo.
 */
export function ProposalOrbitDiagram({
  coreLabel,
  items,
}: {
  coreLabel: string;
  items: ReadonlyArray<OrbitItem>;
}) {
  return (
    <div className="relative mx-auto max-w-3xl md:px-44 md:py-20">
      {/* Círculo central */}
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full text-accent"
          aria-hidden="true"
          fill="none"
        >
          {/* Órbita punteada exterior, rotación lenta */}
          <g className="gs-spin-rev">
            <circle
              cx="200"
              cy="200"
              r="178"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2.5 7"
              opacity="0.35"
            />
          </g>
          {/* Anillo base */}
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="var(--border)"
            strokeWidth="1.25"
            opacity="0.9"
          />
          {/* Anillo segmentado (4 segmentos entre nodos) */}
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="currentColor"
            strokeWidth="2"
            pathLength={100}
            strokeDasharray="17 8"
            strokeDashoffset="-4.5"
            opacity="0.45"
            strokeLinecap="round"
          />
          {/* Anillo interior sutil */}
          <circle
            cx="200"
            cy="200"
            r="92"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="1.5 6"
            opacity="0.25"
          />
          {/* Nodos cardinales con pulso */}
          {NODES.map((n, i) => (
            <g key={i}>
              <circle
                cx={n.cx}
                cy={n.cy}
                r="10"
                fill="var(--bg)"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <circle
                cx={n.cx}
                cy={n.cy}
                r="4"
                fill="currentColor"
                className="ds-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Centro tipográfico */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {coreLabel}
          </p>
        </div>
      </div>

      {/* Transformaciones: apiladas en mobile, orbitales en md+ */}
      <ul
        role="list"
        className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-0 md:contents"
      >
        {items.map((item, i) => (
          <ScrollReveal
            as="li"
            key={item.from}
            delay={i * 90}
            className={LABEL_POSITIONS[i % LABEL_POSITIONS.length]}
          >
            <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {item.from}
            </span>
            <span className="mt-1 block text-base font-semibold">
              <span aria-hidden="true" className="mr-1 text-accent">
                →
              </span>
              {item.to}
            </span>
          </ScrollReveal>
        ))}
      </ul>
    </div>
  );
}
