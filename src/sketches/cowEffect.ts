import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  const N = 75;
  const noiseMultiplier = 0.05;
  const speed = 0.035;
  let offset: number;

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
        const n = p.noise(
          j * noiseMultiplier,
          i * noiseMultiplier,
          p.frameCount * speed,
        );
        const colorVal = n < 0.5 ? 0 : 255;

        p.fill(colorVal);
        p.rect(j * offset, i * offset, offset + 1);
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
    offset = p.width / N;
  };
};
