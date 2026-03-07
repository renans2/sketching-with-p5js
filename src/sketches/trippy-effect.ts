import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { TrippyEffectProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<TrippyEffectProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<TrippyEffectProps>(
    "trippy-effect",
    p,
    store,
  );

  // trippy-effect
  // let n = 100;
  // let speed = 0.025;
  // let rotations = 20;

  let yOffset: number;
  let rotationAngle: number;

  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(1);
    p.noFill();
    p.colorMode(p.HSL);

    rotationAngle = p.TWO_PI / vars.rotations;
    yOffset = p.height / vars.n;
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.frameCount * 0.01);
    p.background(0, 50);

    for (let i = 0; i < vars.rotations; i++) {
      p.rotate(rotationAngle);
      for (let i = 0; i < vars.n; i++) {
        const y = i * yOffset;
        const angle = p.map(i, 0, vars.n, 0, p.TWO_PI);
        const ySup = p.map(p.sin(angle - globalSpeed), -1, 1, 0, p.height);
        p.stroke(p.map(angle, 0, p.TWO_PI, 0, 360), 100, 50, 0.3);
        p.bezier(0, y, 0, ySup, p.width - p.mouseX * 2, ySup, p.width / 2, y);
      }
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
};
