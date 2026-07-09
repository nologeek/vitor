/**
 * Grafismo decorativo de líneas/nodos (sensación de sistema/red). SVG ligero;
 * el pulso de los nodos se detiene con prefers-reduced-motion (regla global).
 */
export function NodesGraphic() {
  const nodes = [
    { cx: 40, cy: 60 },
    { cx: 120, cy: 30 },
    { cx: 120, cy: 110 },
    { cx: 210, cy: 70 },
    { cx: 290, cy: 40 },
    { cx: 290, cy: 120 },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
  ];

  return (
    <svg
      viewBox="0 0 330 150"
      className="h-auto w-full max-w-md text-accent"
      role="img"
      aria-label="Grafismo de nodos conectados"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="5"
          fill="currentColor"
          className="ds-pulse"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  );
}
