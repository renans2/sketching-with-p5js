// Code developed by Renan Silva
// GitHub: renans2

let diameter = 40;
let progressBarHeight = 20;
let x, y;
let score = 0;
let timer = 0;
let over = false;
let timeLimit = 10;

function setup(){
    createCanvas(900, 900);
    colorMode(HSL);
    textAlign(CENTER);
    noStroke();
    setNewLocation();
}

function draw(){
    background(0);
    
    if(!over){
        printProgressBar();
        drawCircle();
        timer += deltaTime;
        if(timer > timeLimit * 1000){
            over = true;
            x = -100;
            y = -100;
        }
    } else {
        printScore();
    }
}

function drawCircle(){
    let colorVar = map(timer, 0, timeLimit * 1000, 0, 360);
    fill(colorVar, 100, 50, 1);
    circle(x, y, diameter);
}

function mouseClicked(){
    if(mouseOverCircle()){
        setNewLocation();
        score++;
    }
}

function keyPressed(){
    if(keyCode == 82)
        reset();
}

function setNewLocation(){
    x = random(diameter/2, width - diameter/2);
    y = random(progressBarHeight + diameter/2, height - diameter/2);
}

function printProgressBar(){
    let length = map(timer, 0, timeLimit * 1000, 0, width);
    rect(0, 0, length, progressBarHeight);
}

function printScore(){
    fill(0, 0, 100, 1)
    textSize(100);
    text("score: " + score, width / 2, height / 2);
    textSize(50);
    text("press \"R\" to play again", width / 2, height / 2 + 100);
}

function reset(){
    setNewLocation();
    over = false;
    timer = 0;
    score = 0;
}

function mouseOverCircle(){
    return mouseX > x - diameter/2 && mouseX < x + diameter/2 &&
           mouseY > y - diameter/2 && mouseY < y + diameter/2;
}
