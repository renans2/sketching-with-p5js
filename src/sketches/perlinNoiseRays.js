import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const AMOUNT = 10;
  let MULTIPLIER = 0.003;
  const SPEED = 0.01;
  const VEC_LENGTH = 5;
  let offset;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noFill();
    offset = p.width / AMOUNT;
  };

  p.draw = () => {
    p.background(0, 50);
    p.strokeWeight(2);
    MULTIPLIER = p.map(p.mouseX, 0, p.width, 0.005, 0.01);

    for (let i = 0; i < AMOUNT; i++) {
      for (let j = 0; j < AMOUNT; j++) {
        const x = i * offset + offset / 2;
        const y = j * offset + offset / 2;
        p.stroke(p.map(x, 0, p.width, 0, 360), 100, 50, 0.3);
        p.beginShape();
        drawLine(x, y, getVectorFromPos(i, j));
        p.endShape();
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawLine(x, y, vec) {
    if (x < 0 || p.width < x || y < 0 || p.height < y) return;

    p.vertex(x, y);
    const newX = x + vec.x;
    const newY = y + vec.y;
    drawLine(newX, newY, getVectorFromPos(newX, newY));
  }

  function getVectorFromPos(x, y) {
    const noisee = p.noise(
      x * MULTIPLIER,
      y * MULTIPLIER,
      p.frameCount * SPEED,
    );
    const angle = p.map(noisee, 0, 1, 0, p.TWO_PI);
    return p5.Vector.fromAngle(angle, VEC_LENGTH);
  }
};
