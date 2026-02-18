import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const offset = 8;
  let amountX, amountY;
  const minMultiplier = 0.00045;
  const maxMultiplier = 0.002;
  let bottomColor, topColor;
  const colorGap = 100;
  let m1;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.cursor(p.HAND);
    p.strokeWeight(1);
    p.noFill();
    amountX = p.width / offset;
    amountY = p.height / offset;
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
    bottomColor = p.random(360 - colorGap);
    topColor = p.random(bottomColor + colorGap, 360);

    for (let i = 0; i < amountY; i++) {
      for (let j = 0; j < amountX; j++) {
        const y = i * offset;
        const x = j * offset;
        p.stroke(p.map(x, 0, p.width, bottomColor, topColor), 100, 50, 0.075);
        p.beginShape();
        drawLine(x, y);
      }
    }
  }

  function drawLine(x, y) {
    if (isInsideCanvas(x, y)) {
      p.vertex(x, y);
      const n = p.noise(x * m1, y * m1);
      const angle = p.map(n, 0, 1, 0, 2 * p.TWO_PI);
      const newVec = p5.Vector.fromAngle(angle, 10);
      drawLine(x + newVec.x, y + newVec.y);
    } else p.endShape();
  }

  p.mousePressed = () => {
    drawAll();
  };

  function isInsideCanvas(x, y) {
    return 0 <= x && x <= p.width && 0 <= y && y <= p.height;
  }
};
