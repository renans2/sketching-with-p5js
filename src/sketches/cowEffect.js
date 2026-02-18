import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const N = 75;
  const m1 = 0.005;
  const m2 = 0.035;
  let offset;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    offset = p.width / N;
    p.pixelDensity(1);
    p.noStroke();
    p.noiseDetail(2, 0.9);
  };

  p.draw = () => {
    p.background(0);
    p.frameRate(24);
    p.noStroke();

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
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
};
