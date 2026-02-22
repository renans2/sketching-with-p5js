import { useEffect, useRef } from "react";
import { CANVAS_PARENT } from "../constants/elements-ids";
import type { SketchInfo } from "../types/SketchInfo";

declare const p5: typeof import("p5");

type SketchProps = {
  sketch: SketchInfo;
};

export default function Sketch({ sketch: { loadSketch, store } }: SketchProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<any>(null);

  useEffect(() => {
    const load = async () => {
      if (!containerRef.current) return;

      const { sketch } = await loadSketch();
      p5Ref.current = new p5((p) => sketch(p, store!), containerRef.current);
    };

    load();

    return () => {
      p5Ref.current?.remove();
    };
  }, []);

  return (
    <div
      id={CANVAS_PARENT}
      className="flex-1 flex justify-end"
      ref={containerRef}
    />
  );
}
