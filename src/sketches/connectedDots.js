import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const RADIUS = 5;
  let n, angleOffset;
  let angle = 0;
  let angleIncrementer;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.stroke(0);
  };

  p.draw = () => {
    p.background(255, 75);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.PI / 2);

    n = Math.floor(p.map(p.mouseX, 0, p.width, 1, 15)) * 3;
    angleOffset = p.TWO_PI / n;

    angleIncrementer = p.map(p.mouseY, 0, p.height, 0.0001, 0.01);

    for (let i = 0; i < n; i++) {
      const x = p.cos(i * angleOffset * angle) * 0.9 * (p.width / 2);
      const y = p.sin(i * angleOffset * angle) * 0.9 * (p.width / 2);

      for (let j = i; j < n; j++) {
        const otherX = p.cos(j * angleOffset * angle) * 0.9 * (p.width / 2);
        const otherY = p.sin(j * angleOffset * angle) * 0.9 * (p.width / 2);
        p.line(x, y, otherX, otherY);
      }

      p.circle(x, y, RADIUS * 2);
    }

    angle += angleIncrementer;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
