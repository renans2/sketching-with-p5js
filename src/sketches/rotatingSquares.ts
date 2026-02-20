import type { RefObject } from "react";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import type { RotatingSquaresProps } from "../types/controls-props/rotating-squares";
// import { useControlsStore } from "../stores/controls-store";

export const sketch = (p: p5, controlsRef: RefObject<RotatingSquaresProps>) => {
  // interactive
  // let n = useControlsStore.getState().val1;
  // let speed = useControlsStore.getState().val2;
  // let insideFaster = useControlsStore.getState().bool1;
  let strokeOpacity = 0.7;

  // const unsubscribe = useControlsStore.subscribe((state) => {
  //   n = state.val1;
  //   speed = state.val2 * 0.00001;
  //   insideFaster = state.bool1;
  // });

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.rectMode(p.CENTER);
    p.noFill();
    p.colorMode(p.HSL);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  p.draw = () => {
    const { n, speed, insideFaster } = controlsRef.current;
    p.background(0, 50);
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

  // p.remove = () => {
  //   unsubscribe();
  // };
};
