let webcam;
const offset = 10;
const pixelsPerBlock = offset * offset;
let nHor, nVer;
const greyLevels = 5;

let constraints = {
    video: {
        mandatory: {
            minWidth: 1920,
            minHeight: 1080
        }
    },
    audio: false
};

function setup() {
    webcam = createCapture(constraints, {flipped: true});
    createCanvas(windowWidth, windowHeight);
    webcam.hide();
    pixelDensity(1);
    noStroke();

    nHor = width / offset;
    nVer = height / offset;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    frameRate(30);
    image(webcam, 0, 0, width, height);
    loadPixels();

    for (let i = 0; i < nVer; i++)
        for (let j = 0; j < nHor; j++)
            processBlock(j, i);
}

function processBlock(x, y) {
    let totalRed = 0;
    let totalGreen = 0;
    let totalBlue = 0;
    const xFixed = x * offset;
    const yFixed = y * offset;

    for (let i = yFixed; i < yFixed + offset; i++) {
        for (let j = xFixed; j < xFixed + offset; j++) {
            const index = (width * i + j) * 4;
            totalRed += pixels[index];
            totalGreen += pixels[index + 1];
            totalBlue += pixels[index + 2];
        }
    }

    const brightness = (totalRed + totalGreen + totalBlue) / 3 / pixelsPerBlock;
    const greyIndex = Math.floor(map(brightness, 0, 255, 0, greyLevels));

    fill(lerp(0, 255, greyIndex/(greyLevels - 1)));
    rect(x * offset, y * offset, offset, offset);
}
