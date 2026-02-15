import p5 from "p5";
import { getCanvasSize } from "../utils/get-canvas-size";

export const bouncingBalls = (p: p5) => {
  const diameter = 100;
  const leftBorder = diameter / 2;
  const topBorder = diameter / 2;
  let rightBorder, bottomBorder;
  const minSpeed = 7;
  const maxSpeed = 14;
  const nBalls = 20;
  const bouncingBalls = [];

  p.setup = () => {
    const canvasSize = getCanvasSize();
    p.createCanvas(canvasSize, canvasSize);
    p.colorMode(p.HSL);
    p.strokeWeight(2);
    p.stroke(255);
    cursor(HAND);

    rightBorder = p.width - diameter / 2;
    bottomBorder = p.height - diameter / 2;

    // create bouncing balls
    for (let i = 0; i < nBalls; i++) {
      bouncingBalls.push(new BouncingBall());
    }
  };

  p.draw = () => {
    p.background(0, 0, 0, mouseIsPressed ? 0 : 1);
    p.stroke(0, 0, 100, mouseIsPressed ? 0 : 1);

    // draw bouncing balls
    for (const ball of bouncingBalls) {
      ball.move();
      ball.draw();
    }
  };

  p.windowResized = () => {
    const newCanvasSize = getCanvasSize();
    p.resizeCanvas(newCanvasSize, newCanvasSize);
  };

  class BouncingBall {
    constructor() {
      this.color = p.random(360);
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.xSpeed = p.random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
      this.ySpeed = p.random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
    }

    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if (this.hitBorderX()) {
        this.reverseXSpeed();
        this.setNewColor();
      }

      if (this.hitBorderY()) {
        this.reverseYSpeed();
        this.setNewColor();
      }
    }

    draw() {
      p.fill(this.color, 100, 50, mouseIsPressed ? 0.1 : 1);
      p.circle(this.x, this.y, diameter);
    }

    hitBorderX() {
      if (rightBorder < this.x || this.x < leftBorder) {
        this.x =
          diameter / 2 +
          (this.x < p.width / 2 ? 0 : rightBorder - diameter / 2);
        return true;
      }

      return false;
    }

    hitBorderY() {
      if (bottomBorder < this.y || this.y < topBorder) {
        this.y =
          diameter / 2 +
          (this.y < p.height / 2 ? 0 : bottomBorder - diameter / 2);
        return true;
      }

      return false;
    }

    reverseXSpeed() {
      this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * p.random(minSpeed, maxSpeed);
    }

    reverseYSpeed() {
      this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * p.random(minSpeed, maxSpeed);
    }

    setNewColor() {
      this.color = p.random(360);
    }
  }
};
