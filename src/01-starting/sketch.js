let color = 0;
const colorIncrementer = 2;
const circleDiameter = 50;

function setup() {
    createCanvas(900, 900);
    noStroke();
    colorMode(HSL);
    background(0);
}

function draw(){
    fill(color, 100, 50, 1);
    color = (color + colorIncrementer) % 360;

    circle(mouseX, mouseY, circleDiameter);
}

function mousePressed(){
    background(0);
}
