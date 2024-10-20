let vectors = [];

let xMultiplier = 400;
let yMultiplier = 100;

let yMultTemp = 100;

let angle = 0;
let speed = 40;

let rotateAngle = 0
let rotateSpeed = 0;

let colorVar = 0;
let colorChangeSpeed = 0.71;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    noFill();
    stroke(255);
    strokeWeight(2);
    background(0);
    vector = createVector(cos(angle) * xMultiplier,
                          sin(angle) * yMultiplier);

    vectors.push(vector);
}
function mousePressed(){

    background(0);
}
function draw(){
    frameRate(144);
    translate(width/2, height/2);
    yMultTemp = map(mouseY, 0, height, yMultiplier, xMultiplier);
    rotateSpeed = map(mouseX, width/2, 0, 0, 3);

    angle = (angle + speed) % 360;
    rotateAngle += rotateSpeed;
    colorVar = (colorVar + colorChangeSpeed) % 360;
    drawLine();
}

function drawLine(){
    stroke(colorVar, 100, 50, 1);
    rotate(rotateAngle);
    vector = createVector(cos(angle) * xMultiplier,
                          sin(angle) * yMultTemp);
    if(vectors.length === 4)
        vectors.splice(0, 1);
    vectors.push(vector);

    beginShape();
    for (let i = 0; i < vectors.length; i++) {
        curveVertex(vectors[i].x, vectors[i].y);
    }
    endShape();
}
