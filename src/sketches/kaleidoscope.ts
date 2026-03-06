import type { KaleidoscopeProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<KaleidoscopeProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<KaleidoscopeProps>(
    "kaleidoscope",
    p,
    store,
  );

  let x: number;
  let y: number;
  const INITIAL_HUE = p.random(360);

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.strokeWeight(vars.strokeWeight);

    // noiseDetail(8, 0.25);
    p.translate(p.width / 2, p.height / 2);
    x = (p.noise(p.frameCount * vars.speed) * 2 - 1) * p.height * 0.75;
    y = (p.noise(p.frameCount * vars.speed + 1000) * 2 - 1) * p.height * 0.75;
  };

  p.draw = () => {
    const angleOffset = p.TWO_PI / vars.n;
    p.strokeWeight(vars.strokeWeight);
    p.translate(p.width / 2, p.height / 2);
    const hue = (INITIAL_HUE + p.frameCount * vars.colorSpeed) % 360;
    p.stroke(hue, 100, 50, vars.opacity);
    const newX = (p.noise(p.frameCount * vars.speed) * 2 - 1) * p.height * 0.75;
    const newY =
      (p.noise(p.frameCount * vars.speed + 1000) * 2 - 1) * p.height * 0.75;

    for (let i = 0; i < vars.n; i++) {
      p.rotate(angleOffset);
      p.line(x, y, newX, newY);
    }

    x = newX;
    y = newY;
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
