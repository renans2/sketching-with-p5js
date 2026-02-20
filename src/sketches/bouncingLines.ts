import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  const MIN_SPEED = 4;
  const MAX_SPEED = 6;
  const N_LINES = 5;
  const LINE_COLOR_INCREMENTER = 1;
  let bouncingLines: BouncingLine[] = [];
  let lineColor = 0;

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.strokeWeight(3);
    p.noFill();

    for (let i = 0; i < N_LINES; i++) {
      bouncingLines.push(new BouncingLine());
    }
  };

  p.draw = () => {
    p.background(0, 0, 0, 0.05);

    // draw bouncing p.lines
    p.beginShape();
    for (const line of bouncingLines) {
      line.move();
      p.vertex(line.x, line.y);
    }
    p.stroke(lineColor, 100, 50, 0.5);
    p.endShape(p.CLOSE);

    lineColor = (lineColor + LINE_COLOR_INCREMENTER) % 360;
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
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
