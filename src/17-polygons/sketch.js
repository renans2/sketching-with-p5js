let amount;
let minAmount = 3;
let maxAmount = 10;
let offset = 0;
let multiplier = 300;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    stroke(255);
    strokeWeight(5);
    angleMode(DEGREES);
    background(0);
    noFill();
}

function draw(){
    background(0,0,0,0.2);
    translate(width/2, height/2);

    amount = floor(map(mouseX, -20, width, minAmount, maxAmount));
    offset = 360 / amount;
    multiplier = map(mouseY, height, 0, 0, width/2);
    
    drawPolygon();
}

function drawPolygon(){
    beginShape();
    for (let i = 0; i < amount; i++) {
        let x = cos(i * offset - 90) * multiplier;
        let y = sin(i * offset - 90) * multiplier;
        vertex(x, y);
    }
    endShape(CLOSE);
}
