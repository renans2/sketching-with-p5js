import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let amount = 0; // 1 to 30
  let speed = 5; // up to 10

  let maxDiameter = 50;
  let diameter: number;
  let strkWeightOuterCicle = 5;
  let strkWeightlines = 2;
  let multiplier: number;
  let offset: number;
  let angleIncrementer = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.fill(255);
    p.angleMode(p.DEGREES);
    p.background(0);
    multiplier = (0.9 * p.height) / 2;
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    calcNewAmountAndDiameter();
    calcOffsetIncAngle();
    drawLines();
    drawOuterCircle();
    drawCircles();
    drawSingleCircle();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  function drawCircles() {
    for (let i = 0; i < amount; i++) {
      let x = p.sin(i * offset + angleIncrementer) * multiplier;
      p.push();
      p.rotate(i * offset);
      p.circle(x, 0, diameter);
      p.pop();
    }
  }

  function calcNewAmountAndDiameter() {
    let newAmount = p.floor(p.map(p.mouseX, 0, p.width, 1, 30));
    if (newAmount % 2 != 0) {
      amount = newAmount;
      diameter = maxDiameter - amount;
    }
  }

  function calcOffsetIncAngle() {
    angleIncrementer = (angleIncrementer + speed) % 360;
    offset = 360 / amount;
  }

  function drawSingleCircle() {
    p.push();
    p.fill(255, 0, 0);
    let x = p.cos(-angleIncrementer + 90) * multiplier;
    let y = p.sin(-angleIncrementer + 90) * multiplier;
    p.circle(x, y, diameter);
    p.pop();
  }

  function drawLines() {
    p.push();
    p.stroke(255);
    p.strokeWeight(strkWeightlines);
    for (let i = 0; i < amount; i++) {
      p.push();
      p.rotate(i * offset);
      p.line(-multiplier, 0, multiplier, 0);
      p.pop();
    }
    p.pop();
  }

  function drawOuterCircle() {
    p.push();
    p.stroke(255);
    p.strokeWeight(strkWeightOuterCicle);
    p.noFill();
    p.circle(0, 0, multiplier * 2);
    p.pop();
  }
};
