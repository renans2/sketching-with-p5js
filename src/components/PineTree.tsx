import { useEffect, useRef } from "react";
import p5 from "p5";
import { pineTree } from "../sketches/pineTree";

export default function PineTree() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const p5Ref = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    p5Ref.current = new p5(pineTree, containerRef.current);

    return () => {
      p5Ref.current?.remove();
    };
  }, []);

  return <div ref={containerRef} />;
}
