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
