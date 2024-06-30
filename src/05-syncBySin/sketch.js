const amount = 50;
let diameter = 10;
let offset;
let angle = 0;
const startingAngle = 270;
const speed = 0.1;
let multiplier;

function setup(){
    noStroke();
    createCanvas(250, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    multiplier = width / 2;
    offset = height / amount;
    diameter = offset;
}

function draw(){
    background(0,0,0,0.1);
    generateCircles();
    angle = (angle + speed) % 360;
}

function generateCircles(){
    for (let i = 0; i < amount; i++) {
        const currentAngle = startingAngle + angle * (i+1);
        const x = (sin(currentAngle) + 1) * multiplier;
        const y = offset * i + offset / 2;
        const color = map(x, 0, width, 100, 200);
        fill(color, 100, 50, 1);
        circle(x, y, diameter);
    }
}
