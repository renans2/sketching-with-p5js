import type { SpiralRgbProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<SpiralRgbProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<SpiralRgbProps>(
    "spiral-rgb",
    p,
    store,
  );

  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();
    p.background(0);
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    p.background(0, 0, 0, vars.backgroundOpacity);
    p.translate(p.width / 2, p.height / 2);
    drawCircles();
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

  function drawCircles() {
    const offset = p.width / 2 / vars.n;

    for (let i = 0; i < vars.n; i++) {
      const angle = (vars.insideFaster ? vars.n - i : i + 1) * globalSpeed;
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
