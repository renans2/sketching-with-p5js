import type p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const HUE_INCREMENTER = 0.05;
  let leadAngle = 0;
  let angle = 0;
  let leadAngleInc: number;
  let angleInc: number;
  let r1: number;
  let r2: number;
  let prevX: number;
  let prevY: number;
  let hue: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(2);
    p.colorMode(p.HSL);
    p.background(0);

    leadAngleInc = p.random(0.001, 0.1);
    angleInc = p.random(0.001, 0.1);

    hue = p.random(360);

    r1 = p.random(p.height / 10, p.height / 4);
    r2 = p.height / 2 - r1;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < 15; i++) {
      const leadX = p.cos(-leadAngle) * r1;
      const leadY = p.sin(-leadAngle) * r1;

      const x = leadX + p.cos(angle) * r2;
      const y = leadY + p.sin(angle) * r2;

      p.stroke(hue, 100, 50, 1);
      p.line(prevX, prevY, x, y);

      prevX = x;
      prevY = y;

      leadAngle += leadAngleInc;
      angle += angleInc;
      hue = (hue + HUE_INCREMENTER) % 360;
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
