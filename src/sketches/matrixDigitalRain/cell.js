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
