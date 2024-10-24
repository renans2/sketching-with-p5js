let amount = 0;
let maxDiameter = 50
let diameter;
let strkWeightOuterCicle = 5;
let strkWeightlines = 2;
let multiplier;
let offset;
let angleIncrementer = 0;
let speed = 2;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(255);
    angleMode(DEGREES);
    background(0);
    multiplier = 0.9 * windowHeight/2;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    translate(width / 2, height / 2);
    
    calcNewAmountAndDiameter();
    calcOffsetIncAngle();
    drawLines();
    drawOuterCircle();
    drawCircles();
    drawSingleCircle();
}

function drawCircles(){
    for (let i = 0; i < amount; i++) {
        let x = sin(i * offset + angleIncrementer) * multiplier;
        push();
        rotate(i * offset);
        circle(x, 0, diameter);
        pop();
    }
}

function calcNewAmountAndDiameter(){
    let newAmount = floor(map(mouseX, 0, width, 3, 20));
    if(newAmount % 2 != 0){
        amount = newAmount;
        diameter = maxDiameter - amount;
    } 
}

function calcOffsetIncAngle(){
    angleIncrementer = (angleIncrementer + speed) % 360;
    offset = 360 / amount;
}

function drawSingleCircle(){
    push();
    fill(255, 0, 0);
    let x = cos(-angleIncrementer + 90) * multiplier;
    let y = sin(-angleIncrementer + 90) * multiplier;
    circle(x, y, diameter);
    pop();
}

function drawLines(){
    push();
    stroke(255);
    strokeWeight(strkWeightlines);
    for (let i = 0; i < amount; i++) {
        push();
        rotate(i * offset);
        line(-multiplier, 0, multiplier, 0);
        pop();
    }
    pop();
}

function drawOuterCircle(){
    push();
    stroke(255);
    strokeWeight(strkWeightOuterCicle);
    noFill();
    circle(0, 0, multiplier * 2);
    pop();
}
