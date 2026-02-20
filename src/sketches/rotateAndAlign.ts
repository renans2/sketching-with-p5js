import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let globalSpeed = 0.005;
  let n = 20;
  let insideFaster = false;

  let globalAngle = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.stroke(255);
    p.strokeWeight(3);
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.2);
    p.translate(p.width / 2, p.height / 2);

    globalAngle = (globalAngle - globalSpeed) % 360;
    drawCirclesAndLines();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  function drawCirclesAndLines() {
    p.push();
    p.beginShape();
    for (let i = 0; i < n; i++) {
      const multiplier = p.map(i, 0, n, 0.1 * p.width, p.width / 2);
      const angle = (insideFaster ? n - i : i + 1) * globalAngle;
      const x = p.cos(angle) * multiplier;
      const y = p.sin(angle) * multiplier;
      const hue = p.map(i, 0, n, 0, 360);
      p.fill(hue, 100, 50, 1);
      p.stroke(hue, 100, 50, 1);
      p.line(0, 0, x, y);
      p.circle(x, y, ((1 - n) / n) * 15);
      p.noFill();
      p.vertex(x, y);
    }
    p.stroke(0, 0, 100, 0.5);
    p.endShape();
    p.pop();
  }
};
