let x, y, angle = 1;
let diameter = 50;
let colorVar = 0;
let amount = 10;
let speed = 0.5;
let offset;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    angleMode(DEGREES);
    noStroke();
    background(0);
}

function draw(){
    if(mouseIsPressed){
        updateColor(0.2)
    } else {
        background(0);
        updateColor(1);
    }

    translate(width/2, height/2);
    offset = (width/2) / amount;
    drawCircles();
    angle = (angle + speed) % 360;
}

function mouseReleased(){
    amount++;
}

function updateColor(alpha){
    fill(colorVar, 100, 50, alpha);
    colorVar = (colorVar + 1) % 360
}

function drawCircles(){
    for (let i = 1; i <= amount; i++) {
        x = cos(angle*i);
        y = sin(angle*i);
        circle(x*i*offset, -y*i*offset, diameter);
    }
}
