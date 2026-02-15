import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const circlesAroundCircles = (p: p5) => {
  const RADIUS = 15;
  const N = 6;
  const DEPTH = 3;
  const ROTATION_SPEED = 0.02;
  let multiplier: number;
  let offset: number;
  let colorVar = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noStroke();
    offset = p.TWO_PI / N;
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.1);
    multiplier = p.map(p.mouseY, p.height, 0, 1, 500);
    p.translate(p.width / 2, p.height / 2);
    generateCircles(
      0,
      0,
      multiplier,
      RADIUS * 2,
      p.frameCount * ROTATION_SPEED,
      DEPTH,
    );
    colorVar = (colorVar + 1) % 360;
    p.fill(colorVar, 100, 50, 0.5);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function generateCircles(
    centerX: number,
    centerY: number,
    multiplier: number,
    radius: number,
    angleIncrementer: number,
    depth: number,
  ) {
    if (depth > 0) {
      for (let i = 0; i < N; i++) {
        let angle = i * offset + angleIncrementer;
        let x = centerX + p.cos(angle) * multiplier;
        let y = centerY + p.sin(angle) * multiplier;
        p.circle(x, y, radius * 2);
        generateCircles(
          x,
          y,
          multiplier * 0.5,
          radius * 0.4,
          -angleIncrementer,
          depth - 1,
        );
      }
    }
  }
};
