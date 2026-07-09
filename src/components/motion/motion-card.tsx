"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";

/**
 * Contenedor de card con hover premium (borde luminoso, elevación mínima,
 * cambio leve de fondo) y spotlight que sigue el puntero. El spotlight solo
 * actúa con puntero fino (desktop); el resto degrada a hover CSS. La animación
 * completa se anula con prefers-reduced-motion (vía CSS .motion-card).
 */
export function MotionCard({
  spotlight = true,
  className = "",
  children,
}: {
  spotlight?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (!spotlight || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={`motion-card ${className}`}>
      {spotlight ? <span className="motion-card__spot" aria-hidden="true" /> : null}
      {children}
    </div>
  );
}
