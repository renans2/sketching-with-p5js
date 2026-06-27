const WIDTH = 600;
const AMOUNT = 70;
const OFFSET = WIDTH/AMOUNT;
let NOISE_MULTIPLIER = 0.0055;
let SHIFT_RADIUS = 70;
const SPEED = 0.02;
const CIRCLE_DIAMETER = 4;

function setup() {
  const canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas-container");
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  // console.log(frameRate());
  
  NOISE_MULTIPLIER = map(mouseX, 0, width, 0.001, 0.02);
  SHIFT_RADIUS = map(mouseY, 0, height, 30, 100);
  
  for (let i = 0; i < AMOUNT; i++) {
    for (let j = 0; j < AMOUNT; j++) {
      const x = i * OFFSET + OFFSET/2;
      const y = j * OFFSET + OFFSET/2;
      const noisee = noise(x * NOISE_MULTIPLIER - frameCount * SPEED, y * NOISE_MULTIPLIER, frameCount * SPEED);
      const angle = map(noisee, 0, 1, 0, TWO_PI);
      const xOffset = cos(angle) * SHIFT_RADIUS;
      const yOffset = sin(angle) * SHIFT_RADIUS;
      circle(x + xOffset, y + yOffset, CIRCLE_DIAMETER);
    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}
