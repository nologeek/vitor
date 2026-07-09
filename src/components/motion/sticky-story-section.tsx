"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; body: string };

/**
 * Storytelling sticky: un panel visual queda fijo (position: sticky nativo)
 * mientras el usuario baja y el contenido cambia por pasos. Sin scroll-jacking.
 * En mobile (< lg) degrada a una lista apilada sin panel fijo.
 */
export function StickyStorySection({
  label = "Proceso",
  steps,
}: {
  label?: string;
  steps: ReadonlyArray<Step>;
}) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(i);
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Panel fijo (solo desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-28">
          <div className="glass glow-halo flex min-h-[340px] flex-col justify-center rounded-[var(--radius-card)] p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {label} · {active + 1}/{steps.length}
            </p>
            <p className="mt-4 font-mono text-6xl font-semibold text-gradient">
              {String(active + 1).padStart(2, "0")}
            </p>
            {/* Espejo visual del paso activo (no es heading: el heading real
               vive en la lista de pasos de abajo, para no duplicar semántica). */}
            <p aria-hidden="true" className="mt-4 text-2xl font-semibold tracking-tight">
              {steps[active].title}
            </p>
            <p className="mt-2 leading-relaxed text-muted">
              {steps[active].body}
            </p>
            <div className="mt-6 flex gap-2" aria-hidden="true">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-accent" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pasos que activan el panel */}
      <ol className="space-y-16 lg:space-y-[55vh] lg:py-[10vh]">
        {steps.map((step, i) => (
          <li
            key={step.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent lg:hidden">
              Paso {i + 1}
            </p>
            <h3
              className={`text-2xl font-semibold tracking-tight transition-opacity duration-300 ${
                i === active ? "opacity-100" : "lg:opacity-35"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-2 max-w-md leading-relaxed text-muted transition-opacity duration-300 ${
                i === active ? "opacity-100" : "lg:opacity-35"
              }`}
            >
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
