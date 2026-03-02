import type { PendulumWavesProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";

export const sketch = (p: p5, store: ZustandStore<PendulumWavesProps>) => {
  const vars = getInitialVars("pendulum-waves") as PendulumWavesProps;
  const unsubscribe = subscribeToStore(vars, store);
  // let speed = 0.003;
  // let colorSpeed = 3;
  // let insideFaster = true;

  const N_CIRCLES = 20;
  const RADIUS = 7;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);

    p.noStroke();
    p.colorMode(p.HSL);
  };

  p.draw = () => {
    const offset = p.width / 2 / N_CIRCLES;
    p.translate(p.width / 2, p.height - RADIUS);
    p.background(0);

    for (let i = 0; i < N_CIRCLES; i++) {
      const myColor = p.color(
        (p.map(i, 0, N_CIRCLES, 30, 360) + p.frameCount * vars.colorSpeed) %
          360,
        100,
        50,
        1,
      );
      p.fill(myColor);
      const radius = offset * (i + 1);

      let a =
        (p.PI +
          p.frameCount *
            (N_CIRCLES - (vars.insideFaster ? i : -i) * 0.4 + 1) *
            vars.speed) %
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
  };

  p.remove = () => {
    unsubscribe();
  };
};
