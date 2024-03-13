let amount = 40;
let diameter = 40;
let startingX = 0;
let offset;
let angle = 0;
let startingAngle = 270;
let multiplier;
let speed = 0.4;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    multiplier = width / 2;
}

function draw(){
    background(0);
    calculateOffset();
    generateCircles();
    angle = (angle + speed) % 360;
}

function calculateOffset(){
    offset = height / amount;
}

function generateCircles(){
    for (let i = 0; i < amount; i++) {
        let currentAngle = startingAngle + angle * (i+1);
        let x = (sin(currentAngle) + 1) * multiplier;
        let y = offset * i + offset / 2;
        let colorVar = map(x, 0, width, 0, 360);
        fill(colorVar, 100, 50, 1);
        circle(x, y, diameter);
    }
}
