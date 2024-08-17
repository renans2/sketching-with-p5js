let vectors = [];
let angle = 0
let radiusAngle = 0;
const angleIncrementer = 50;
const radiusAngleIncrementer = 43.5;
const minRadius = 50;
const maxRadius = 340;
const diameter = 5;

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    background(0);
    noFill();
    stroke(255,0,0);
}

function draw() {
    frameRate(144);
    background(0);
    translate(width/2, height/2);

    angle = (angle + map(mouseX, 0, width, 1, 100)) % 360;
    radiusAngle = (radiusAngle + map(mouseY, 0, height, 1, 100)) % 360;

    const radiusX = map(sin(radiusAngle), -1, 1, minRadius, maxRadius);
    const radiusY = map(sin(radiusAngle), -1, 1, minRadius, maxRadius);
    const x = cos(angle) * radiusX;
    const y = sin(angle) * radiusY;

    vectors.push(createVector(x, y));

    beginShape();
    for(let i = 0; i < vectors.length; i++){
        const x = vectors[i].x;
        const y = vectors[i].y;
        curveVertex(x, y);
        // circle(x, y, diameter);
    }
    endShape();
}

function mousePressed(){
    background(0);
    vectors = [];
}