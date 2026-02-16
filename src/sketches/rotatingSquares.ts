import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";
import { useRotatingSquaresStore } from "../components/dashboards/rotating-squares";

export const rotatingSquares = (p: p5) => {
  let n = useRotatingSquaresStore.getState().n;
  const SPEED = 0.002;

  const unsubscribe = useRotatingSquaresStore.subscribe((state) => {
    n = state.n;
  });

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.rectMode(p.CENTER);
    p.noFill();
    p.stroke(255, 130);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.draw = () => {
    p.background(0, 50);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < n; i++) {
      const side = p.map(i, 0, n, p.width, 0);
      const angle = p.frameCount * (i + 1) * SPEED;
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
