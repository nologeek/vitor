"use client";

import { useEffect, useRef } from "react";
import { DataNetworkBackground } from "./data-network-background";

/**
 * Fondo global de sistema (capa fixed): grid sutil + red de nodos/líneas.
 * Persiste durante todo el scroll, con parallax muy leve (desktop) y reacción
 * suave al mouse. Guardas:
 * - una sola capa fixed de tamaño viewport (nodos capados por área),
 * - parallax por transform con listener passive + rAF,
 * - estático en mobile y con reduce-motion (lo maneja DataNetworkBackground),
 * - aria-hidden + pointer-events-none (no bloquea contenido ni lectura).
 * Reutilizable: hoy solo en el home, listo para otras rutas si funciona bien.
 */
export function GlobalDataGridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (reduce || isMobile) return; // sin parallax

    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        grid.style.transform = `translate3d(0, ${window.scrollY * -0.025}px, 0)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div ref={gridRef} className="global-grid absolute -inset-[8%]" />
      <DataNetworkBackground
        pointerTarget="window"
        density={0.8}
        className="opacity-80"
      />
      <div className="global-grid-glow absolute inset-0" />
      <div className="global-grid-vignette absolute inset-0" />
    </div>
  );
}
