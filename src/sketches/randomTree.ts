import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const sketch = (p: p5) => {
  const branchProb = 25;
  let maxAngle: number;
  const minLength = 10;
  const maxLength = 50;
  const depth = 20;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.cursor(p.HAND);
    p.stroke(255);
    p.strokeWeight(1);
    maxAngle = p.PI / 8;

    p.background(0);
    p.push();
    p.translate(p.width / 2, p.height);
    p.rotate(-p.PI / 2);
    drawLightning(depth);
    p.pop();
    p.noLoop();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.mousePressed = () => {
    p.background(0);
    p.push();
    p.translate(p.width / 2, p.height);
    p.rotate(-p.PI / 2);
    drawLightning(depth);
    p.pop();
  };

  function drawLightning(d: number) {
    if (d > 0) {
      const len = p.random(minLength, maxLength);
      p.stroke(p.map(d, 0, depth, 360, 0), 100, 50, 1);
      p.line(0, 0, len, 0);
      p.translate(len, 0);

      const num = p.random(100);
      if (num <= branchProb) {
        const childAngle = p.random(-maxAngle, maxAngle);
        p.push();
        p.rotate(childAngle);
        drawLightning(d - 1);
        p.pop();
      }

      const angle = p.random(-maxAngle, maxAngle);
      p.rotate(angle);
      drawLightning(d - 1);
    }
  }
};
