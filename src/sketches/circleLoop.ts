import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  const N = 250;
  let speed = 0.01;
  let angleOffset = p.TWO_PI / N;
  const COLOR_SPEED = 1;
  const RADIUS = 5;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
  };

  p.draw = () => {
    p.background(0, 0.1);
    p.translate(p.width / 2, p.height / 2);
    const corners = p.floor(p.map(p.mouseX, 0, p.width, 0, 50));
    const minHeight = p.map(p.mouseY, 0, p.height, p.width / 2, -p.width / 2);

    for (let i = 0; i < N; i++) {
      p.rotate(angleOffset);

      const angle =
        (p.map(i, 0, N, 0, corners * p.TWO_PI) + p.frameCount * speed) %
        p.TWO_PI;

      const y = p.map(p.sin(angle), -1, 1, minHeight, p.width / 2);

      const hue =
        (p.map(angle, 0, p.TWO_PI, 0, 360) + p.frameCount * COLOR_SPEED) % 360;
      p.stroke(hue, 100, 50, 1);
      p.noFill();
      p.circle(0, y, RADIUS * 2);
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };
};
