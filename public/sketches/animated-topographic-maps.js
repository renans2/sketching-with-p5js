const WIDTH = 600;
const AMOUNT = 100;
const OFFSET = WIDTH/AMOUNT;
const NOISE_MULTIPLIER = 0.015;
const SPEED = 0.0035;
const CIRCLE_DIAMETER = OFFSET;
const GAP = 0.0075;

function setup() {
  const canvas = createCanvas(WIDTH, WIDTH);
  canvas.parent("canvas-container");
  background(0);
  colorMode(HSL);
  noStroke();
};

function draw() {
  background(0);

  for (let i = 0; i < AMOUNT; i++) {
    for (let j = 0; j < AMOUNT; j++) {
      const noisee = noise(
        i * NOISE_MULTIPLIER,
        j * NOISE_MULTIPLIER,
        frameCount * SPEED,
      );

      const n = noisee % 0.035;

      if (n < GAP) {
        const hue = map(noisee, 0, 1, -100, 460);
        fill(hue, 100, 50);

        const x = i * OFFSET + OFFSET / 2;
        const y = j * OFFSET + OFFSET / 2;
        circle(x, y, CIRCLE_DIAMETER);
      }
    }
  }
};

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}
