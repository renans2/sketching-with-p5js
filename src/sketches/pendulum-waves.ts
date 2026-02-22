import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let speed = 0.003;
  let colorSpeed = 3;
  let insideFaster = true;

  const N_CIRCLES = 20;
  const RADIUS = 7;
  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);

    p.noStroke();
    p.colorMode(p.HSL);

    offset = p.width / 2 / N_CIRCLES;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height - RADIUS);
    p.background(0);

    for (let i = 0; i < N_CIRCLES; i++) {
      const myColor = p.color(
        (p.map(i, 0, N_CIRCLES, 30, 360) + p.frameCount * colorSpeed) % 360,
        100,
        50,
        1,
      );
      p.fill(myColor);
      const radius = offset * (i + 1);

      let a =
        (p.PI +
          p.frameCount *
            (N_CIRCLES - (insideFaster ? i : -i) * 0.4 + 1) *
            speed) %
        p.TWO_PI;
      let tempAngle;

      if (a > 0 && a < p.PI) tempAngle = a + p.TWO_PI - 2 * a;
      else tempAngle = a;

      const x = p.cos(tempAngle) * radius;
      const y = p.sin(tempAngle) * radius;
      p.circle(x, y, offset);
      p.push();
      p.noFill();
      p.stroke(myColor);
      p.strokeWeight(2);
      p.circle(0, 0, radius * 2);
      p.pop();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
    offset = p.width / 2 / N_CIRCLES;
  };
};
