import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const cowEffect = (p: p5) => {
  let offset = 50;
  let m1 = 0.005;
  let m2 = 0.035;
  let amountX, amountY;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.pixelDensity(1);

    p.noStroke();
    noiseDetail(2, 0.9);
  };

  p.draw = () => {
    updateVariables();
    p.background(0);
    p.frameRate(24);
    p.noStroke();

    for (let i = 0; i < amountY; i++) {
      for (let j = 0; j < amountX; j++) {
        const n = p.noise(j * offset * m1, i * offset * m1, p.frameCount * m2);
        const colorVal = n < 0.5 ? 0 : 255;

        p.fill(colorVal);
        p.rect(j * offset, i * offset, offset + 1);
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  function updateVariables() {
    offset = p.map(p.mouseX, 0, p.width, 15, 50);
    amountX = p.width / offset;
    amountY = p.height / offset;
  }
};
