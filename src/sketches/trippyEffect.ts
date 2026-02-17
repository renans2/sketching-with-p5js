import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const SPEED = 0.025;
  const N = 100;
  const ROTATIONS = 20;
  let yOffset: number;
  let rotationAngle: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(1);
    p.noFill();
    p.colorMode(p.HSL);

    rotationAngle = p.TWO_PI / ROTATIONS;
    yOffset = p.height / N;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.frameCount * 0.01);
    p.background(0, 50);

    for (let i = 0; i < ROTATIONS; i++) {
      p.rotate(rotationAngle);
      for (let i = 0; i < N; i++) {
        const y = i * yOffset;
        const angle = p.map(i, 0, N, 0, p.TWO_PI);
        const ySup = p.map(
          p.sin(angle - p.frameCount * SPEED),
          -1,
          1,
          0,
          p.height,
        );
        p.stroke(p.map(angle, 0, p.TWO_PI, 0, 360), 100, 50, 0.3);
        p.bezier(0, y, 0, ySup, p.width - p.mouseX * 2, ySup, p.width / 2, y);
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
