import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  let n = 7;
  let colorSpeed = 3;
  let backgroundOpacity = 0.1;
  let strokeWeight = 3;

  const MIN_SPEED = 4;
  const MAX_SPEED = 6;
  const bouncingLines: BouncingLine[] = [];

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.background(0);
    p.colorMode(p.HSL);
    p.strokeWeight(strokeWeight);
    p.noFill();

    for (let i = 0; i < n; i++) {
      bouncingLines.push(new BouncingLine());
    }
  };

  p.draw = () => {
    p.background(0, 0, 0, backgroundOpacity);

    const hue = p.frameCount * colorSpeed;
    p.stroke(hue, 100, 50, 0.5);

    p.beginShape();
    for (const line of bouncingLines) {
      line.move();
      p.vertex(line.x, line.y);
    }
    p.endShape(p.CLOSE);
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  class BouncingLine {
    x;
    y;
    xSpeed;
    ySpeed;

    constructor() {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.xSpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
      this.ySpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
    }

    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if (this.hitBorderX()) this.reverseXSpeed();
      if (this.hitBorderY()) this.reverseYSpeed();
    }

    hitBorderX() {
      if (p.width < this.x || this.x < 0) {
        this.x = this.x < p.width / 2 ? 0 : p.width;
        return true;
      }

      return false;
    }

    hitBorderY() {
      if (p.height < this.y || this.y < 0) {
        this.y = this.y < p.height / 2 ? 0 : p.height;
        return true;
      }

      return false;
    }

    reverseXSpeed() {
      this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
    }

    reverseYSpeed() {
      this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
    }
  }
};
