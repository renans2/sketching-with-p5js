const FONT_SIZE = 20;
const SIDE_LENGTH = FONT_SIZE;
let N_HORIZONTAL;
let N_VERTICAL;
const MIN_REVEALER_LENGTH = 3;
const MAX_REVEALER_LENGTH = 13;
const MIN_REVEALER_SPEED = 1;
const MAX_REVEALER_SPEED = 15;
let cells = [];
let revealers = [];

function setup() {
  N_HORIZONTAL = windowWidth / SIDE_LENGTH;
  N_VERTICAL = windowHeight / SIDE_LENGTH;
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  textAlign(LEFT, TOP);
  textFont("Noto Serif JP Regular", FONT_SIZE);
  textLeading(20);

  for (let i = 0; i < N_HORIZONTAL; i++) {
    revealers[i] = [];
    revealers[i][0] = createRevealer();
    cells[i] = [];
    for (let j = 0; j < N_VERTICAL; j++) {
      cells[i][j] = new Cell(i * SIDE_LENGTH, j * SIDE_LENGTH);
    }
  }
}

function draw() {
  fill(0, 0, 0, 20);
  rect(0, 0, width, height);

  for (let i = 0; i < N_HORIZONTAL; i++) {
    let r1 = revealers[i][0];
    if (r1 != null) {
      for (let pos of r1.getRevealed()) {
        cells[i][pos].draw(70);
      }

      if (r1.getRevealed().length > 0) {
        cells[i][r1.getRevealed()[r1.getRevealed().length - 1]].draw(255);
      }

      r1.update();
      if (r1.isOut()) {
        revealers[i][0] = null;
      } else if (r1.hitBottom() && revealers[i][1] == null) {
        revealers[i][1] = createRevealer();
      }
    }

    let r2 = revealers[i][1];
    if (r2 != null) {
      for (let pos of r2.getRevealed()) {
        cells[i][pos].draw(70);
      }

      if (r2.getRevealed().length > 0) {
        cells[i][r2.getRevealed()[r2.getRevealed().length - 1]].draw(255);
      }

      r2.update();
      if (r2.isOut()) {
        revealers[i][1] = null;
      } else if (r2.hitBottom() && revealers[i][0] == null) {
        revealers[i][0] = createRevealer();
      }
    }
  }
}

function createRevealer() {
  let length = floor(random(MIN_REVEALER_LENGTH, MAX_REVEALER_LENGTH));
  let speed = floor(random(MIN_REVEALER_SPEED, MAX_REVEALER_SPEED));
  return new Revealer(length, speed);
}

$(window).on("resize", function () {
  location.reload();
});

class Revealer {
  constructor(length, speed) {
    this.length = length;
    this.delay = this.delayFromSpeed(speed);
    this.pos = -this.length;
    this.timer = 0;
    this.previousTime = 0;
  }

  delayFromSpeed(speed) {
    return map(speed, MIN_REVEALER_SPEED, MAX_REVEALER_SPEED, 200, 20);
  }

  hitBottom() {
    return this.pos + this.length > N_VERTICAL - 1;
  }

  isOut() {
    return this.pos > N_VERTICAL - 1;
  }

  update() {
    let currentTime = millis();
    this.timer += currentTime - this.previousTime;
    this.previousTime = currentTime;

    if (this.timer > this.delay) {
      this.timer = 0;
      this.move();
    }
  }

  move() {
    this.pos++;
  }

  getRevealed() {
    let revealed = [];

    if (this.pos >= 0) {
      let size;

      if (this.pos + this.length < N_VERTICAL) {
        size = this.length;
      } else {
        size = N_VERTICAL - this.pos;
      }

      for (let i = 0; i < size; i++) {
        revealed.push(this.pos + i);
      }
    } else {
      let size = this.pos + this.length;
      for (let i = 0; i < size; i++) {
        revealed.push(i);
      }
    }

    return revealed;
  }
}

class Cell {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.symbol = "";
    this.changeDelay = 0;
    this.previousTime = 0;
    this.timer = 0;
    this.setNewSymbol();
    this.setNewChangeDelay();
  }

  draw(extraColor) {
    let currentTime = millis();
    this.timer += currentTime - this.previousTime;
    this.previousTime = currentTime;

    if (this.timer > this.changeDelay) {
      this.setNewSymbol();
      this.setNewChangeDelay();
      this.timer = 0;
    }

    fill(extraColor, 255, extraColor);
    text(this.symbol, this.pos.x, this.pos.y);
  }

  setNewSymbol() {
    this.symbol = this.getNewSymbol();
  }

  getNewSymbol() {
    const CHARACTERS =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let i = floor(random(CHARACTERS.length));
    return CHARACTERS.charAt(i);
  }

  setNewChangeDelay() {
    const MIN_DELAY = 800;
    const MAX_DELAY = 3000;
    this.changeDelay = floor(random(MIN_DELAY, MAX_DELAY));
  }
}
