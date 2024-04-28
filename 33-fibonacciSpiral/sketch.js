let fibonacciSequence = [1, 1];
let amount = 500;
let zoom;

function setup(){
    createCanvas(900, 900);
    stroke(255);
    fillFibonacciSequence();
    background(0);
}

function draw(){
    background(0);
    translate(width/2, height/2);

    zoom = map(mouseX, 0, width, 0.001, 50);
    drawSpiral();
}

function drawSpiral(){
    beginShape();
    for (let i = 0; i < fibonacciSequence.length; i++) {
        let fib = fibonacciSequence[i];
        let angle = map(i, 0, fibonacciSequence.length, 0, 360);
        let x = cos(angle) * fib * zoom;
        let y = sin(angle) * fib * zoom;
        vertex(x, y);
    }
    endShape();
}

function fillFibonacciSequence(){
    for (let i = 2; i < amount; i++){
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
    }
}
