import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const rotateAndAlign = (p: p5) => {
  let minMultiplier = 50;
  let maxMultiplier;
  let minAmount = 3;
  let maxAmount = 150;
  let maxDiameter = 20;
  let minDiameter = 1;
  let amount = 15;
  let globalAngle = 0;
  let globalSpeed;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    maxMultiplier = p.height / 2;
    p.colorMode(p.HSL);
    p.angleMode(p.DEGREES);
    p.stroke(255);
    p.strokeWeight(3);
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.2);
    p.translate(p.width / 2, p.height / 2);

    amount = p.floor(p.map(p.mouseX, 0, p.width, minAmount, maxAmount));
    diameter = p.map(amount, minAmount, maxAmount, maxDiameter, minDiameter);
    globalSpeed = p.map(p.mouseY, p.height, 0, 0, 0.3);
    globalAngle = (globalAngle - globalSpeed) % 360;
    drawCirclesAndLines();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawCirclesAndLines() {
    p.push();
    p.rotate(90);
    p.beginShape();
    for (let i = 0; i < amount; i++) {
      let multiplier = p.map(i, 0, amount, minMultiplier, maxMultiplier);
      let angle = globalAngle * (amount - i);
      let x = p.cos(angle) * multiplier;
      let y = p.sin(angle) * multiplier;
      let color = p.map(i, 0, amount, 0, 360);
      p.fill(color, 100, 50, 1);
      p.stroke(color, 100, 50, 1);
      p.circle(x, y, diameter);
      p.line(0, 0, x, y);
      p.noFill();
      p.vertex(x, y);
    }
    p.stroke(0, 0, 100, 0.5);
    p.endShape();
    p.pop();
  }
};
