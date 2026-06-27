const N = 200;
const COLOR_SPEED = 1;
const SPEED = 0.05;
const RADIUS = 5;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  background(0);
  colorMode(HSL);
};

function draw() {
  const angleOffset = TWO_PI / N;
  background(0, 0.1);
  translate(width / 2, height / 2);
  const corners = floor(map(mouseX, 0, width, 0, 50));
  const minHeight = map(mouseY, 0, height, width / 2, -width / 2);

  for (let i = 0; i < N; i++) {
    rotate(angleOffset);

    const angle =
      (map(i, 0, N, 0, corners * TWO_PI) +
        frameCount * SPEED) %
      TWO_PI;

    const y = map(sin(angle), -1, 1, minHeight, width / 2);

    const hue =
      (map(angle, 0, TWO_PI, 0, 360) + frameCount * COLOR_SPEED) %
      360;
    stroke(hue, 100, 50, 1);
    noFill();
    circle(0, y, RADIUS * 2);
  }
};

