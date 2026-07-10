"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Revela contenido al entrar en viewport (fade-in / slide-up) con soporte de
 * stagger vía `delay`. IntersectionObserver + CSS (sin dependencias). El estado
 * oculto vive en `.js .reveal`, por lo que sin JS el contenido siempre es
 * visible. Respeta prefers-reduced-motion (vía CSS).
 */
export function ScrollReveal({
  as: Tag = "div",
  animation = "fade-in",
  delay = 0,
  className = "",
  children,
}: {
  as?: ElementType;
  animation?: "fade-in" | "slide-up" | "depth-right" | "draw" | "tilt-up";
  /** Retardo en ms para efecto stagger en listas/grids. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal reveal-${animation} ${className}`}
    >
      {children}
    </Tag>
  );
}
