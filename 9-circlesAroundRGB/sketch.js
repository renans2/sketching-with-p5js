let distance = 1;
let angle = 0;
let amount = 5;
let diameter = 50;
let angleOffset;
let x, y;
let colorOffset = 0;
let colorVar = 0;
let color = 0;

function setup(){
    createCanvas(900, 900);
    noStroke();
    angleMode(DEGREES);
    colorMode(HSL);
}

function draw(){
    translate(width/2, height/2);
    
    if(!mouseIsPressed)
        background(0);

    calcOffsets();
    calcDistAndAngle();
    drawCircles();
}

function drawCircles(){
    for (let i = 0; i < amount; i++) {
        x = cos(angleOffset * i + angle);
        y = sin(angleOffset * i + angle);
        //color = ((colorOffset * i) + colorVar) % 360;
        color = colorOffset * i;
        fill(color, 100, 50, 1);
        circle(x * distance, y * distance, diameter);
    }
    //colorVar = (colorVar + 5) % 360; 
}

function calcOffsets(){
    angleOffset = 360 / amount;
    colorOffset = angleOffset;
}

function calcDistAndAngle(){
    distance = map(mouseX, 0, width, -700, 700);
    angle    = map(mouseY, 0, width, 1, 360);
}

function mouseReleased(){
    amount++;
}

function keyPressed(){
    amount = 5;
}
