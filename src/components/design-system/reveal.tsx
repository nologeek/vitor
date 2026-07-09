"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Revela su contenido al entrar en viewport (fade-in / slide-up) usando
 * IntersectionObserver. Sin dependencias. El estado oculto inicial vive en CSS
 * bajo `.js .reveal`, por lo que sin JavaScript el contenido siempre es visible.
 * Respeta prefers-reduced-motion (vía CSS).
 */
export function Reveal({
  as: Tag = "div",
  animation = "fade-in",
  className = "",
  children,
}: {
  as?: ElementType;
  animation?: "fade-in" | "slide-up";
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
    <Tag ref={ref} className={`reveal reveal-${animation} ${className}`}>
      {children}
    </Tag>
  );
}
