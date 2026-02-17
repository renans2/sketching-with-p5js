import type p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const N = 50;
  const STARTING_ANGLE = 0;
  const SPEED = 0.0005;
  let radius: number;
  let offset: number;
  let multiplier: number;

  p.setup = () => {
    p.noStroke();
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    multiplier = p.width / 2;
    offset = p.height / N;
    radius = offset / 2;
  };

  p.draw = () => {
    p.background(0, 0, 0, 1);
    generateCircles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function generateCircles() {
    for (let i = 0; i < N; i++) {
      const currentAngle = STARTING_ANGLE + p.frameCount * (i + 1) * SPEED;
      const x = (p.sin(currentAngle) + 1) * multiplier;
      const y = offset * i + offset / 2;
      const color = p.map(x, 0, p.width, 100, 300);
      p.fill(color, 100, 50, 1);
      p.circle(x, y, radius * 2);
    }
  }
};
