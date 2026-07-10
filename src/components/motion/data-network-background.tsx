"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Fondo vivo de nodos/líneas (sensación de red de datos), muy sutil y ligero.
 * Canvas 2D + requestAnimationFrame. Guardas de performance/accesibilidad:
 * - nº de nodos capado y proporcional al área (menos en mobile),
 * - interacción con mouse solo en puntero fino (desktop),
 * - pausa cuando está fuera de viewport (IntersectionObserver),
 * - un solo frame estático con prefers-reduced-motion,
 * - aria-hidden + pointer-events-none (no bloquea contenido).
 * Debe montarse dentro de un contenedor `position: relative`.
 */
export function DataNetworkBackground({
  className = "",
  interactive = true,
  density = 1,
  pointerTarget = "parent",
}: {
  className?: string;
  interactive?: boolean;
  density?: number;
  /** Dónde se escucha el mouse. "window" para fondos globales fixed cuyo
   * contenedor tiene pointer-events-none. */
  pointerTarget?: "parent" | "window";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const allowInteractive = interactive && !coarse && !reduceMotion;
    // En mobile o con reduce-motion: un solo frame estático (sin loop).
    const staticRender = reduceMotion || isMobile;
    const maxDist = 130;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999 };
    let nodeColor = "#8b8bf5";

    function readColor() {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      if (value) nodeColor = value;
    }

    function rgba(alpha: number) {
      const c = nodeColor;
      if (c.startsWith("#") && c.length >= 7) {
        const r = parseInt(c.slice(1, 3), 16);
        const g = parseInt(c.slice(3, 5), 16);
        const b = parseInt(c.slice(5, 7), 16);
        return `rgba(${r},${g},${b},${alpha})`;
      }
      if (c.startsWith("rgb(")) {
        return c.replace("rgb(", "rgba(").replace(")", `,${alpha})`);
      }
      return c;
    }

    function nodeCount() {
      const base = Math.round(((width * height) / 24000) * density);
      const cap = isMobile ? 12 : 28;
      return Math.max(6, Math.min(base, cap));
    }

    function init() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      if (width === 0 || height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: nodeCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        if (allowInteractive && mouse.x > -9998) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120 && dist > 0.5) {
            const force = (1 - dist / 120) * 0.4;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }
      }

      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            ctx!.strokeStyle = rgba((1 - dist / maxDist) * 0.16);
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      ctx!.fillStyle = rgba(0.5);
      for (const p of nodes) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }
    function start() {
      if (running) return;
      running = true;
      loop();
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    readColor();
    init();

    let io: IntersectionObserver | null = null;
    if (staticRender) {
      draw();
    } else {
      io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      });
      io.observe(canvas);
    }

    const ro = new ResizeObserver(() => {
      init();
      if (staticRender) draw();
    });
    ro.observe(parent);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const eventTarget: Window | HTMLElement =
      pointerTarget === "window" ? window : parent;
    if (allowInteractive) {
      eventTarget.addEventListener("pointermove", onMove as EventListener);
      eventTarget.addEventListener("pointerleave", onLeave);
    }

    const themeObserver = new MutationObserver(() => {
      readColor();
      if (staticRender) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      stop();
      ro.disconnect();
      io?.disconnect();
      themeObserver.disconnect();
      if (allowInteractive) {
        eventTarget.removeEventListener("pointermove", onMove as EventListener);
        eventTarget.removeEventListener("pointerleave", onLeave);
      }
    };
  }, [interactive, density, pointerTarget]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
