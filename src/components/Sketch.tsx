import { useEffect, useRef } from "react";
import { CANVAS_PARENT } from "../constants/elements-ids";
import type { SketchInfo } from "../types/SketchInfo";
import type { default as P5 } from "p5";

declare const p5: typeof import("p5");

type SketchProps = {
  sketch: SketchInfo;
  setIsReady: () => void;
};

export default function Sketch({
  sketch: { loadSketch, store },
  setIsReady,
}: SketchProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<P5>(null);

  useEffect(() => {
    const load = async () => {
      if (!containerRef.current) return;

      const { sketch } = await loadSketch();
      p5Ref.current = new p5((p) => sketch(p, store), containerRef.current);
      setIsReady();
    };

    load();

    return () => {
      p5Ref.current?.remove();
    };
  }, []);

  return (
    <div
      id={CANVAS_PARENT}
      className="aspect-square min-w-0 flex"
      ref={containerRef}
    />
  );
}
