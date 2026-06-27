const offset = 5;
let amountX, amountY;
const minMultiplier = 0.0045;
const maxMultiplier = 0.005;
let bottomColor, topColor;
const colorGap = 100;
let m1;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  colorMode(HSL);
  cursor(HAND);
  strokeWeight(1);
  noFill();
  amountX = width / offset;
  amountY = height / offset;
  noLoop();
  drawAll();
}

function drawAll() {
  background(0);
  noiseSeed(random(1000000));
  m1 = random(minMultiplier, maxMultiplier);
  bottomColor = random(360 - colorGap);
  topColor = random(bottomColor + colorGap, 360);

  for (let i = 0; i < amountY; i++) {
    for (let j = 0; j < amountX; j++) {
      const y = i * offset;
      const x = j * offset;
      stroke(map(x, 0, width, bottomColor, topColor), 100, 50, 0.075);
      beginShape();
      drawLine(x, y);
    }
  }
}

function drawLine(x, y) {
  if (isInsideCanvas(x, y)) {
    vertex(x, y);
    const n = noise(x * m1, y * m1);
    const angle = map(n, 0, 1, 0, 2 * TWO_PI);
    const newVec = p5.Vector.fromAngle(angle, 10);
    drawLine(x + newVec.x, y + newVec.y);
  } else endShape();
}

// function mousePressed() {
//   if (mouseButton === LEFT) drawAll();
// }

function isInsideCanvas(x, y) {
  return 0 <= x && x <= width && 0 <= y && y <= height;
}

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}
