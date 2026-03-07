import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { ConnectedDotsProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<ConnectedDotsProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<ConnectedDotsProps>(
    "connected-dots",
    p,
    store,
  );

  // connected-dots
  // let radius = 5;
  // let n = 10;
  // let speed = 0.001;

  let angleOffset;
  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.stroke(255);
    p.noFill();
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    p.background(0, 75);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.PI / 2);

    // n = Math.floor(p.map(p.mouseX, 0, p.width, 1, 15)) * 3;
    angleOffset = p.TWO_PI / vars.n;

    for (let i = 0; i < vars.n; i++) {
      const x = p.cos(i * angleOffset * globalSpeed) * 0.9 * (p.width / 2);
      const y = p.sin(i * angleOffset * globalSpeed) * 0.9 * (p.width / 2);

      for (let j = i; j < vars.n; j++) {
        const otherX =
          p.cos(j * angleOffset * globalSpeed) * 0.9 * (p.width / 2);
        const otherY =
          p.sin(j * angleOffset * globalSpeed) * 0.9 * (p.width / 2);
        p.line(x, y, otherX, otherY);
      }

      p.circle(x, y, vars.radius * 2);
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
