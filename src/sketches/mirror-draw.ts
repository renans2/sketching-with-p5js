import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let divisions = 30;
  let strokeWeight = 2;
  let colored = true;
  let opacity = 1;
  let colorSpeed = 1;
  let mirror = false;

  let angleOffset = p.TWO_PI / divisions;
  let x: number | null = 0;
  let y: number | null = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.background(0);
  };

  p.draw = () => {
    p.strokeWeight(strokeWeight);
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseIsPressed) {
      const newX = p.mouseX - p.width / 2;
      const newY = p.mouseY - p.height / 2;

      if (!x && !y) {
        x = newX;
        y = newY;
      }

      for (let i = 0; i < divisions; i++) {
        p.rotate(angleOffset);
        p.push();
        if (i % 2 === 0 && mirror) p.scale(1, -1);

        if (colored) {
          const hue =
            (p.map(i, 0, divisions, 0, 360) + p.frameCount * colorSpeed) % 360;
          p.stroke(hue, 100, 50, opacity);
        } else {
          p.stroke(255, opacity);
        }

        if (x && y) {
          p.line(x, y, newX, newY);
        }
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
    p.background(0);
  };

  p.doubleClicked = () => {
    p.background(0);
  };
};
