import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { initMethods } from "../utils/define-store-methods";
import type { RainbowFlowerProps } from "../types/sketches-props";

export const sketch = (p: p5, store: ZustandStore<RainbowFlowerProps>) => {
  const { p5Remove, vars, unsubscribe } = initMethods<RainbowFlowerProps>(
    "rainbow-flower",
    p,
    store,
  );

  // rainbow-flower
  // let n = 100;
  // let radius = 15;
  // let speed = 0.001;

  let minRadius: number;
  let maxRadius: number;
  let angleOffset: number;

  let globalSpeed = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.colorMode(p.HSL);

    angleOffset = p.TWO_PI / vars.n;
    minRadius = p.height * 0.1;
    maxRadius = p.height * 0.45;
  };

  p.draw = () => {
    globalSpeed += vars.speed;
    p.translate(p.width / 2, p.height / 2);
    p.background(0, 0.15);

    for (let i = 0; i < vars.n; i++) {
      p.rotate(angleOffset);
      const localRadius = p.map(
        p.sin((i + 1) * -globalSpeed),
        -1,
        1,
        minRadius,
        maxRadius,
      );
      p.fill(p.map(i, 0, vars.n, 0, 360), 100, 50, 0.5);
      p.circle(0, localRadius, vars.radius * 2);
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
