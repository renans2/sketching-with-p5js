import type { OpticalIllusionCirclesProps } from "../types/sketches-props";
import type { ZustandStore } from "../types/ZustandStore";
import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";
import { getInitialVars } from "../utils/get-initial-vars";
import { subscribeToStore } from "../utils/subscribe";

export const sketch = (
  p: p5,
  store: ZustandStore<OpticalIllusionCirclesProps>,
) => {
  const vars = getInitialVars(
    "optical-illusion-circles",
  ) as OpticalIllusionCirclesProps;
  const unsubscribe = subscribeToStore(vars, store);
  // let amount = 0;
  // let speed = 5;

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
    diameter = maxDiameter - vars.n;
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

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

  p.remove = () => {
    unsubscribe();
  };

  function drawCircles() {
    for (let i = 0; i < vars.n; i++) {
      let x = p.sin(i * offset + angleIncrementer) * multiplier;
      p.push();
      p.rotate(i * offset);
      p.circle(x, 0, diameter);
      p.pop();
    }
  }

  function calcOffsetIncAngle() {
    angleIncrementer = (angleIncrementer + vars.speed) % 360;
    offset = 360 / vars.n;
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
    for (let i = 0; i < vars.n; i++) {
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
