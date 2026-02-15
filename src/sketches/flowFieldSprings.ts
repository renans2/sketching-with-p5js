import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const flowFieldSprings = (p: p5) => {
  const DEPTH = 1000;
  const offset = 50;
  let amountX, amountY;
  const minMultiplier = 0.001;
  const maxMultiplier = 0.0025;
  let bottomColor, topColor;
  let m1;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    amountX = p.width / offset;
    amountY = p.height / offset;
    p.strokeWeight(1);

    p.noLoop();
    drawAll();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawAll() {
    p.background(0);
    p.noiseSeed(p.random(1000000));
    m1 = p.random(minMultiplier, maxMultiplier);
    bottomColor = p.random(50);
    topColor = p.random(50, 360 - bottomColor) + bottomColor;

    p.fill(255, 100);
    for (let i = 0; i < amountY; i++) {
      for (let j = 0; j < amountX; j++) {
        const y = i * offset;
        const x = j * offset;
        p.noFill();
        drawBubble(x, y, DEPTH);
      }
    }
  }

  function drawBubble(x, y, depth) {
    if (isInsideCanvas(x, y) && depth > 0) {
      const n = p.noise(x * m1, y * m1);
      const angle = p.map(n, 0, 1, 0, 2 * p.TWO_PI);

      p.stroke(p.map(x, 0, p.width, bottomColor, topColor), 100, 50, 0.05);
      p.circle(x, y, offset);

      const newVec = p5.Vector.fromAngle(angle, offset / 10);
      drawBubble(x + newVec.x, y + newVec.y, depth - 1);
    }
  }

  function mousePressed() {
    if (mouseButton === LEFT) drawAll();
  }

  function isInsideCanvas(x, y) {
    return (
      x > -offset &&
      x < p.width + offset &&
      y > -offset &&
      y < p.height + offset
    );
  }
};
