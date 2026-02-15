import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const circlesAroundCircles = (p: p5) => {
  let multiplier;
  let diameter = 50;
  let amount = 6;
  let offset;
  let angleIncrementer;
  let colorVar = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSL);
    p.fill(0, 100, 50, 1);
    offset = 360 / amount;
    p.background(0);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.075);
    multiplier = p.map(p.mouseY, p.height, 0, 1, 500);
    angleIncrementer = p.map(p.mouseX, 0, p.width, 0, 360);
    p.translate(p.width / 2, p.height / 2);
    generateCircles(0, 0, multiplier, diameter, p.frameCount * 0.75, 3);
    colorVar = (colorVar + 1) % 360;
    p.fill(colorVar, 100, 50, 0.5);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function generateCircles(
    centerX,
    centerY,
    multiplier,
    diameter,
    angleIncrementer,
    depth,
  ) {
    if (depth > 0) {
      for (let i = 0; i < amount; i++) {
        let angle = i * offset + angleIncrementer;
        let x = centerX + p.cos(angle) * multiplier;
        let y = centerY + p.sin(angle) * multiplier;
        p.circle(x, y, diameter);
        generateCircles(
          x,
          y,
          multiplier * 0.5,
          diameter * 0.5,
          -angleIncrementer,
          depth - 1,
        );
      }
    }
  }
};
