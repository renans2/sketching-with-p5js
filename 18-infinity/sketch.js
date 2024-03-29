let angle = -90;
let multiplierX = 300;
let multiplierY = 100;
let diameter = 50;
let colorVar = 0;
let speed = 5;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    noStroke();
    background(0);
}

function draw(){
    background(0, 0, 0, 0.05);
    translate(width/2, height/2);

    angle = (angle + speed) % 360;
    drawInfinite();
}

function drawInfinite(){
    let x = cos(angle) * multiplierX;
    let y = sin(map(angle, 0, 360, 0, 360 * 2)) * multiplierY;
    
    colorVar = (colorVar + 6) % 360;
    fill(colorVar, 100, 50, 1);
    circle(x, y, diameter);
}
