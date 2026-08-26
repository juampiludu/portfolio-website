import { useEffect, useRef, useState } from "react";

/**
 * Drives a looping diagram animation.
 *
 * Returns a ref and a run id. Bumping the id is meant to be used as a React
 * `key`, which remounts the subtree and so restarts its CSS animations.
 *
 * The animation is never gated on visibility — the diagram is drawn from the
 * first paint, so nothing on the page is ever blank waiting to be observed.
 * Visibility only decides whether the loop keeps ticking, and entering the
 * viewport restarts the sequence so it plays when someone is there to see it.
 */
export default function useReplay(intervalMs = 10000) {
  const ref = useRef(null);
  const [run, setRun] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setRun((r) => r + 1);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    // Nothing to replay for a reader who asked for less motion — the CSS
    // already puts the diagram straight into its finished state.
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const id = setInterval(() => setRun((r) => r + 1), intervalMs);
    return () => clearInterval(id);
  }, [inView, intervalMs]);

  return [ref, run];
}
