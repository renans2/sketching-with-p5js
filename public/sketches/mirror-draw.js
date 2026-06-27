let x = 0;
let y = 0;
const N = 20;

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  background(0);
};

function draw() {
  const angleOffset = TWO_PI / N;
  strokeWeight(2);
  translate(width / 2, height / 2);

  if (mouseIsPressed) {
    const newX = mouseX - width / 2;
    const newY = mouseY - height / 2;

    if (!x && !y) {
      x = newX;
      y = newY;
    }

    rotate(-angleOffset);
    for (
      let i = 0;
      i < N;
      i++
    ) {
      push();
      rotate(i * angleOffset);
      if (i % 2 === 0) scale(1, -1);

      stroke(255);

      if (x && y) {
        line(x, y, newX, newY);
      }
      pop();
    }
    x = newX;
    y = newY;
  } else if (x && y) {
    x = null;
    y = null;
  }
};

function doubleClicked() {
  background(0);
};

function keyPressed() {
  if (key === "s") {
    saveCanvas(new Date().toLocaleString(), "png");
  }
}
