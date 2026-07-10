"use client";

import { Fragment, useEffect, useRef } from "react";
import type { CSSProperties, ElementType } from "react";

/**
 * Reveal tipográfico: los caracteres aparecen en secuencia (sensación de
 * sistema cargando, elegante, sin glitch). Delay por carácter con tope.
 * Accesibilidad: el texto real vive en un span sr-only; los caracteres
 * animados son aria-hidden. Reduce-motion muestra todo instantáneo (CSS).
 *
 * Se agrupa por palabras con inline-block+whitespace-nowrap para que la
 * división por caracteres nunca rompa palabras (evita cortes tipo
 * "empresar-ial" con text-balance/word-break).
 */
export function CharacterReveal({
  text,
  as: Tag = "span",
  charDelay = 14,
  maxDelay = 1400,
  className = "",
}: {
  text: string;
  as?: ElementType;
  /** ms entre caracteres. */
  charDelay?: number;
  /** tope total de retardo en ms. */
  maxDelay?: number;
  className?: string;
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
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Tokens: palabras (que se mantienen unidas) + espacios. Se pre-calcula el
  // índice global de cada token para no mutar durante render.
  const tokens = text.split(/(\s+)/);
  const offsets: number[] = [];
  tokens.reduce((acc, token, i) => {
    offsets[i] = acc;
    return acc + token.length;
  }, 0);

  return (
    <Tag ref={ref} className={`char-reveal ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tokens.map((token, ti) => {
          const base = offsets[ti];
          if (/^\s+$/.test(token)) {
            // Espacios avanzan el ritmo y se conservan como espacio normal
            // para permitir el salto de línea entre palabras.
            return (
              <Fragment key={ti}>
                {Array.from(token).map((_, i) => {
                  const delay = Math.min((base + i) * charDelay, maxDelay);
                  return (
                    <span
                      key={i}
                      className="cr-char"
                      style={{ "--crd": `${delay}ms` } as CSSProperties}
                    >
                      {" "}
                    </span>
                  );
                })}
              </Fragment>
            );
          }
          return (
            <span key={ti} className="inline-block whitespace-nowrap">
              {Array.from(token).map((ch, i) => {
                const delay = Math.min((base + i) * charDelay, maxDelay);
                return (
                  <span
                    key={i}
                    className="cr-char inline-block"
                    style={{ "--crd": `${delay}ms` } as CSSProperties}
                  >
                    {ch}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
