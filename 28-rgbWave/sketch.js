let speed = 5;
let colorIncrementer = 0;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    strokeWeight(1);
}

function draw(){
    background(0);
    drawLines();

    speed = map(mouseX, 0, width, 0, 100);

    colorIncrementer = (colorIncrementer + speed) % 360;
}

function drawLines(){
    for (let i = 0; i < width; i++) {
        let colorVar = (map(i, 0, width, 0, 360) + colorIncrementer) % 360;
        stroke(colorVar, 100 , 50, 1);
        line(i, 0, i, height);
    }
}
