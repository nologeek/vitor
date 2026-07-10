"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export type MethodStep = { title: string; description: string };

/**
 * Camino/proceso: paneles ligeros con conectores punteados que se "dibujan" al
 * scroll. El paso activo (más cerca del centro del viewport) queda destacado.
 * Sin scroll-jacking; mobile apila los paneles. Reduce-motion mantiene el
 * layout pero anula los reveals (CSS global).
 */
export function MethodPathway({ steps }: { steps: ReadonlyArray<MethodStep> }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <ol className="depth-scene relative mx-auto max-w-4xl space-y-6 lg:space-y-10">
      {steps.map((step, i) => {
        const alignRight = i % 2 === 1;
        const isActive = i === active;
        return (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className="relative"
          >
            {/* Conector punteado hacia el siguiente paso (SVG). */}
            {i < steps.length - 1 ? (
              <ScrollReveal
                animation="draw"
                delay={120}
                className="pointer-events-none absolute left-1/2 top-full h-8 w-px sm:h-12"
              >
                <span
                  aria-hidden="true"
                  className="block h-full w-full border-l border-dashed border-accent/50"
                />
              </ScrollReveal>
            ) : null}

            <ScrollReveal animation="tilt-up" delay={i * 60}>
              <div
                className={`relative flex items-start gap-5 rounded-[var(--radius-card)] border bg-surface/70 p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${
                  isActive ? "border-accent" : "border-border/70"
                } ${
                  alignRight ? "ml-auto max-w-[92%] sm:max-w-[75%]" : "max-w-[92%] sm:max-w-[75%]"
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-sm transition-colors duration-300 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-border text-muted"
                  }`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </li>
        );
      })}
    </ol>
  );
}
