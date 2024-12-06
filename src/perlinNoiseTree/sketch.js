const DEPTH = 7;
const LENGTH = 10;
let m1 = 0.0099;
const offset = 5;
let i = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(5)

    translate(width/2, height/2);
    scale(1, -1);
    drawBranch(LENGTH, DEPTH)
    noLoop();
}

function drawBranch(length, depth){
    if(depth > 0){
        if(length > 0){
            strokeWeight(map(depth, DEPTH, 1, 10, 3));
            point(0, 0);
            const n = noise(i * m1);
            const angle = map(n, 0, 1, 0, TWO_PI);
            const vec = p5.Vector.fromAngle(angle, offset);
            translate(vec.x, vec.y);
            i++;
            drawBranch(length - 1, depth);
        } else {
            // i += random(10);
            push();
            rotate(random(0, PI/4))
            drawBranch(LENGTH, depth - 1);
            pop();

            // i += random(10);
            push();
            rotate(-random(0, PI/4))
            drawBranch(LENGTH, depth - 1);
            pop();
        }
    } else {
        i = 0;
    }
}
