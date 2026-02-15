let multiplier;
let diameter = 50;
let amount = 6;
let offset;
let angleIncrementer;
let colorVar = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSL);
  fill(0, 100, 50, 1);
  offset = 360 / amount;
  background(0);
  noStroke();
}

function draw() {
  background(0, 0, 0, 0.075);
  multiplier = map(mouseY, height, 0, 1, 500);
  angleIncrementer = map(mouseX, 0, width, 0, 360);
  translate(width / 2, height / 2);
  generateCircles(0, 0, multiplier, diameter, frameCount * 0.75, 3);
  colorVar = (colorVar + 1) % 360;
  fill(colorVar, 100, 50, 0.5);
}

function generateCircles(
  centerX,
  centerY,
  multiplier,
  diameter,
  angleIncrementer,
  depth,
) {
  if (depth > 0) {
    for (let i = 0; i < amount; i++) {
      let angle = i * offset + angleIncrementer;
      let x = centerX + cos(angle) * multiplier;
      let y = centerY + sin(angle) * multiplier;
      circle(x, y, diameter);
      generateCircles(
        x,
        y,
        multiplier * 0.5,
        diameter * 0.5,
        -angleIncrementer,
        depth - 1,
      );
    }
  }
}
