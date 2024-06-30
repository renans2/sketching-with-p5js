let timer = 0;
let waitingTime = 0;

let minWaitingTime = 3;
let maxWaitingTime = 6;

let buttonWidth = 600;
let buttonHeight = 200;

let wait = true;
let count = true;

let time = 0;
let bestTime = 1000;

function setup(){
    createCanvas(900, 900);
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(55);

    setNewWaitingTime();
}

function draw(){
    translate(width/2, height/2);
    background(0);
    drawButton();

    if(wait){
        incrementTimer();
        printWait();
        if(timer > waitingTime * 1000)
            wait = false;
    } else {
        if(count) incrementTimer();
        else printReset();
        printTime();
    }

    printBestTime();
}

function printBestTime(){
    fill(255);
    
    if(bestTime == 1000)
        text("Your best time is: undefined", 0, -300);
    else
        text("Your best time is: " + bestTime + " ms", 0, -300);

}

function mousePressed(){
    if(mouseOverButton()){
        if(wait) 
            setNewWaitingTime();
        else {
            count = false;
            time = round(timer - waitingTime * 1000);
            if(time < bestTime)
                bestTime = time;
        }
    }
}

function mouseOverButton(){
    let realMouseX = mouseX - width/2;
    let realMouseY = mouseY - width/2;

    return -buttonWidth/2  < realMouseX && realMouseX < buttonWidth/2 &&
           -buttonHeight/2 < realMouseY && realMouseY < buttonHeight/2;
}

function setNewWaitingTime(){
    timer = 0;
    waitingTime = random(minWaitingTime, maxWaitingTime);
}

function incrementTimer(){
    timer += deltaTime;
}

function drawButton(){
    if(wait) fill('yellow');
    else     fill('Green');
    rect(0, 0, buttonWidth, buttonHeight);
}

function printWait(){
    fill(0);
    text("Click when it turns green", 0, 0);
}

function printTime(){
    fill(0);
    text(round(timer - waitingTime * 1000) + " ms", 0, 0);
}

function printReset(){
    fill(0);
    text("press \"R\" to try again", 0, 70);
}

function keyPressed(){
    if(keyCode == 82)
        reset();
}

function reset(){
    setNewWaitingTime();
    wait = true;
    count = true;
}
