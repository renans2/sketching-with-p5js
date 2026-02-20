import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  const diameter = 20;
  let amount = 100;
  let offset = 0;
  let startingY = 0;
  let angle = 0;
  let index = 0;
  let color = 0;
  let colorVar = 0;
  let amplitude = 0;
  let frequency = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noStroke();

    p.angleMode(p.DEGREES);
    startingY = p.height / 2;
  };

  p.draw = () => {
    p.background(0);
    calculateOffset();
    amplitude = p.map(p.mouseY, p.height, 0, 0, 500);
    frequency = p.map(p.mouseX, 0, p.width, 100, 5000);
    generateCircles(amplitude, frequency);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.mouseReleased = () => {
    amount += 100;
  };

  function generateCircles(amplitude: number, frequency: number) {
    index = (index + 3) % 360;
    colorVar = (colorVar + 3) % 360;

    for (let i = 0; i < amount; i++) {
      color = (offset * i + colorVar) % 360;
      angle = p.map(i, 0, amount, 0, frequency);
      p.fill(color, 100, 50, 1);
      p.circle(
        offset * i + offset / 2,
        startingY + p.sin(angle + index) * amplitude,
        diameter,
      );
    }
  }

  function calculateOffset() {
    offset = p.width / amount;
  }
};
