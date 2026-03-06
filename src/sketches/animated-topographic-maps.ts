import type { AnimatedTopographicMapsProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (
  p: p5,
  store: ZustandStore<AnimatedTopographicMapsProps>,
) => {
  const { p5Remove, vars, unsubscribe } =
    initMethods<AnimatedTopographicMapsProps>(
      "animated-topographic-maps",
      p,
      store,
    );

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noStroke();
  };

  p.draw = () => {
    const offset = p.width / vars.n;
    const radius = offset / 2;
    p.background(0);

    for (let i = 0; i < vars.n; i++) {
      for (let j = 0; j < vars.n; j++) {
        const noisee = p.noise(
          i * vars.noiseMultiplier,
          j * vars.noiseMultiplier,
          p.frameCount * vars.speed,
        );

        const n = noisee % vars.step;

        if (n < vars.gap) {
          const hue = p.map(noisee, 0, 1, -100, 460);
          p.fill(hue, 100, 50);

          const x = i * offset + offset / 2;
          const y = j * offset + offset / 2;
          p.circle(x, y, radius * 2);
        }
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
