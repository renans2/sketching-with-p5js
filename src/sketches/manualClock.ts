import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const manualClock = (p: p5) => {
  const now = new Date();
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  console.log(hours);

  let angleHours;
  let angleMinutes;
  let angleSeconds;

  let outCircDiameter;
  let hourIconDiameter = 25;
  let smallIconsDiameter = 8;
  let iconDistance;
  let offsetBigIcons = 360 / 12;
  let offsetSmallIcons = 360 / 60;
  let secPointerMult;
  let minPointerMult;
  let hourPointerMult;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.background(0, 0, 0, 1);
    angleMode(DEGREES);
    p.fill(255);

    outCircDiameter = p.height;
    iconDistance = outCircDiameter / 2 - hourIconDiameter;
    secPointerMult = outCircDiameter / 2.5;
    minPointerMult = outCircDiameter / 3;
    hourPointerMult = outCircDiameter / 5;

    angleHours = p.map(hours, 0, 12, 0, 360);
    angleMinutes = p.map(minutes, 0, 60, 0, 360);
    angleSeconds = p.map(seconds, 0, 60, 0, 360);
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

    angleSeconds = p.map(seconds, 0, 60, 0, 360) - 90;
    angleMinutes = p.map(minutes, 0, 60, 0, 360) - 90;
    angleHours = p.map(hours, 0, 12, 0, 360) - 90;
  }

  function drawHoursIcons() {
    p.strokeWeight();
    for (let i = 0; i < 12; i++) {
      p.stroke(255);
      p.circle(
        p.cos(i * offsetBigIcons) * iconDistance,
        p.sin(i * offsetBigIcons) * iconDistance,
        hourIconDiameter,
      );
    }
  }

  function drawHoursSmallIcons() {
    p.strokeWeight();
    for (let i = 0; i < 60; i++) {
      p.stroke(255);
      p.circle(
        p.cos(i * offsetSmallIcons) * iconDistance,
        p.sin(i * offsetSmallIcons) * iconDistance,
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
    p.strokeWeight();
    p.fill(255);
    p.circle(0, 0, 10);
  }
};
