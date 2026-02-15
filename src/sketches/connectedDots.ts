import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const connectedDots = (p: p5) => {
  let n, angleOffset, speed;
  const circleDiameter = 10;
  let angle = 0;
  let angleIncrementer;

  p.setup = () => {
    createCanvas(700, 700);
    p.stroke(0);
  };

  p.draw = () => {
    p.background(255, 75);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-PI / 2);

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

      p.circle(x, y, p.circleDiameter);
    }

    angle += angleIncrementer;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
