let m1 = 0.0025;
let gaps = 15;
let gapInterval = 0.007;
let gapOffset = 1 / gaps;

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    colorMode(HSL);
    noiseDetail(3, 1);

    drawMap();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function drawMap() {
    frameRate(1);
    background(0);
    loadPixels();
    // updateVariables();

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const p = (j + i * width) * 4;
            const nois = noise(j * m1, i * m1);

            for (let k = 0; k < gaps; k++) {
                if((k * gapOffset) + gapOffset/2 < nois && nois <= (k * gapOffset) + gapOffset/2 + gapInterval){
                    const c = color(map(k, 0, gaps, 0, 270) - 95, 100, 50, 1);
                    pixels[p] = red(c);
                    pixels[p+1] = green(c);
                    pixels[p+2] = blue(c);
                    pixels[p+3] = 255;
                    break;
                }
            }
        }
    }
    updatePixels();
}

function updateVariables(){
    gaps = map(mouseX, 0, width, 0, 40);
    gapInterval = map(mouseY, 0, height, 0.0015, 0.05);
    gapOffset = 1 / gaps;
}

function mouseClicked(){
    noiseSeed(random(100));
    drawMap();
}
