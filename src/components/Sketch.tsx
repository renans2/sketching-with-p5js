import p5 from "p5";
import { useEffect, useRef } from "react";

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

  return <div ref={containerRef} />;
}
