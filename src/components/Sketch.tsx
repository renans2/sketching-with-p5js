import p5 from "p5";
import { useEffect, useRef } from "react";
import { CANVAS_CONTAINER } from "../constants/elements-ids";
import type { SketchModule } from "../types/SketchInfo";

type SketchType = {
  loadSketch: () => Promise<SketchModule>;
};

export default function Sketch({ loadSketch }: SketchType) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!containerRef.current) return;

      const { sketch } = await loadSketch();
      p5Ref.current = new p5(sketch, containerRef.current);

      return () => {
        p5Ref.current?.remove();
      };
    };

    load();
  }, []);

  return (
    <div
      id={CANVAS_CONTAINER}
      className="flex-1 flex justify-end"
      ref={containerRef}
    />
  );
}
