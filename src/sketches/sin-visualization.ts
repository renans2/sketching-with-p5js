import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { SinVisualizationProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<SinVisualizationProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<SinVisualizationProps>(
    "sin-visualization",
    p,
    store,
  );

  // sin-visualization
  // let n = 100;
  // let speed = 0.035;
  // let maxRotation = 1.5;

  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);

    p.stroke(255);
    p.strokeWeight(5);
    p.noFill();
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    p.background(0, 0, 0, 0.25);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.PI / 4);

    for (let i = 0; i < vars.n; i++) {
      p.push();
      const angle = p.map(i, 0, vars.n, p.TWO_PI * vars.maxRotation, 0);
      p.rotate(p.sin(angle + globalSpeed));
      const side = p.map(i, 0, vars.n, 10, p.width);
      p.stroke(
        (p.map(i, 0, vars.n, 0, 360) + p.frameCount * 2) % 360,
        100,
        50,
        0.1,
      );
      p.rect(0, 0, side, side);
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
};
