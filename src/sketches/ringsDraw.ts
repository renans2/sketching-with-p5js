import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const ringsDraw = (p: p5) => {
  const DIVISIONS = 50;
  const RADIUS = 5;
  let angleOffset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.noFill();
    p.colorMode(p.HSL);
    p.background(0);
    angleOffset = p.TWO_PI / DIVISIONS;
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    if (p.mouseIsPressed) {
      for (let i = 0; i < DIVISIONS; i++) {
        p.rotate(angleOffset);
        const hue = (p.map(i, 0, DIVISIONS, 0, 360) + p.frameCount * 5) % 360;
        p.stroke(hue, 100, 50, 0.2);
        p.circle(p.mouseX - p.width / 2, p.mouseY - p.height / 2, RADIUS * 2);
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.doubleClicked = () => {
    p.background(0);
  };
};
