import type p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const DIVISIONS = 30;
  let angleOffset: number;
  let x: number | null = 0;
  let y: number | null = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);

    p.strokeWeight(3);
    p.colorMode(p.HSL);
    p.background(0);

    angleOffset = p.TWO_PI / DIVISIONS;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseIsPressed) {
      const newX = p.mouseX - p.width / 2;
      const newY = p.mouseY - p.width / 2;

      if (!x && !y) {
        x = newX;
        y = newY;
      }

      for (let i = 0; i < DIVISIONS; i++) {
        p.rotate(angleOffset);
        p.push();
        if (i % 2 === 0) p.scale(1, -1);
        const hue = (p.map(i, 0, DIVISIONS, 0, 360) + p.frameCount * 5) % 360;
        p.stroke(hue, 100, 100, 1);
        p.line(x!, y!, newX, newY);
        p.pop();
      }
      x = newX;
      y = newY;
    } else if (x && y) {
      x = null;
      y = null;
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.doubleClicked = () => {
    p.background(0);
  };
};
