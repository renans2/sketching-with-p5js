let minMultiplier = 50;
let maxMultiplier = 425;
let minAmount = 3;
let maxAmount = 150;
let maxDiameter = 20;
let minDiameter = 1;
let amount = 15;
let globalAngle = 0;
let globalSpeed = 0.35;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(3);
    background(0);
}

function draw(){
    background(0, 0, 0, 0.2);
    translate(width/2, height/2);

    amount = floor(map(mouseX, 0, width, minAmount, maxAmount));
    diameter = map(amount, minAmount, maxAmount, maxDiameter, minDiameter);
    globalSpeed = map(mouseY, height, 0, 0, 0.5);
    globalAngle = (globalAngle - globalSpeed) % 360;
    drawCirclesAndLines();
}

function drawCirclesAndLines(){
    push();
    rotate(90);
    beginShape();
    for (let i = 0; i < amount; i++) {
        let multiplier = map(i, 0, amount, minMultiplier, maxMultiplier);
        let angle = globalAngle * (amount - i);
        let x = cos(angle) * multiplier;
        let y = sin(angle) * multiplier;
        fill(255);
        circle(x, y, diameter);
        noFill();
        vertex(x, y);
    }
    endShape();
    pop();
}
