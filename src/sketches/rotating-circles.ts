import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { RotatingCirclesProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<RotatingCirclesProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<RotatingCirclesProps>(
    "rotating-circles",
    p,
    store,
  );

  // rotating-circles
  // let nRings = 30;
  // let nCirclesPerRing = 5;
  // let circleRadius = 7;
  // let speed = 0.003;

  let globalSpeed = 0;

  let way = true;
  let circleOffset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noFill();
    p.strokeWeight(2);
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    circleOffset = p.TWO_PI / vars.nCirclesPerRing;
    p.background(0, 0.2);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < vars.nRings; i++) {
      const rotateAngle = p.map(i, 0, vars.nRings, 0, p.TWO_PI);
      p.push();
      p.rotate(rotateAngle + (way ? vars.nRings - i + 1 : i + 1) * globalSpeed);
      p.stroke(
        (p.map(i, 0, vars.nRings, 0, 360) + p.frameCount * 5) % 360,
        100,
        50,
        1,
      );
      const local_diameter = p.map(
        p.sin(p.map(i, 0, vars.nRings, 0, p.TWO_PI) + p.frameCount * 0.02),
        -1,
        1,
        vars.circleRadius,
        7 * vars.circleRadius,
      );

      for (let j = 0; j < vars.nCirclesPerRing; j++) {
        p.push();
        p.rotate(j * circleOffset);
        p.circle(0, (i + 1) * vars.circleRadius, local_diameter);
        p.pop();
      }
      p.pop();
    }
  };

  p.remove = () => {
    unsubscribe();
    p5Remove();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.mousePressed = () => {
    way = !way;
  };
};
