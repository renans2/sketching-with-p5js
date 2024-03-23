let diameter = 10;
let maxRandomX = 15;
let ySpeed = 10;
let minRandomY = 5;
let maxRandomY = ySpeed;
let points = [];
let ramificationsByClick = 2;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    stroke(265, 100, 69, 1);
    strokeWeight(1);
    background(0);
    points.push(createVector(0, 0));
}

function draw(){
    translate(width/2, 0);

    drawLines();
}

function drawLines(){
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let x;

        if(i == 0)
            x = point.x + random(-maxRandomX, maxRandomX);
        else if(i % 2 != 0)
            x = point.x + random(-maxRandomX, maxRandomX / 2);
        else 
            x = point.x + random(-maxRandomX / 2, maxRandomX);

        let y;

        if(i == 0)
            y = point.y + ySpeed;
        else
            y = point.y + random(minRandomY, maxRandomY);
        
        line(point.x, point.y, x, y);
        points[i] = createVector(x, y);
        if(y > height){
            reset();
            background(0,0,0,0.9);
        }
    }
}

function reset(){
    points = [];
    points.push(createVector(0, 0));
}

function mousePressed(){
    for (let i = 0; i < ramificationsByClick; i++) {
        createRamification();
    }
}

function createRamification(){
    let lastPoint = points[0];
    points.push(lastPoint);
}
