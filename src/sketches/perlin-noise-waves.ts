import type { PerlinNoiseWavesProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";
import { initClearCanvasMethod } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<PerlinNoiseWavesProps>) => {
  const p5Remove = p.remove.bind(p);
  const vars = getInitialVars("perlin-noise-waves") as PerlinNoiseWavesProps;
  const unsubscribe = subscribeToStore(vars, store);
  initClearCanvasMethod(p, store);
  // let n = 50;
  // let noiseMultiplier = 0.002;
  // let speed = 0.005;
  // let widthMultiplier = 0.5;
  // let heightMultiplier = 2;
  // let opacity = 1;
  // let backgroundOpacity = 1;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(0, vars.backgroundOpacity * 255);
    drawRectangles();
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

  function drawRectangles() {
    const offset = p.width / vars.n;

    for (let i = 0; i < vars.n; i++) {
      for (let j = 0; j < vars.n; j++) {
        const x = j * offset + offset / 2;
        const y = i * offset + offset / 2;
        const angle = p.map(
          p.noise(
            x * vars.noiseMultiplier,
            y * vars.noiseMultiplier,
            p.frameCount * vars.speed,
          ),
          0,
          1,
          0,
          2 * p.TWO_PI,
        );
        p.push();
        p.translate(x, y);
        p.rotate(angle);
        const color = p.map(angle, 0, p.TWO_PI, -100, 255);
        p.fill(color, vars.opacity * 255);
        p.rect(
          0,
          0,
          offset * vars.widthMultiplier,
          offset * vars.heightMultiplier,
        );
        p.pop();
      }
    }
  }
};
