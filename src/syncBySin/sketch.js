const amount = 50;
let diameter = 100;
let offset;
let angle = 0;
const startingAngle = 270;
const speed = 0.05;
let multiplier;

function setup(){
    noStroke();
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    colorMode(HSL);
    multiplier = width / 2;
    offset = height / amount;
    diameter = offset * 2;
}

function draw(){
    background(0,0,0,1);
    generateCircles();
    angle = (angle + speed) % 360;
}

function generateCircles(){
    for (let i = 0; i < amount; i++) {
        const currentAngle = startingAngle + angle * (i+1);
        const x = (sin(currentAngle) + 1) * multiplier;
        const y = offset * i + offset / 2;
        const color = map(x, 0, width, 100, 300);
        fill(color, 100, 50, 1);
        circle(x, y, diameter);
    }
}
