let offset, amountX, amountY, m1, rectHeight;
const m2 = 0.005;
const N = 10
const noiseMultiplier = 0.01;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0, 100);
  drawRectangles();
}

function drawRectangles() {
    const offset = width / N;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = j * offset + offset / 2;
        const y = i * offset + offset / 2;
        const angle = map(
          noise(
            x * noiseMultiplier,
            y * noiseMultiplier,
            frameCount * 0.01,
          ),
          0,
          1,
          0,
          2 * TWO_PI,
        );
        push();
        translate(x, y);
        rotate(angle);
        const color = map(angle, 0, TWO_PI, -100, 255);
        fill(color, 100);
        rect(
          0,
          0,
          offset * 0.5,
          offset * 0.5,
        );
        pop();
      }
    }
  }
