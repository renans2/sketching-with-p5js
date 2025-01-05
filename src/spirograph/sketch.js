let leadAngle = 0;
let angle = 0;
let leadAngleInc, angleInc, r1, r2, prevX, prevY, color;
const colorInc = 0.05;

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    colorMode(HSL);
    background(0);

    leadAngleInc = random(0.001, 0.1);
    angleInc = random(0.001, 0.1);

    color = random(360);

    r1 = random(height/10, height/4);
    r2 = height/2 - r1;
}

function draw(){
    translate(width/2, height/2);

    for (let i = 0; i < 15; i++) {
        const leadX = cos(-leadAngle) * r1;
        const leadY = sin(-leadAngle) * r1;

        const x = leadX + cos(angle) * r2;
        const y = leadY + sin(angle) * r2;

        stroke(color, 100, 50, 1);
        line(prevX, prevY, x, y);

        prevX = x;
        prevY = y;

        leadAngle += leadAngleInc;
        angle += angleInc;
        color = (color + colorInc) % 360;
    }
}
