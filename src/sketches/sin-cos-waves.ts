import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { SinCosWavesProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<SinCosWavesProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<SinCosWavesProps>(
    "sin-cos-waves",
    p,
    store,
  );

  // sin-cos-waves
  // let n = 100;
  // let radius = 10;
  // let amplitude = 250;
  // let frequency = 2500;

  let offset = 0;
  let index = 0;
  let colorVar = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();

    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(0);
    offset = p.width / vars.n;
    generateCircles(vars.amplitude, vars.frequency);
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

  // p.mouseReleased = () => {
  //   vars.n += 100;
  // };

  function generateCircles(amplitude: number, frequency: number) {
    index = (index + 3) % 360;
    colorVar = (colorVar + 3) % 360;

    for (let i = 0; i < vars.n; i++) {
      const color = (offset * i + colorVar) % 360;
      const angle = p.map(i, 0, vars.n, 0, frequency);
      p.fill(color, 100, 50, 1);
      p.circle(
        offset * i + offset / 2,
        p.height / 2 + p.sin(angle + index) * amplitude,
        vars.radius * 2,
      );
    }
  }
};
