import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const perlinNoiseWaves = (p: p5) => {
  let offset: number;
  let amountX: number;
  let amountY: number;
  let m1: number;
  let rectHeight: number;
  const m2 = 0.005;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0, 0.05);
    updateVariables();
    drawRectangles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function updateVariables() {
    m1 = p.map(p.mouseX, 0, p.width, 0, 0.0025);
    offset = p.map(p.mouseY, p.height, 0, 20, 125);
    amountX = p.width / offset;
    amountY = p.height / offset;
    rectHeight = offset / 4;
  }

  function drawRectangles() {
    for (let i = 0; i < amountY; i++) {
      for (let j = 0; j < amountX; j++) {
        const x = j * offset;
        const y = i * offset + rectHeight;
        const angle = p.map(
          p.noise(x * m1 + p.frameCount * m2, y * m1 + p.frameCount * m2),
          0,
          1,
          0,
          2 * p.TWO_PI,
        );
        p.push();
        p.translate(x, y);
        p.rotate(angle);
        p.fill(p.map(angle, 0, 1.5 * p.TWO_PI, 0, 360), 100, 50, 1);
        p.rect(0, 0, offset, rectHeight);
        p.pop();
      }
    }
  }
};
