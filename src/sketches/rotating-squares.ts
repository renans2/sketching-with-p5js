import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import type { ZustandStore } from "../types/ZustandStore";
import type { RotatingSquaresProps } from "../types/sketches-props";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<RotatingSquaresProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<RotatingSquaresProps>(
    "rotating-squares",
    p,
    store,
  );

  let strokeOpacity = 0.7;
  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.rectMode(p.CENTER);
    p.noFill();
    p.colorMode(p.HSL);
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

  p.draw = () => {
    globalSpeed += vars.speed;
    p.background(0, 0.1);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < vars.n; i++) {
      const side = p.map(i, 0, vars.n, 0, p.width);
      const angle = (vars.insideFaster ? vars.n - i : i + 1) * globalSpeed;
      const hue = (p.map(i, 0, vars.n, 0, 360) + p.frameCount * 3) % 360;
      p.stroke(hue, 100, 50, strokeOpacity);
      p.push();
      p.rotate(angle);
      p.rect(0, 0, side, side);
      p.pop();
    }
  };
};
