import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let n = 30;
  let insideFaster = false;
  const speed = 0.005;
  let radius = 14;
  let colorSpeed = 3;
  let backgroundOpacity = 0.5;
  let noFill = false;

  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();
    p.background(0);
    offset = p.width / 2 / n;
  };

  p.draw = () => {
    p.background(0, 0, 0, backgroundOpacity);
    p.translate(p.width / 2, p.height / 2);
    drawCircles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
    offset = p.width / 2 / n;
  };

  function drawCircles() {
    for (let i = 0; i < n; i++) {
      const angle = (insideFaster ? n - i : i + 1) * p.frameCount * speed;
      const x = p.cos(angle) * ((i + 1) * offset);
      const y = p.sin(angle) * ((i + 1) * offset);
      const hue = (p.map(i, 0, n, 0, 360) + p.frameCount * colorSpeed) % 360;

      if (noFill) {
        p.stroke(hue, 100, 50, 1);
        p.noFill();
      } else {
        p.fill(hue, 100, 50, 1);
      }

      p.circle(x, -y, radius * 2);
    }
  }
};
