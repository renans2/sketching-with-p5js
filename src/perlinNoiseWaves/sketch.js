let offset, amountX, amountY, m1, rectHeight;
const m2 = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0.05);
  updateVariables();
  drawRectangles();
}

function updateVariables() {
  m1 = map(mouseX, 0, width, 0, 0.0025);
  offset = map(mouseY, height, 0, 20, 125);
  amountX = width / offset;
  amountY = height / offset;
  rectHeight = offset / 4;
}

function drawRectangles() {
  for (let i = 0; i < amountY; i++) {
    for (let j = 0; j < amountX; j++) {
      const x = j * offset;
      const y = i * offset + rectHeight;
      const angle = map(
        noise(x * m1 + frameCount * m2, y * m1 + frameCount * m2),
        0,
        1,
        0,
        2 * TWO_PI,
      );
      push();
      translate(x, y);
      rotate(angle);
      fill(map(angle, 0, 1.5 * TWO_PI, 0, 360), 100, 50, 1);
      rect(0, 0, offset, rectHeight);
      pop();
    }
  }
}
