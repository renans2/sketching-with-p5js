import type { KaleidoscopeProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";

export const sketch = (p: p5, store: ZustandStore<KaleidoscopeProps>) => {
  const p5Remove = p.remove.bind(p);
  const vars = getInitialVars("kaleidoscope") as KaleidoscopeProps;
  const unsubscribe = subscribeToStore(vars, store);
  // const n = 100;
  // const speed = 0.01;
  // const colorSpeed = 0.2;
  // const strokeWeight = 1;
  // const opacity = 0.2;

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

  p.remove = () => {
    unsubscribe();
  };
};
