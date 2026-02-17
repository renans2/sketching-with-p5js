import type p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const N = 250;
  let speed = 0.00005;
  let angleOffset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.colorMode(p.HSL);
    angleOffset = p.TWO_PI / N;
  };

  p.draw = () => {
    p.background(0, 0.1);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < N; i++) {
      p.rotate(angleOffset);

      const angle =
        p.map(
          i,
          0,
          N,
          0,
          p.floor(p.map(p.mouseX, 0, p.width, 0, 50)) * p.TWO_PI,
        ) +
        p.frameCount * p.mouseX * speed;
      const y = p.map(
        p.sin(angle),
        -1,
        1,
        p.map(p.mouseY, 0, p.height, p.width / 2, -p.width / 2),
        p.width / 2,
      );

      const hue = (p.map(y, 0, p.width / 2, 0, 360) + p.frameCount * 3) % 360;
      p.stroke(hue, 100, 50, 1);
      p.noFill();
      p.circle(0, y, 7);
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
