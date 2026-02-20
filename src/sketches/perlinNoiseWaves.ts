import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let n = 50;
  let offset: number;
  let noiseMultiplier = 0.002;
  let speed = 0.005;
  let widthMultiplier = 0.5;
  let heightMultiplier = 2;
  let opacity = 1;
  let backgroundOpacity = 1;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.rectMode(p.CENTER);
    offset = p.width / n;
  };

  p.draw = () => {
    p.background(0, backgroundOpacity * 255);
    drawRectangles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  function drawRectangles() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = j * offset + offset / 2;
        const y = i * offset + offset / 2;
        const angle = p.map(
          p.noise(
            x * noiseMultiplier,
            y * noiseMultiplier,
            p.frameCount * speed,
          ),
          0,
          1,
          0,
          2 * p.TWO_PI,
        );
        p.push();
        p.translate(x, y);
        p.rotate(angle);
        const color = p.map(angle, 0, p.TWO_PI, -100, 255);
        p.fill(color, opacity * 255);
        p.rect(0, 0, offset * widthMultiplier, offset * heightMultiplier);
        p.pop();
      }
    }
  }
};
