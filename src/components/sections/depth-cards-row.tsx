import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  GeometricSymbol,
  type GeometricVariant,
} from "@/components/motion/geometric-symbol";

export type DepthCard = { title: string; description: string };

/* Un símbolo por activo. */
const VARIANTS: ReadonlyArray<GeometricVariant> = [
  "layers", // Plataformas web
  "grid", // Productos digitales
  "loop", // Sistemas de crecimiento
  "node", // Sistemas de inteligencia
  "diamond", // Automatización con IA
  "orbit", // Experiencias educativas
];

/**
 * Cards verticales con icono geométrico grande. Entrada con profundidad
 * (translateZ/rotateY sutil) desde la derecha, con stagger. La última card
 * puede "salir" con menor opacidad para dar sensación de continuidad.
 */
export function DepthCardsRow({ items }: { items: ReadonlyArray<DepthCard> }) {
  return (
    <div className="depth-scene">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <ScrollReveal
            key={item.title}
            animation="depth-right"
            delay={i * 80}
            className="h-full"
          >
            <article
              className={`motion-card flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-surface p-7 ${
                i === items.length - 1 ? "sm:opacity-90" : ""
              }`}
            >
              <span className="motion-card__spot" aria-hidden="true" />
              <GeometricSymbol
                variant={VARIANTS[i % VARIANTS.length]}
                animate
                className="h-12 w-12 text-accent"
              />
              <h3 className="mt-8 text-lg font-semibold tracking-tight text-balance">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
