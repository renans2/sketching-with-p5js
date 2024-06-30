let dimensions = 10;
let diameter = 0;
let offset = 0;
let angle = 0;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    angleMode(DEGREES);
    noFill();
    stroke(255);
    strokeWeight(3);
    offset = width/dimensions;
}

function draw(){
    translate(width/2, height/2);
    background(0);

    angle = map(mouseY, height, 0, 0, 360);
    diameter = map(mouseX, 0, width, 0, 2000);
    drawBorders()
}

function drawBorders(){
    push();
    rotate(angle);
    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            let x = ((i * offset) + offset/2) - width/2;
            let y = ((j * offset) + offset/2) - height/2;
            let color = map(i, 0, dimensions, 0, 360);
            stroke(color, 100, 50, 1)
            circle(x, y, diameter);
        }
    }
    pop();
}
