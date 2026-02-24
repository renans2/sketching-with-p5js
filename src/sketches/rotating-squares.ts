import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import type { ZustandStore } from "../types/ZustandStore";
import type { RotatingSquaresProps } from "../types/sketches-props";
import { subscribeToStore } from "../utils/subscribe";
import { getInitialVars } from "../utils/get-initial-vars";

export const sketch = (p: p5, store: ZustandStore<RotatingSquaresProps>) => {
  const vars = getInitialVars("rotating-squares") as RotatingSquaresProps;
  const unsubscribe = subscribeToStore(vars, store);

  let strokeOpacity = 0.7;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.rectMode(p.CENTER);
    p.noFill();
    p.colorMode(p.HSL);

    store.setState((state) => ({
      data: {
        ...state.data,
        clear: () => p.background(0),
      },
    }));
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.draw = () => {
    const { n, speed, insideFaster } = vars;
    // p.background(0, 0.1);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < n; i++) {
      const side = p.map(i, 0, n, 0, p.width);
      const angle = (insideFaster ? n - i : i + 1) * p.frameCount * speed;
      const hue = (p.map(i, 0, n, 0, 360) + p.frameCount * 3) % 360;
      p.stroke(hue, 100, 50, strokeOpacity);
      p.push();
      p.rotate(angle);
      p.rect(0, 0, side, side);
      p.pop();
    }
  };

  p.remove = () => {
    unsubscribe();
  };
};
