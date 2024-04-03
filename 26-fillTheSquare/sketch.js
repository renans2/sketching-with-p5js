let angle = 0;
let speed = 0;

let xR = 300;
let yR = 300;

let varInc = 0;

function setup(){
    createCanvas(900, 900);
    angleMode(DEGREES);
    colorMode(HSL);
    noStroke();
    background(0);
}

function mousePressed(){
    background(0);
}

function draw(){
    //background(0, 25);
    translate(width/2, height/2);
    
    drawww();
}

function drawww(){
    speed = map(mouseX, 0, width, 1, 100);
    angle += speed % 360;
    varInc += 2 % 360;

    let x = cos(angle + 2* varInc) * xR;
    let y = cos(angle + varInc) * yR;
    let color = map(x, -xR, xR, 1, 360);
    fill(color, 100, 50, 1);
    circle(x, y, 10);
}
