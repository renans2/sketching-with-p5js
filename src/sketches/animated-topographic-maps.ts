import type { AnimatedTopographicMapsProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";

export const sketch = (
  p: p5,
  store: ZustandStore<AnimatedTopographicMapsProps>,
) => {
  const vars = getInitialVars(
    "animated-topographic-maps",
  ) as AnimatedTopographicMapsProps;
  const unsubscribe = subscribeToStore(vars, store);
  // let n = 150;
  // let noiseMultiplier = 0.015;
  // let gap = 0.0075;
  // let step = 0.05;
  // let speed = 0.0035;

  let offset: number;
  let radius: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noStroke();
    offset = p.width / vars.n;
    radius = offset / 2;
  };

  p.draw = () => {
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

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
    offset = p.width / vars.n;
    radius = offset / 2;
  };

  p.remove = () => {
    unsubscribe();
  };
};
