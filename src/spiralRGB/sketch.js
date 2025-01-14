let angle = 0;
let diameter;
const amount = 15;
const speed = 0.25;
let offset;
let color = 0;
const colorIncrementer = 5;

function setup(){
    createCanvas(windowHeight, windowHeight);
    colorMode(HSL);
    angleMode(DEGREES);
    //noStroke();
    background(0);
    offset = (width/2) / amount;
    diameter = offset;
}

function draw(){
    background(0,0,0,0.1)

    translate(width/2, height/2);

    color = (color + colorIncrementer) % 360;
    fill(color, 100, 50, 1);
    drawCircles();
    angle = (angle + speed) % 360;
}

function drawCircles(){
    for (let i = 1; i <= amount; i++) {
        const x = cos(i * angle) * (i * offset);
        const y = sin(i * angle) * (i * offset);
        circle(x, -y, diameter);
    }
}
