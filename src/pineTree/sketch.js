const depth = 4;
const startingLength = 80;
const lengthDecay = 0.9;
const angleDecay = 0.92;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(width / 2, height);
  scale(1, -1);
  stroke(0, 255, 0);

  drawPineTree(0, startingLength, PI / 2.5, 25);
}

function drawPineTree(d, l, a, it) {
  if (d < depth) {
    let nextLen = l;
    let currAng = a;
    let mainTrunc = l;

    for (let i = 0; i < it; i++) {
      if (d === depth - 1) {
        strokeWeight(2);
        stroke(0, 255, 0, 50);
      } else {
        strokeWeight(1);
        stroke(166, 58, 0);
      }
      line(0, 0, 0, mainTrunc);
      translate(0, mainTrunc);

      push();
      rotate(a);
      drawPineTree(d + 1, mainTrunc / 3, a, it - i);
      pop();

      push();
      rotate(-a);
      drawPineTree(d + 1, mainTrunc / 3, a, it - i);
      pop();

      // nextLen *= lengthDecay;
      a *= angleDecay;
      mainTrunc *= 0.9;
    }
  }
}
