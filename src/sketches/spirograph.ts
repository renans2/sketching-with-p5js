import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let speed = 10;
  let radius1 = 200;
  let radius2 = 200;
  let colorSpeed = 0.5;
  let leadAngleInc = 0.03;
  let angleInc = 0.024131;

  const INITIAL_HUE = p.random(360);
  let leadAngle = 0;
  let angle = 0;
  let prevX: number;
  let prevY: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(2);
    p.colorMode(p.HSL);
    p.background(0);

    // radius2 = p.width / 2 - radius1;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < speed; i++) {
      const leadX = p.cos(-leadAngle) * radius1;
      const leadY = p.sin(-leadAngle) * radius1;
      // p.circle(leadX, leadY, 10);

      const x = leadX + p.cos(angle) * radius2;
      const y = leadY + p.sin(angle) * radius2;
      // p.circle(x, y, 10);

      const hue = (INITIAL_HUE + p.frameCount * colorSpeed) % 360;
      p.stroke(hue, 100, 50, 1);
      p.line(prevX, prevY, x, y);

      prevX = x;
      prevY = y;

      leadAngle += leadAngleInc;
      angle += angleInc;
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };
};
