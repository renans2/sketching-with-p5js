import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const N = 100;
  const SPEED = 0.035;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);

    p.stroke(255);
    p.strokeWeight(5);
    p.noFill();
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.25);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.PI / 4);

    for (let i = 0; i < N; i++) {
      p.push();
      const angle = p.map(i, 0, N, p.TWO_PI * 1.5, 0);
      p.rotate(p.sin(angle + p.frameCount * SPEED));
      const side = p.map(i, 0, N, 10, p.width);
      p.stroke((p.map(i, 0, N, 0, 360) + p.frameCount * 2) % 360, 100, 50, 0.1);
      p.rect(0, 0, side, side);
      p.pop();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
