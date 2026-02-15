import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const kaleidoscope = (p: p5) => {
  const N = 100;
  const SPEED = 0.01;
  let angleOffset: number;
  let x: number;
  let y: number;
  let hue: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.strokeWeight(1);

    angleOffset = p.TWO_PI / N;
    // noiseDetail(8, 0.25);
    p.translate(p.width / 2, p.height / 2);
    x = (p.noise(p.frameCount * SPEED) * 2 - 1) * p.height * 0.75;
    y = (p.noise(p.frameCount * SPEED + 1000) * 2 - 1) * p.height * 0.75;
    hue = p.random(360);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.stroke(hue, 100, 50, 0.2);
    const newX = (p.noise(p.frameCount * SPEED) * 2 - 1) * p.height * 0.75;
    const newY =
      (p.noise(p.frameCount * SPEED + 1000) * 2 - 1) * p.height * 0.75;

    for (let i = 0; i < N; i++) {
      p.rotate(angleOffset);
      p.line(x, y, newX, newY);
    }

    x = newX;
    y = newY;
    hue = (hue + 0.1) % 360;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
