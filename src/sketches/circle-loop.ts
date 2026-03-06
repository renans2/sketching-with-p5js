import type { CircleLoopProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";
import { initClearCanvasMethod } from "../utils/define-store-methods";

export const sketch = (p: p5, store: ZustandStore<CircleLoopProps>) => {
  const p5Remove = p.remove.bind(p);
  const vars = getInitialVars("circle-loop") as CircleLoopProps;
  const unsubscribe = subscribeToStore(vars, store);
  initClearCanvasMethod(p, store);
  // let n = 250;
  // let speed = 0.01;
  // let colorSpeed = 1;
  // let radius = 5;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
  };

  p.draw = () => {
    const angleOffset = p.TWO_PI / vars.n;
    p.background(0, 0.1);
    p.translate(p.width / 2, p.height / 2);
    const corners = p.floor(p.map(p.mouseX, 0, p.width, 0, 50));
    const minHeight = p.map(p.mouseY, 0, p.height, p.width / 2, -p.width / 2);

    for (let i = 0; i < vars.n; i++) {
      p.rotate(angleOffset);

      const angle =
        (p.map(i, 0, vars.n, 0, corners * p.TWO_PI) +
          p.frameCount * vars.speed) %
        p.TWO_PI;

      const y = p.map(p.sin(angle), -1, 1, minHeight, p.width / 2);

      const hue =
        (p.map(angle, 0, p.TWO_PI, 0, 360) + p.frameCount * vars.colorSpeed) %
        360;
      p.stroke(hue, 100, 50, 1);
      p.noFill();
      p.circle(0, y, vars.radius * 2);
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
