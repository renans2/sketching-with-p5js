let amount = 50;
let hs = [];

let doSort = true;
let isShuffled = false;
let barrier = 1;
let index = barrier;

let offset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  strokeWeight(2);
  background(0);
  fillArray();
  offset = width / amount;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // frameRate(map(mouseX, 0, width, 1, 60));
  translate(0, height);
  background(0);

  if (doSort) {
    if (!isShuffled) {
      shuffle(hs, true);
      isShuffled = true;
    } else {
      doCicle();
    }
  } else {
    drawRectangles();
  }
}

function doCicle() {
  drawRectangles();

  if (index > 0 && hs[index - 1] > hs[index]) {
    let temp = hs[index - 1];
    hs[index - 1] = hs[index];
    hs[index] = temp;
    index--;
  } else {
    if (barrier + 1 < amount) {
      barrier++;
      index = barrier;
    } else {
      doSort = false;
      resetVariables();
      console.log("done");
    }
  }
}

function resetVariables() {
  barrier = 1;
  index = barrier;
  isShuffled = false;
}

function mousePressed() {
  doSort = true;
}

function fillArray() {
  hs = [];
  for (let i = 0; i < amount; i++) {
    let rectHeight = (i + 1) * (height / amount);
    hs.push(rectHeight);
  }
}

function drawRectangles() {
  for (let i = 0; i < amount; i++) {
    if (i == index && doSort) fill(0, 255, 0);
    else if (i == barrier && doSort) fill(255, 0, 0);
    else fill(255, 255, 255);

    let x = i * offset + offset / 2;
    let rectHeight = hs[i];
    let y = -rectHeight / 2;

    rect(x, y, width / amount, rectHeight);
  }
}
