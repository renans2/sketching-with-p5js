import p5 from "p5";
import { useEffect, useRef } from "react";
import { CANVAS_CONTAINER } from "../constants/elements-ids";

type SketchType = {
  sketchScript: (p: p5) => void;
};

export default function Sketch({ sketchScript }: SketchType) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    p5Ref.current = new p5(sketchScript, containerRef.current);

    return () => {
      p5Ref.current?.remove();
    };
  }, []);

  return <div id={CANVAS_CONTAINER} className="flex-1" ref={containerRef} />;
}
