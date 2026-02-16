import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const spiralRGB = (p: p5) => {
  const HUE_INCREMENTER = 5;
  const N = 30;
  const SPEED = 0.005;
  let hue = 0;
  let radius: number;
  let offset: number;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    //noStroke();
    p.background(0);
    offset = p.width / 2 / N;
    radius = offset;
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.1);

    p.translate(p.width / 2, p.height / 2);

    hue = (hue + HUE_INCREMENTER) % 360;
    p.fill(hue, 100, 50, 1);
    drawCircles();
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function drawCircles() {
    for (let i = 1; i <= N; i++) {
      const x = p.cos(i * p.frameCount * SPEED) * (i * offset);
      const y = p.sin(i * p.frameCount * SPEED) * (i * offset);
      p.circle(x, -y, radius * 2);
    }
  }
};
