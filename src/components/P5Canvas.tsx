import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { createSketch } from "../sketches/test-sketch";

const P5Canvas = () => {
  const [color, setColor] = useState("#ff0000");
  const [size, setSize] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef({ color, size });
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    controlsRef.current.color = color;
    controlsRef.current.size = size;
  }, [color, size]);

  useEffect(() => {
    if (!containerRef.current) return;

    p5Instance.current = new p5(
      createSketch(controlsRef.current),
      containerRef.current,
    );

    return () => {
      p5Instance.current?.remove();
    };
  }, []);

  return (
    <div>
      <button
        className="p-2 mr-5 bg-amber-500 rounded-lg cursor-pointer"
        onClick={() => setColor("#00ffcc")}
      >
        change color
      </button>
      <button
        className="p-2 mr-5 bg-amber-500 rounded-lg cursor-pointer"
        onClick={() => setSize((s) => s + 20)}
      >
        increase size
      </button>
      <div ref={containerRef} />;
    </div>
  );
};

export default P5Canvas;
