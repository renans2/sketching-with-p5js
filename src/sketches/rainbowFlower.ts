const nCircles = 100;
const circlesDiameter = 30;
const speed = 0.001;
let minRadius;
let maxRadius;
let angleOffset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);

  angleOffset = TWO_PI / nCircles;
  minRadius = height * 0.1;
  maxRadius = height * 0.45;
}

function draw() {
  translate(width / 2, height / 2);
  background(0, 0.15);

  for (let i = 0; i < nCircles; i++) {
    rotate(angleOffset);
    const localRadius = map(
      sin((i + 1) * frameCount * -speed),
      -1,
      1,
      minRadius,
      maxRadius,
    );
    fill(map(i, 0, nCircles, 0, 360), 100, 50, 0.5);
    circle(0, localRadius, circlesDiameter);
  }
}
