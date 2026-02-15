import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const flowField = (p: p5) => {
  const offset = 8;
  let amountX: number, amountY: number;
  const minMultiplier = 0.00045;
  const maxMultiplier = 0.002;
  let bottomColor, topColor;
  const colorGap = 100;
  let m1: number;

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

  function drawLine(x: number, y: number) {
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

  function isInsideCanvas(x: number, y: number) {
    return 0 <= x && x <= p.width && 0 <= y && y <= p.height;
  }
};
