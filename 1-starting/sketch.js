let colorVar = 0;

function setup() {
    createCanvas(900, 900);
    noStroke();
    colorMode(HSL);
    background(0);
}

function draw(){
    setColorAndIncrement();
    drawCircle();
}

function mousePressed(){
    background(0);
}

function setColorAndIncrement(){
    fill(colorVar, 100, 50, 1);
    colorVar = (colorVar + 2) % 360;
}

function drawCircle(){
    circle(mouseX, mouseY, 60);
}
