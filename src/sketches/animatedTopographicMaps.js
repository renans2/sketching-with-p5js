import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const AMOUNT = 150;
  const NOISE_MULTIPLIER = 0.015;
  const SPEED = 0.0035;
  const GAP = 0.0075;
  let offset;
  let radius;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.noStroke();
    offset = p.width / AMOUNT;
    radius = offset / 2;
  };

  p.draw = () => {
    p.background(0);

    for (let i = 0; i < AMOUNT; i++) {
      for (let j = 0; j < AMOUNT; j++) {
        const noisee = p.noise(
          i * NOISE_MULTIPLIER,
          j * NOISE_MULTIPLIER,
          p.frameCount * SPEED,
        );

        const n = noisee % 0.05;

        if (n < GAP) {
          const hue = p.map(noisee, 0, 1, -100, 460);
          p.fill(hue, 100, 50);

          const x = i * offset + offset / 2;
          const y = j * offset + offset / 2;
          p.circle(x, y, radius * 2);
        }
      }
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };
};
