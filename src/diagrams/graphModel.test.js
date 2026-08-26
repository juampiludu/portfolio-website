import { describe, expect, it } from "vitest";
import { edges, greedyColoring, nodes } from "./graphModel";

describe("greedyColoring", () => {
  it("never gives two adjacent vertices the same color", () => {
    const colors = greedyColoring();

    for (const [a, b] of edges) {
      expect(colors[a]).not.toBe(colors[b]);
    }
  });

  it("colors every vertex", () => {
    const colors = greedyColoring();

    expect(colors).toHaveLength(nodes.length);
    expect(colors.every((c) => c >= 0)).toBe(true);
  });

  it("uses colors contiguously from zero, never skipping one", () => {
    const used = [...new Set(greedyColoring())].sort((a, b) => a - b);

    expect(used).toEqual(used.map((_, i) => i));
  });

  it("finishes the wheel in the three colors the figure's caption claims", () => {
    expect(new Set(greedyColoring()).size).toBe(3);
    expect(nodes).toHaveLength(9);
    expect(edges).toHaveLength(16);
  });

  it("needs a fresh color for every vertex of a complete graph", () => {
    const k4 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
      [2, 3],
    ];

    expect(greedyColoring(4, k4)).toEqual([0, 1, 2, 3]);
  });

  it("alternates two colors around an even cycle", () => {
    const c4 = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ];

    expect(greedyColoring(4, c4)).toEqual([0, 1, 0, 1]);
  });
});
