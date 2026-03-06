import type { CirclesAroundCirclesProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (
  p: p5,
  store: ZustandStore<CirclesAroundCirclesProps>,
) => {
  const { p5Remove, vars, unsubscribe } =
    initMethods<CirclesAroundCirclesProps>("circles-around-circles", p, store);

  let globalSpeed = 0;
  let colorVar = 0;
  let multiplier;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noStroke();
  };

  p.draw = () => {
    globalSpeed += vars.rotationSpeed;
    p.background(0, 0, 0, 0.1);
    multiplier = p.map(p.mouseY, p.height, 0, 1, 500);
    p.translate(p.width / 2, p.height / 2);
    generateCircles(0, 0, multiplier, vars.radius * 2, globalSpeed, vars.depth);
    colorVar = (colorVar + 1) % 360;
    p.fill(colorVar, 100, 50, 0.5);
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

  function generateCircles(
    centerX: number,
    centerY: number,
    multiplier: number,
    radius: number,
    angleIncrementer: number,
    depth: number,
  ) {
    if (depth > 0) {
      const offset = p.TWO_PI / vars.n;
      for (let i = 0; i < vars.n; i++) {
        let angle = i * offset + angleIncrementer;
        let x = centerX + p.cos(angle) * multiplier;
        let y = centerY + p.sin(angle) * multiplier;
        const hue = (p.map(i, 0, vars.n, 0, 360) + p.frameCount * 1) % 360;
        p.stroke(hue, 100, 50, 1);
        p.noFill();
        p.circle(x, y, radius * 2);
        generateCircles(
          x,
          y,
          multiplier * 0.5,
          radius * 0.4,
          -angleIncrementer,
          depth - 1,
        );
      }
    }
  }
};
