import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const rainbowFlower = (p: p5) => {
  const nCircles = 100;
  const circlesDiameter = 30;
  const speed = 0.001;
  let minRadius;
  let maxRadius;
  let angleOffset;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noStroke();
    p.colorMode(p.HSL);

    angleOffset = p.TWO_PI / nCircles;
    minRadius = p.height * 0.1;
    maxRadius = p.height * 0.45;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.background(0, 0.15);

    for (let i = 0; i < nCircles; i++) {
      p.rotate(angleOffset);
      const localRadius = p.map(
        p.sin((i + 1) * p.frameCount * -speed),
        -1,
        1,
        minRadius,
        maxRadius,
      );
      p.fill(p.map(i, 0, nCircles, 0, 360), 100, 50, 0.5);
      p.circle(0, localRadius, p.circlesDiameter);
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
