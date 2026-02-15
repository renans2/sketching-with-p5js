let offset = 50;
let m1 = 0.005;
let m2 = 0.035;
let amountX, amountY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  noStroke();
  noiseDetail(2, 0.9);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  updateVariables();
  background(0);
  frameRate(24);
  noStroke();

  for (let i = 0; i < amountY; i++) {
    for (let j = 0; j < amountX; j++) {
      const n = noise(j * offset * m1, i * offset * m1, frameCount * m2);
      const colorVal = n < 0.5 ? 0 : 255;

      fill(colorVal);
      rect(j * offset, i * offset, offset + 1);
    }
  }
}

function updateVariables() {
  offset = map(mouseX, 0, width, 15, 50);
  amountX = width / offset;
  amountY = height / offset;
}
