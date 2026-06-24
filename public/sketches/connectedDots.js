let n, angleOffset, speed;
const circleDiameter = 10;
let angle = 0;
let angleIncrementer;

function setup() {
  createCanvas(700, 700);
  stroke(0);
}

function draw() {
  background(255, 75);
  translate(width / 2, height / 2);
  rotate(-PI / 2);

  n = Math.floor(map(mouseX, 0, width, 1, 15)) * 3;
  angleOffset = TWO_PI / n;

  angleIncrementer = map(mouseY, 0, height, 0.0001, 0.01);

  for (let i = 0; i < n; i++) {
    const x = cos(i * angleOffset * angle) * 0.9 * (width / 2);
    const y = sin(i * angleOffset * angle) * 0.9 * (width / 2);

    for (let j = i; j < n; j++) {
      const otherX = cos(j * angleOffset * angle) * 0.9 * (width / 2);
      const otherY = sin(j * angleOffset * angle) * 0.9 * (width / 2);
      line(x, y, otherX, otherY);
    }

    circle(x, y, circleDiameter);
  }

  angle += angleIncrementer;
}
