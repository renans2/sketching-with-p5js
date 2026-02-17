import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const pendulumWaves = (p: p5) => {
  const N_CIRCLES = 20;
  const RADIUS = 7;
  const SPEED = 0.003;
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
        (p.map(i, 0, N_CIRCLES, 30, 360) + p.frameCount * 2) % 360,
        100,
        50,
        1,
      );
      p.fill(myColor);
      const radius = offset * (i + 1);

      let a =
        (p.PI + p.frameCount * (N_CIRCLES - i * 0.4 + 1) * SPEED) % p.TWO_PI;
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
  };
};
