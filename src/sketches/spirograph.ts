import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const spirograph = (p: p5) => {
  let leadAngle = 0;
  let angle = 0;
  let leadAngleInc, angleInc, r1, r2, prevX, prevY, color;
  const colorInc = 0.05;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(2);
    p.colorMode(p.HSL);
    p.background(0);

    leadAngleInc = p.random(0.001, 0.1);
    angleInc = p.random(0.001, 0.1);

    color = p.random(360);

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

      p.stroke(color, 100, 50, 1);
      p.line(prevX, prevY, x, y);

      prevX = x;
      prevY = y;

      leadAngle += leadAngleInc;
      angle += angleInc;
      color = (color + colorInc) % 360;
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
