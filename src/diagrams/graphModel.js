const CENTER = { x: 280, y: 132 };
const RING = 8;

/* A wheel: one hub joined to an 8-cycle. Laid out on an ellipse so it fits
   the frame without the nodes crowding. */
export const nodes = [
  CENTER,
  ...Array.from({ length: RING }, (_, i) => {
    const angle = (-90 + i * (360 / RING)) * (Math.PI / 180);
    return {
      x: CENTER.x + Math.cos(angle) * 208,
      y: CENTER.y + Math.sin(angle) * 96,
    };
  }),
];

export const edges = [
  ...Array.from({ length: RING }, (_, i) => [0, i + 1]),
  ...Array.from({ length: RING }, (_, i) => [i + 1, ((i + 1) % RING) + 1]),
];

export function buildAdjacency(vertexCount, edgeList) {
  const adjacency = Array.from({ length: vertexCount }, () => []);
  for (const [a, b] of edgeList) {
    adjacency[a].push(b);
    adjacency[b].push(a);
  }
  return adjacency;
}

/**
 * The same greedy pass the C tool makes: walk the vertices in order and give
 * each one the lowest color none of its already-colored neighbors holds.
 */
export function greedyColoring(vertexCount = nodes.length, edgeList = edges) {
  const adjacency = buildAdjacency(vertexCount, edgeList);
  const colors = new Array(vertexCount).fill(-1);

  for (let v = 0; v < vertexCount; v++) {
    const taken = new Set(
      adjacency[v].map((n) => colors[n]).filter((c) => c !== -1)
    );
    let color = 0;
    while (taken.has(color)) color++;
    colors[v] = color;
  }

  return colors;
}
