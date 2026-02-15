import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const manualClock = (p: p5) => {
  const now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  console.log(hours);

  let angleHours: number;
  let angleMinutes: number;
  let angleSeconds: number;

  let outCircDiameter;
  let hourIconDiameter = 25;
  let smallIconsDiameter = 8;
  let iconDistance: number;
  let secPointerMult: number;
  let minPointerMult: number;
  let hourPointerMult: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.background(0, 0, 0, 1);
    p.fill(255);

    outCircDiameter = p.height;
    iconDistance = outCircDiameter / 2 - hourIconDiameter;
    secPointerMult = outCircDiameter / 2.5;
    minPointerMult = outCircDiameter / 3;
    hourPointerMult = outCircDiameter / 5;

    angleHours = p.map(hours, 0, 12, 0, p.TWO_PI);
    angleMinutes = p.map(minutes, 0, 60, 0, p.TWO_PI);
    angleSeconds = p.map(seconds, 0, 60, 0, p.TWO_PI);
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.frameRate(1);

    drawHoursIcons();
    drawHoursSmallIcons();
    increment();
    drawPointers();
    drawMiddleScrew();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function increment() {
    seconds = (seconds + 1) % 60;

    if (seconds === 0) {
      minutes = (minutes + 1) % 60;
      if (minutes === 0) {
        hours = (hours + 1) % 12;
      }
    }

    angleSeconds = p.map(seconds, 0, 60, 0, p.TWO_PI) - p.PI / 2;
    angleMinutes = p.map(minutes, 0, 60, 0, p.TWO_PI) - p.PI / 2;
    angleHours = p.map(hours, 0, 12, 0, p.TWO_PI) - p.PI / 2;
  }

  function drawHoursIcons() {
    p.strokeWeight(2);
    for (let i = 0; i < 12; i++) {
      p.stroke(255);
      p.circle(
        p.cos(i * (p.TWO_PI / 12)) * iconDistance,
        p.sin(i * (p.TWO_PI / 12)) * iconDistance,
        hourIconDiameter,
      );
    }
  }

  function drawHoursSmallIcons() {
    p.strokeWeight(2);
    for (let i = 0; i < 60; i++) {
      p.stroke(255);
      p.circle(
        p.cos(i * (p.TWO_PI / 60)) * iconDistance,
        p.sin(i * (p.TWO_PI / 60)) * iconDistance,
        smallIconsDiameter,
      );
    }
  }

  function drawPointers() {
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
  }

  function drawMiddleScrew() {
    p.strokeWeight(2);
    p.fill(255);
    p.circle(0, 0, 10);
  }
};
