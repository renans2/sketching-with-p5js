import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const spiralRGB = (p: p5) => {
  let angle = 0;
  let diameter;
  const amount = 15;
  const speed = 0.25;
  let offset;
  let color = 0;
  const colorIncrementer = 5;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.angleMode(p.DEGREES);
    //noStroke();
    p.background(0);
    offset = p.width / 2 / amount;
    diameter = offset;
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.1);

    p.translate(p.width / 2, p.height / 2);

    color = (color + colorIncrementer) % 360;
    p.fill(color, 100, 50, 1);
    drawCircles();
    angle = (angle + speed) % 360;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawCircles() {
    for (let i = 1; i <= amount; i++) {
      const x = p.cos(i * angle) * (i * offset);
      const y = p.sin(i * angle) * (i * offset);
      p.circle(x, -y, diameter);
    }
  }
};
