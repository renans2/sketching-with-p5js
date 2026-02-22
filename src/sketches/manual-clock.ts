import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  let hours: number;
  let minutes: number;
  let seconds: number;
  let angleHours: number;
  let angleMinutes: number;
  let angleSeconds: number;

  let outCircRadius: number;
  let hourIconRadius: number;
  let smallIconsRadius: number;
  let iconDistance: number;
  let secPointerMult: number;
  let minPointerMult: number;
  let hourPointerMult: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.frameRate(1);
    p.colorMode(p.HSL);

    setMeasures();
    drawSettings();
    getValues();
    drawClock();
  };

  p.draw = () => {
    drawSettings();
    getValues();
    drawClock();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
    setMeasures();
  };

  function drawSettings() {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
  }

  function drawClock() {
    p.noStroke();
    p.fill(255);

    for (let i = 0; i < 12; i++) {
      const hourAngleOffset = p.TWO_PI / 12;
      p.circle(
        p.cos(i * hourAngleOffset) * iconDistance,
        p.sin(i * hourAngleOffset) * iconDistance,
        hourIconRadius * 2,
      );
    }

    for (let i = 0; i < 60; i++) {
      const minAndSecAngleOffset = p.TWO_PI / 60;
      p.circle(
        p.cos(i * minAndSecAngleOffset) * iconDistance,
        p.sin(i * minAndSecAngleOffset) * iconDistance,
        smallIconsRadius * 2,
      );
    }

    p.strokeWeight(20);

    p.stroke(0, 100, 50, 1);
    p.line(
      0,
      0,
      p.cos(angleSeconds) * secPointerMult,
      p.sin(angleSeconds) * secPointerMult,
    );

    p.stroke(120, 100, 50, 1);
    p.line(
      0,
      0,
      p.cos(angleMinutes) * minPointerMult,
      p.sin(angleMinutes) * minPointerMult,
    );

    p.stroke(240, 100, 50, 1);
    p.line(
      0,
      0,
      p.cos(angleHours) * hourPointerMult,
      p.sin(angleHours) * hourPointerMult,
    );

    p.fill(255);
    p.noStroke();
    p.circle(0, 0, smallIconsRadius);
  }

  function setMeasures() {
    outCircRadius = p.height / 2;
    hourIconRadius = p.height * 0.015;
    smallIconsRadius = hourIconRadius * 0.5;
    iconDistance = outCircRadius - 2 * hourIconRadius;
    secPointerMult = outCircRadius * 0.85;
    minPointerMult = outCircRadius * 0.7;
    hourPointerMult = outCircRadius * 0.5;
  }

  function getValues() {
    const now = new Date();
    hours = now.getHours() % 12;
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    angleHours = (p.TWO_PI / 12) * hours - p.PI / 2;
    angleMinutes = (p.TWO_PI / 60) * minutes - p.PI / 2;
    angleSeconds = (p.TWO_PI / 60) * seconds - p.PI / 2;
  }
};
