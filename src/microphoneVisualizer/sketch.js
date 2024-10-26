const bands = 512;
let mic, fft, offset;


function setup() {
    createCanvas(windowWidth, windowHeight);

    stroke(255, 0, 0);
    fft = new p5.FFT(0.75, bands);
    offset = width/bands;

    noLoop();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    const spectrum = fft.analyze();

    for (let i = 0; i < bands; i++) {
        const val = map(spectrum[i], 0, 255, 0, height);
        line(i * offset, height/2 - val/2, i * offset, height/2 + val/2);
    }
}

function startMic(){
    mic = new p5.AudioIn();
    mic.connect(fft);
    mic.start();
    loop();
}