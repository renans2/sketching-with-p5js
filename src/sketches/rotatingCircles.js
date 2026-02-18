import { getCanvasSize } from "../utils/canvas-parent";

export const sketch = (p) => {
  const N_RINGS = 30;
  const N_CIRCLES_PER_RING = 5;
  const CIRCLE_DIAMETER = 15;
  const ROTATION_SPEED = 0.003;
  let way = true;
  let circleOffset;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.noFill();
    p.strokeWeight(2);
    circleOffset = p.TWO_PI / N_CIRCLES_PER_RING;
  };

  p.draw = () => {
    p.background(0, 0.2);
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < N_RINGS; i++) {
      const rotateAngle = p.map(i, 0, N_RINGS, 0, p.TWO_PI);
      p.push();
      p.rotate(
        rotateAngle +
          p.frameCount * (way ? N_RINGS - i + 1 : i + 1) * ROTATION_SPEED,
      );
      p.stroke(
        (p.map(i, 0, N_RINGS, 0, 360) + p.frameCount * 5) % 360,
        100,
        50,
        1,
      );
      const local_diameter = p.map(
        p.sin(p.map(i, 0, N_RINGS, 0, p.TWO_PI) + p.frameCount * 0.02),
        -1,
        1,
        CIRCLE_DIAMETER,
        7 * CIRCLE_DIAMETER,
      );

      for (let j = 0; j < N_CIRCLES_PER_RING; j++) {
        p.push();
        p.rotate(j * circleOffset);
        p.circle(0, (i + 1) * CIRCLE_DIAMETER, local_diameter);
        p.pop();
      }
      p.pop();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  p.mousePressed = () => {
    way = !way;
  };
};
