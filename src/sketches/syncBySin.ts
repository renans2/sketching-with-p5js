import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const syncBySin = (p: p5) => {
  const amount = 50;
  let diameter = 100;
  let offset;
  let angle = 0;
  const startingAngle = 270;
  const speed = 0.05;
  let multiplier;

  p.setup = () => {
    p.noStroke();
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    angleMode(DEGREES);
    p.colorMode(p.HSL);
    multiplier = p.width / 2;
    offset = p.height / amount;
    diameter = offset * 2;
  };

  p.draw = () => {
    p.background(0, 0, 0, 1);
    generateCircles();
    angle = (angle + speed) % 360;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function generateCircles() {
    for (let i = 0; i < amount; i++) {
      const currentAngle = startingAngle + angle * (i + 1);
      const x = (p.sin(currentAngle) + 1) * multiplier;
      const y = offset * i + offset / 2;
      const color = p.map(x, 0, p.width, 100, 300);
      p.fill(color, 100, 50, 1);
      p.circle(x, y, diameter);
    }
  }
};
