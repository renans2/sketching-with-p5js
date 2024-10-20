let branches = 50;
let offset;
let xoff = 200;
let ySpeed = 10;
let xVariation = 50;
let colorVar = 0;

let x = 0;
let y = 50;
let oldVector;
let currentVector;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    strokeWeight(2);
    noFill();
    background(0);
    currentVector = createVector(x, y);
}

function draw(){
    translate(width/2, height/2);

    offset = 360 / branches;

    drawBlade();
    colorVar = (colorVar + 7) % 360;
}

function drawBlade(){
    x = map(noise(xoff), 0, 1, -xVariation, xVariation);
    xVariation *= 1.01;
    xoff += 0.07;
    y += ySpeed;

    oldVector     = createVector(currentVector.x, currentVector.y);
    currentVector = createVector(x, y);

    for (let i = 0; i < branches; i++) {
        push();

        //stroke(colorVar, 100, 50, 1)
        stroke(i * offset, 100, 50, 1)
        rotate(i * offset);
        line(oldVector.x, oldVector.y, currentVector.x, currentVector.y);
        
        pop();
    }
}
