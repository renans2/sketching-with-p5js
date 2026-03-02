import type { SpiralRgbProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";

export const sketch = (p: p5, store: ZustandStore<SpiralRgbProps>) => {
  const vars = getInitialVars("spiral-rgb") as SpiralRgbProps;
  const unsubscribe = subscribeToStore(vars, store);
  // let n = 30;
  // let insideFaster = false;
  // let speed = 0.005;
  // let radius = 14;
  // let colorSpeed = 3;
  // let backgroundOpacity = 0.5;
  // let noFill = false;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 0, 0, vars.backgroundOpacity);
    p.translate(p.width / 2, p.height / 2);
    drawCircles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.remove = () => {
    unsubscribe();
  };

  function drawCircles() {
    const offset = p.width / 2 / vars.n;

    for (let i = 0; i < vars.n; i++) {
      const angle =
        (vars.insideFaster ? vars.n - i : i + 1) * p.frameCount * vars.speed;
      const x = p.cos(angle) * ((i + 1) * offset);
      const y = p.sin(angle) * ((i + 1) * offset);
      const hue =
        (p.map(i, 0, vars.n, 0, 360) + p.frameCount * vars.colorSpeed) % 360;

      if (vars.noFill) {
        p.stroke(hue, 100, 50, 1);
        p.noFill();
      } else {
        p.fill(hue, 100, 50, 1);
      }

      p.circle(x, -y, vars.radius * 2);
    }
  }
};
