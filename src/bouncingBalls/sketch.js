const diameter = 100;
const leftBorder = diameter / 2;
const topBorder = diameter / 2;
let rightBorder, bottomBorder;
const minSpeed = 7;
const maxSpeed = 14;
const nBalls = 20;
const bouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  strokeWeight(2);
  stroke(255);
  cursor(HAND);

  rightBorder = width - diameter / 2;
  bottomBorder = height - diameter / 2;

  // create bouncing balls
  for (let i = 0; i < nBalls; i++) {
    bouncingBalls.push(new BouncingBall());
  }
}

function draw() {
  background(0, 0, 0, mouseIsPressed ? 0 : 1);
  stroke(0, 0, 100, mouseIsPressed ? 0 : 1);

  // draw bouncing balls
  for (const ball of bouncingBalls) {
    ball.move();
    ball.draw();
  }
}

class BouncingBall {
  constructor() {
    this.color = random(360);
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
    this.ySpeed = random(-1, 1) < 0 ? -maxSpeed : maxSpeed;
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
    fill(this.color, 100, 50, mouseIsPressed ? 0.1 : 1);
    circle(this.x, this.y, diameter);
  }

  hitBorderX() {
    if (rightBorder < this.x || this.x < leftBorder) {
      this.x =
        diameter / 2 + (this.x < width / 2 ? 0 : rightBorder - diameter / 2);
      return true;
    }

    return false;
  }

  hitBorderY() {
    if (bottomBorder < this.y || this.y < topBorder) {
      this.y =
        diameter / 2 + (this.y < height / 2 ? 0 : bottomBorder - diameter / 2);
      return true;
    }

    return false;
  }

  reverseXSpeed() {
    this.xSpeed = (this.xSpeed < 0 ? 1 : -1) * random(minSpeed, maxSpeed);
  }

  reverseYSpeed() {
    this.ySpeed = (this.ySpeed < 0 ? 1 : -1) * random(minSpeed, maxSpeed);
  }

  setNewColor() {
    this.color = random(360);
  }
}
