import { getCanvasSize } from "../utils/canvas-parent";
import type p5 from "p5";

export const sketch = (p: p5) => {
  // interactive
  const radius = 20;
  const n = 50;

  const MIN_SPEED = 7;
  const MAX_SPEED = 14;
  const circles: BouncingCircle[] = [];

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    // p.strokeWeight(2);
    // p.stroke(255);
    p.noStroke();
    p.cursor(p.HAND);

    // create bouncing circles
    for (let i = 0; i < n; i++) {
      circles.push(new BouncingCircle());
    }
  };

  p.draw = () => {
    p.background(0);

    // draw bouncing circles
    for (const c of circles) {
      c.move();
      c.draw();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
    p.background(0);
  };

  class BouncingCircle {
    hue;
    x;
    y;
    xSpeed;
    ySpeed;

    constructor() {
      this.hue = p.random(360);
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.xSpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
      this.ySpeed = p.random(-1, 1) < 0 ? -MAX_SPEED : MAX_SPEED;
    }

    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if (this.hitBorderX()) {
        this.x = this.x < p.width / 2 ? radius : p.width - radius;
        this.reverseXSpeed();
        this.setNewColor();
      }

      if (this.hitBorderY()) {
        this.y = this.y < p.height / 2 ? radius : p.height - radius;
        this.reverseYSpeed();
        this.setNewColor();
      }
    }

    draw() {
      p.fill(this.hue, 100, 50);
      p.circle(this.x, this.y, radius * 2);
    }

    hitBorderX() {
      return p.width - radius < this.x || this.x < radius;
    }

    hitBorderY() {
      return p.height < this.y || this.y < 0;
    }

    reverseXSpeed() {
      this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
    }

    reverseYSpeed() {
      this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * p.random(MIN_SPEED, MAX_SPEED);
    }

    setNewColor() {
      this.hue = p.random(360);
    }
  }
};
