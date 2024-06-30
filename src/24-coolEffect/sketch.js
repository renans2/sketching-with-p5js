let vector;

let xMultiplier = 400;
let yMultiplier = 100;

let angle = 0;
let speed = 0;

let rotateAngle = 0
let rotateSpeed = 0;

let colorVar = 0;
let colorChangeSpeed = 0.71;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    stroke(255);
    strokeWeight(2);
    background(0);

    vector = createVector(cos(angle) * xMultiplier,
    sin(angle) * yMultiplier);    
}

function mousePressed(){
    background(0);
}

function draw(){
    speed       = map(mouseX, 0, width/2, 0, 25);
    rotateSpeed = map(mouseY, width/2, 0, 0, 10);
    
    //background(0);
    translate(width/2, height/2);

    angle = (angle + speed) % 360;
    rotateAngle += rotateSpeed;
    colorVar = (colorVar + colorChangeSpeed) % 360;
    drawLine();
}

function drawLine(){
    stroke(colorVar, 100, 50, 1);
    push();
        rotate(rotateAngle);
        
        let xFrom = vector.x;
        let yFrom = vector.y;

        vector = createVector(cos(angle) * xMultiplier,
                              sin(angle) * yMultiplier);
        
        
        let xTo = vector.x;
        let yTo = vector.y;
        line(xFrom, yFrom, xTo, yTo);
    pop();
}
