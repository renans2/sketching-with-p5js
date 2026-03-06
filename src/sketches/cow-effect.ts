import type { CowEffectProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<CowEffectProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<CowEffectProps>(
    "cow-effect",
    p,
    store,
  );

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.pixelDensity(1);
    p.noStroke();
    p.noiseDetail(2, 0.9);
  };

  p.draw = () => {
    const offset = p.width / vars.n;
    p.background(0);
    p.frameRate(24);
    p.noStroke();

    for (let i = 0; i < vars.n; i++) {
      for (let j = 0; j < vars.n; j++) {
        const n = p.noise(
          j * vars.noiseMultiplier,
          i * vars.noiseMultiplier,
          p.frameCount * vars.speed,
        );
        const colorVal = n < 0.5 ? 0 : 255;

        p.fill(colorVal);
        p.rect(j * offset, i * offset, offset + 1);
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
