let funcExp = [];
let unitByXPixels = 50;

let x2 = {
    coef: 1,
    exp: 3
};

funcExp.push(x2);

function setup(){
    createCanvas(1500, 900);
    noFill();
    strokeWeight(3);
}

function draw(){
    background(0);
    translate(width / 2, height / 2);
    scale(1, -1);
    
    drawAxis();
    drawFunction();
}

function drawAxis(){
    stroke(255);
    line(0, -height/2, 0, height/2);
    line(-width/2, 0, width/2, 0);
}

function drawFunction(){
    stroke(255, 0, 0);
    beginShape();
    for (let pixel = -width/2; pixel < width/2; pixel++) {
        let expr = funcExp[0];
        let x = pixel;
        let y = expr.coef * pow(x/unitByXPixels, expr.exp);
        y *= unitByXPixels;
        vertex(x, y);
    }
    endShape();
}
