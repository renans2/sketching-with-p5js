let colorVar = 0
let ratio;

function setup(){
    createCanvas(900, 900);
    noStroke();
    ratio = width / 255;
}

function draw(){
    //colorVar = mouseX / ratio;
    // or
    colorVar = map(mouseX, 0, width, 0, 255);
    background(colorVar);
    fill(255 - colorVar);
    circle(450,450,450);
}
