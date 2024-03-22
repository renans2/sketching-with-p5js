let amount;
let minAmount = 3;
let maxAmount = 10;
let coordinates = [];
let offset = 0;
let multiplier = 300;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    stroke(255);
    strokeWeight(5);
    angleMode(DEGREES);
    background(0);
}

function draw(){
    background(0,0,0,0.2);
    translate(width/2, height/2);

    amount = floor(map(mouseX, -20, width, minAmount, maxAmount));
    offset = 360 / amount;
    multiplier = map(mouseY, height, 0, 0, width/2);
    
    updateCoordinates();
    drawLines();
}

function updateCoordinates(){
    coordinates = [];
    for (let i = 0; i < amount; i++) {
        let x = cos(i * offset - 90) * multiplier;
        let y = sin(i * offset - 90) * multiplier;
        coordinates.push(createVector(x, y));
    }
}

function drawLines(){
    for (let i = 0; i < coordinates.length; i++) {
        let xFrom = coordinates[i].x;
        let yFrom = coordinates[i].y;
        let xTo   = coordinates[(i + 1) % coordinates.length].x;
        let yTo   = coordinates[(i + 1) % coordinates.length].y;
        line(xFrom, yFrom, xTo, yTo);
    }
}
