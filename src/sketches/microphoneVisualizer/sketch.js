const bands = 256;
let mic, fft, offset;
let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSL);
  // stroke(255,0,0);
  fft = new p5.FFT(0.75, bands);
  offset = width / bands;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (started) {
    background(0, 0, 0, 0.5);
    translate(width / 2, height * 0.66);

    const spectrum = fft.analyze();

    const angleOffset = PI / bands;
    // rotate(PI/2);
    for (let i = 0; i < bands; i++) {
      const val = map(spectrum[i], 0, 255, 0, height * 0.66);
      fill(map(spectrum[i], 0, 255, 90, 450), 100, 50, 1);
      // rect(i * offset, height / 2 - val / 2, offset, val);

      push();
      rotate(-angleOffset * i);
      rect(0, -100 - val, offset, val);
      pop();

      push();
      rotate(angleOffset * i);
      rect(0, -100 - val, offset, val);
      pop();
    }
  }
}

function startAudio() {
  userStartAudio().then(() => {
    mic = new p5.AudioIn();
    mic.connect(fft);
    mic.start();
    started = true;
  });
}

function mousePressed() {
  if (!started) {
    document.getElementById("click").remove();
    startAudio();
  }
}
