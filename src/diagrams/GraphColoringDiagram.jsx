import useReplay from "../hooks/useReplay";

const CENTER = { x: 280, y: 132 };
const RING = 8;

/* A wheel: one hub joined to an 8-cycle. Laid out on an ellipse so it fits
   the frame without the nodes crowding. */
const nodes = [
  CENTER,
  ...Array.from({ length: RING }, (_, i) => {
    const angle = (-90 + i * (360 / RING)) * (Math.PI / 180);
    return {
      x: CENTER.x + Math.cos(angle) * 208,
      y: CENTER.y + Math.sin(angle) * 96,
    };
  }),
];

const edges = [
  ...Array.from({ length: RING }, (_, i) => [0, i + 1]),
  ...Array.from({ length: RING }, (_, i) => [i + 1, ((i + 1) % RING) + 1]),
];

const adjacency = nodes.map(() => []);
for (const [a, b] of edges) {
  adjacency[a].push(b);
  adjacency[b].push(a);
}

/**
 * The same greedy pass the C tool makes: walk the vertices in order and give
 * each one the lowest color none of its already-colored neighbors holds.
 */
function greedyColoring() {
  const colors = new Array(nodes.length).fill(-1);

  for (let v = 0; v < nodes.length; v++) {
    const taken = new Set(
      adjacency[v].map((n) => colors[n]).filter((c) => c !== -1)
    );
    let color = 0;
    while (taken.has(color)) color++;
    colors[v] = color;
  }

  return colors;
}

const colors = greedyColoring();
const colorsUsed = new Set(colors).size;
const STEP_MS = 210;

export default function GraphColoringDiagram({ figure }) {
  const [ref, run] = useReplay(11000);

  return (
    <figure ref={ref} className="figure diagram-run">
      <svg key={run} viewBox="0 0 560 290" role="img" aria-labelledby="graph-diagram-title">
        <title id="graph-diagram-title">
          A nine-vertex graph colored one vertex at a time by the greedy
          algorithm, which finishes using {colorsUsed} colors.
        </title>

        {edges.map(([a, b], i) => (
          <line
            key={`${a}-${b}`}
            className="dgm-line draw"
            pathLength="1"
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            style={{ "--delay": `${i * 28}ms`, "--dur": "420ms" }}
          />
        ))}

        {nodes.map((node, i) => {
          const delay = `${700 + i * STEP_MS}ms`;
          return (
            <g key={i}>
              <circle
                className="gc-node"
                cx={node.x}
                cy={node.y}
                r="11"
                style={{ "--gc-color": `var(--color-gc-${colors[i]})`, "--delay": delay }}
              />
              <text className="gc-label" x={node.x} y={node.y} style={{ "--delay": delay }}>
                {i + 1}
              </text>
            </g>
          );
        })}

        {/* Key. Static rather than animated — it is what you check the
            vertices against while the pass runs. */}
        <g>
          <text className="dgm-text" x="0" y="279">
            COLORS
          </text>
          {Array.from({ length: colorsUsed }, (_, i) => (
            <g key={i}>
              <rect
                x={62 + i * 42}
                y={271}
                width="9"
                height="9"
                fill={`var(--color-gc-${i})`}
              />
              <text className="dgm-text" x={62 + i * 42 + 15} y="279">
                {i + 1}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <figcaption className="figcaption">
        <b>Fig. {figure}</b> — {nodes.length} vertices, {edges.length} edges.
        Each vertex takes the lowest color none of its neighbors already holds;
        in this order the pass finishes with {colorsUsed}.
      </figcaption>
    </figure>
  );
}
