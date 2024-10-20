let amount = 10;
let angleIncrementer = 0;
let offset;
let xMultiplier = 400;
let yMultiplier = 100;
let maxDiameter = 50;
let minDiameter = 20;
let speed = 1.5;

let sets;
let minSets = 1;
let maxSets = 10;
let setsOffset;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    angleMode(DEGREES);
    noStroke();
}

function draw(){
    background(0, 0, 0, 1);
    translate(width / 2, height / 2);
    speed = map(mouseY, height, 0, 0.5, 10);
    sets  = floor(map(mouseX, 0, width, minSets, maxSets));

    angleIncrementer = (angleIncrementer + speed) % 360;
    offset = 360 / amount;
    setsOffset = 360 / sets;

    drawCircles();
}

function drawCircles(){
    for (let i = 0; i < sets; i++) {
        push();
        rotate(i * setsOffset);
        drawSet();
        pop();
    }
}

function drawSet(){
    for (let i = 0; i < amount; i++) {
        let x = cos(i * offset + angleIncrementer) * xMultiplier;
        let y = sin(i * offset + angleIncrementer) * yMultiplier;
        let diameter = map(y, -yMultiplier, yMultiplier, minDiameter, maxDiameter); 
        let alpha    = map(diameter, minDiameter, maxDiameter, 0, 1);
        fill(0, 0, 100, alpha);
        circle(x, y, diameter);
    }
}
