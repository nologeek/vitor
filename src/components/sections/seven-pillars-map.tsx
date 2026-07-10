"use client";

import { useEffect, useRef, useState } from "react";
import {
  GeometricSymbol,
  type GeometricVariant,
} from "@/components/motion/geometric-symbol";

export type Pillar = { title: string; description: string };

/* Un símbolo por pilar, en el orden del contenido aprobado. */
const PILLAR_VARIANTS: ReadonlyArray<GeometricVariant> = [
  "triangle", // Estrategia
  "circle", // Branding
  "loop", // Growth
  "layers", // Software / plataformas
  "grid", // Datos / inteligencia de negocios
  "diamond", // IA y automatización
  "node", // Educación / transferencia
];

/* Posiciones alrededor de un anillo grande (SVG 640×640, r=252). */
function ring(cx: number, cy: number, r: number, count: number, i: number) {
  const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
  return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
}

/**
 * Mapa de ecosistema de 7 pilares: 7 nodos con símbolo geométrico distribuidos
 * en un anillo con órbita punteada y radios que conectan al centro. Al hacer
 * scroll se activan por pasos (IntersectionObserver); un panel lateral muestra
 * el pilar activo. En mobile se apila como lista con símbolos grandes.
 */
export function SevenPillarsMap({ items }: { items: ReadonlyArray<Pillar> }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const count = items.length;
  const cx = 320;
  const cy = 320;
  const rOuter = 252;
  const rInner = 132;
  const positions = items.map((_, i) => ring(cx, cy, rOuter, count, i));

  return (
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
      {/* SVG map — solo desktop; mobile ve la lista */}
      <div className="relative order-2 hidden min-w-0 lg:order-1 lg:block">
        <div className="sticky top-28 mx-auto aspect-square w-full max-w-[560px]">
          <svg
            viewBox="0 0 640 640"
            className="h-auto w-full text-accent"
            fill="none"
            aria-hidden="true"
          >
            {/* Órbita punteada exterior lenta */}
            <g className="gs-spin-rev">
              <circle
                cx={cx}
                cy={cy}
                r="290"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 8"
                opacity="0.28"
              />
            </g>
            {/* Anillo principal */}
            <circle
              cx={cx}
              cy={cy}
              r={rOuter}
              stroke="var(--border)"
              strokeWidth="1.25"
              opacity="0.9"
            />
            {/* Anillo interior punteado */}
            <circle
              cx={cx}
              cy={cy}
              r={rInner}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="1.5 6"
              opacity="0.32"
            />
            {/* Radios hacia cada nodo */}
            {positions.map((p, i) => (
              <line
                key={`spoke-${i}`}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                strokeWidth="1"
                opacity={i === active ? "0.55" : "0.14"}
                strokeDasharray={i === active ? undefined : "2 6"}
                style={{ transition: "opacity 350ms ease" }}
              />
            ))}
            {/* Nodos con anillo destacado del activo */}
            {positions.map((p, i) => (
              <g key={`node-${i}`}>
                {i === active ? (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.45"
                  />
                ) : null}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="26"
                  fill="var(--surface)"
                  stroke="var(--border)"
                  strokeWidth="1.25"
                />
              </g>
            ))}
            {/* Nodo central */}
            <circle
              cx={cx}
              cy={cy}
              r="8"
              fill="currentColor"
              className="ds-pulse"
            />
          </svg>

          {/* Íconos geométricos sobre los nodos (posicionados en %). */}
          <div className="pointer-events-none absolute inset-0">
            {positions.map((p, i) => (
              <span
                key={`sym-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(p.x / 640) * 100}%`, top: `${(p.y / 640) * 100}%` }}
              >
                <GeometricSymbol
                  variant={PILLAR_VARIANTS[i % PILLAR_VARIANTS.length]}
                  animate={i === active}
                  className={`h-8 w-8 transition-opacity duration-300 ${
                    i === active ? "text-accent opacity-100" : "text-muted opacity-70"
                  }`}
                />
              </span>
            ))}
            {/* Número del pilar activo en el centro */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-8 text-center">
              <span className="block font-mono text-xs uppercase tracking-[0.28em] text-muted">
                Pilar
              </span>
              <span className="mt-1 block font-mono text-3xl font-semibold text-gradient">
                {String(active + 1).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Lista de pilares: fuente de activación en desktop, contenido en mobile */}
      <ol className="order-1 space-y-10 lg:order-2 lg:space-y-[38vh] lg:py-[12vh]">
        {items.map((p, i) => (
          <li
            key={p.title}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
          >
            {/* Header con símbolo grande (mobile) o compacto (desktop) */}
            <div className="flex items-start gap-5">
              <span className="lg:hidden">
                <GeometricSymbol
                  variant={PILLAR_VARIANTS[i % PILLAR_VARIANTS.length]}
                  animate
                  className="h-14 w-14 shrink-0 text-accent"
                />
              </span>
              <div>
                <p
                  className={`font-mono text-xs uppercase tracking-[0.22em] transition-opacity duration-300 ${
                    i === active
                      ? "text-accent opacity-100"
                      : "text-muted lg:opacity-60"
                  }`}
                >
                  Pilar {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`mt-2 text-2xl font-semibold tracking-tight text-balance transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "lg:opacity-45"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-3 max-w-md leading-relaxed text-muted transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "lg:opacity-45"
                  }`}
                >
                  {p.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
