const rotations = 75;
let angleOffset;
const speed = 0.01;
let x;
let y;
let color;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSL);
    strokeWeight(1);

    angleOffset = TWO_PI/rotations;
    // noiseDetail(8, 0.25);
    translate(width/2, height/2);
    x = (noise(frameCount * speed) * 2 - 1) * height * 0.75;
    y = (noise(frameCount * speed + 1000) * 2 - 1) * height * 0.75;
    color = random(360);
}

function draw() {
    translate(width/2, height/2);
    stroke(color, 100, 50, 0.1);
    const newX = (noise(frameCount * speed) * 2 - 1) * height * 0.75;
    const newY = (noise(frameCount * speed + 1000) * 2 - 1) * height * 0.75;

    for(let i = 0; i < rotations; i++){
        rotate(angleOffset);
        line(x, y, newX, newY);
    }

    x = newX;
    y = newY;
    color = (color + 0.1) % 360;
}