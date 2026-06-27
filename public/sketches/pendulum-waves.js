let globalSpeed = 0;
const N_CIRCLES = 20;
const RADIUS = 7;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");

  noStroke();
  colorMode(HSL);
}

function draw() {
  globalSpeed += 0.002;
  const offset = width / 2 / N_CIRCLES;
  translate(width / 2, height - RADIUS);
  background(0);

  for (let i = 0; i < N_CIRCLES; i++) {
    const myColor = color(
      (map(i, 0, N_CIRCLES, 30, 360) + frameCount * 1) %
        360,
      100,
      50,
      1,
    );
    fill(myColor);
    const radius = offset * (i + 1);

    let a =
      (PI +
        (N_CIRCLES - i * 0.4 + 1) * globalSpeed) %
      TWO_PI;
    let tempAngle;

    if (a > 0 && a < PI) tempAngle = a + TWO_PI - 2 * a;
    else tempAngle = a;

    const x = cos(tempAngle) * radius;
    const y = sin(tempAngle) * radius;
    circle(x, y, offset);
    push();
    noFill();
    stroke(myColor);
    strokeWeight(2);
    circle(0, 0, radius * 2);
    pop();
  }
}
