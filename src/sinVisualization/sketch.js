const n = 100;
let angleMultiplier = 0.035;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);

  stroke(255);
  strokeWeight(5);
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(0, 0, 0, 0.25);
  translate(width / 2, height / 2);
  rotate(-PI / 4);

  for (let i = 0; i < n; i++) {
    push();
    const angle = map(i, 0, n, TWO_PI * 1.5, 0);
    rotate(sin(angle + frameCount * angleMultiplier));
    const side = map(i, 0, n, 10, width);
    stroke((map(i, 0, n, 0, 360) + frameCount * 2) % 360, 100, 50, 0.1);
    rect(0, 0, side, side);
    pop();
  }
}
