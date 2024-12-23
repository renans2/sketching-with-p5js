const branchProb = 25;
let maxAngle;
const minLength = 10;
const maxLength = 50;
const depth = 20;

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    cursor(HAND);
    stroke(255);
    strokeWeight(1);
    maxAngle = PI/8;

    background(0);
    push();
    translate(width/2, height);
    rotate(-PI/2);
    drawLightning(depth);
    pop();
    noLoop();
}

function drawLightning(d){
    if(d > 0){
        const len = random(minLength, maxLength);
        stroke(map(d, 0, depth, 360, 0),100,50,1);
        line(0,0,len,0);
        translate(len, 0);

        const num = random(100);
        if(num <= branchProb){
            const childAngle = random(-maxAngle, maxAngle);
            push();
            rotate(childAngle);
            drawLightning(d - 1);
            pop();
        }

        const angle = random(-maxAngle, maxAngle);
        rotate(angle);
        drawLightning(d - 1);
    }
}

function mousePressed(){
    background(0);
    push();
    translate(width/2, height);
    rotate(-PI/2);
    drawLightning(depth);
    pop();
}
