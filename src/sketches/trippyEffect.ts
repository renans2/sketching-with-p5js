import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const syncBySin = (p: p5) => {
  const speed = 0.025;
  const nLines = 250;
  let yOffset;
  const nRotations = 10;
  let rotationAngle;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.strokeWeight(10);
    p.noFill();
    p.colorMode(p.HSL);

    rotationAngle = p.TWO_PI / nRotations;
    yOffset = p.height / nLines;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-p.frameCount * 0.01);
    p.background(0, 50);

    for (let i = 0; i < nRotations; i++) {
      p.rotate(rotationAngle);
      for (let i = 0; i < nLines; i++) {
        const y = i * yOffset;
        const angle = p.map(i, 0, nLines, 0, p.TWO_PI);
        const ySup = p.map(
          p.sin(angle - p.frameCount * speed),
          -1,
          1,
          0,
          p.height,
        );
        p.stroke(p.map(angle, 0, p.TWO_PI, 0, 360), 100, 50, 0.1);
        p.bezier(0, y, 0, ySup, p.width - p.mouseX * 2, ySup, p.width / 2, y);
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
