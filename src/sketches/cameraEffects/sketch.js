let webcam;
let saved = [];
let ii = 0;
let timer = 0;
const wait = 650;
let ready = false;
let speed = 4;
let aspectRatio;

function setup() {
  webcam = createCapture("video", { flipped: true });
  createCanvas(windowWidth, windowHeight);
  webcam.hide();
  pixelDensity(1);
  stroke(255, 0, 0);
  strokeWeight(5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (!ready) {
    timer += deltaTime;
    if (timer > wait) ready = true;
  } else {
    background(0);
    frameRate(30);
    aspectRatio = webcam.width / webcam.height;
    image(
      webcam,
      (width - height * aspectRatio) / 2,
      0,
      height * aspectRatio,
      height,
    );

    loadPixels();
    for (let i = 0; i < speed; i++) {
      for (let j = 0; j < width; j++) {
        const x = (ii * width + j) * 4;
        saved.push(pixels[x]);
        saved.push(pixels[x + 1]);
        saved.push(pixels[x + 2]);
        saved.push(pixels[x + 3]);
      }
      ii++;
    }

    let index = 0;
    for (let i = 0; i < ii; i++) {
      for (let j = 0; j < width; j++) {
        const x = (i * width + j) * 4;
        pixels[x] = saved[index];
        index++;
        pixels[x + 1] = saved[index];
        index++;
        pixels[x + 2] = saved[index];
        index++;
        pixels[x + 3] = saved[index];
        index++;
      }
    }
    updatePixels();

    line(0, ii, width, ii);
  }
}

function keyPressed() {
  if (key === "r") {
    ii = 0;
    saved = [];
  }
}
