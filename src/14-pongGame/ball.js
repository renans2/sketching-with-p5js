let topBound;
let bottomBound;
let rightBound;
let leftBound;
let ySpeed;
let colorVar;
let gameOver = false;

class Ball{
    constructor(x, y, diameter, xSpeed, racket1, racket2){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.xSpeed = xSpeed;
        this.racket1 = racket1;
        this.racket2 = racket2;
        ySpeed = 0;
        topBound = this.diameter / 2;
        bottomBound = height - this.diameter / 2;
        leftBound = this.racket1.getX() + this.racket2.getWidth()/2;
        rightBound = this.racket2.getX() - this.racket2.getWidth()/2;
    }

    update(){
        this.x += this.xSpeed;
        this.y += ySpeed;

        if(this.reachedTopOrBottomBound())
            ySpeed *= -1;

        if(this.reachedLeftBound()){
            if(this.hitsRacket1()){
                this.updateSpeeds();
            } else {
                gameOver = true;
            }
        } else if (this.reachedRightBound()){
            if(this.hitsRacket2()){
                this.updateSpeeds();
            } else {
                gameOver = true;
            }
        }
    }

    show(){
        colorVar = map(this.y, 0, height, 0, 360)
        fill(colorVar, 100, 50, 1)
        circle(this.x, this.y, this.diameter);
    }

    gameIsOver(){
        return gameOver;
    }

    updateSpeeds(){
        this.xSpeed *= -1;
        ySpeed = random(-5,5);
    }

    reachedTopOrBottomBound(){
        return this.y < topBound || this.y > bottomBound;
    }

    reachedLeftBound(){
        return this.x < leftBound;
    }

    reachedRightBound(){
        return this.x > rightBound;
    }

    hitsRacket1(){
        return this.y > this.racket1.getTopCornerY() && 
               this.y < this.racket1.getBottomCornerY()
    }

    hitsRacket2(){
        return this.y > this.racket2.getTopCornerY() && 
               this.y < this.racket2.getBottomCornerY()
    }

    reverseYSpeed(){
        this.ySpeed *= -1;
    }
}