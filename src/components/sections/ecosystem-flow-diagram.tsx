import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GeometricSymbol,
  type GeometricVariant,
} from "@/components/motion/geometric-symbol";

export type FlowItem = {
  from: string;
  to: string;
  variant: GeometricVariant;
};

/**
 * Diagrama de flujo de ecosistema: secuencia de transformaciones (entrada →
 * salida) conectadas por una "espina" vertical, con un símbolo geométrico por
 * nodo. Estética de arquitectura de sistema (no infografía corporativa).
 * Micro-animación por scroll (stagger). Los nodos giran lento (reduce-motion
 * respetado vía CSS).
 */
export function EcosystemFlowDiagram({
  items,
}: {
  items: ReadonlyArray<FlowItem>;
}) {
  return (
    <ol className="relative mx-auto max-w-2xl">
      {items.map((item, i) => (
        <ScrollReveal
          as="li"
          key={item.from}
          delay={i * 100}
          className="relative grid grid-cols-[3.5rem_1fr] gap-6 pb-12 last:pb-0"
        >
          {/* Espina de conexión (arquitectura). */}
          {i < items.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-7 top-16 w-px bg-gradient-to-b from-border to-transparent"
            />
          ) : null}

          {/* Nodo con símbolo geométrico. */}
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
            <GeometricSymbol
              variant={item.variant}
              animate
              className="h-7 w-7 text-accent"
            />
          </span>

          {/* Entrada → salida. */}
          <div className="pt-1.5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {item.from}
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-lg font-medium">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-accent"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              {item.to}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </ol>
  );
}
