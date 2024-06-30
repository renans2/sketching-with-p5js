class Racket{
    constructor(x, y, width, height, moveSpeed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.moveSpeed = moveSpeed;
    }

    moveUp(){
        let passedTopBound = this.y - this.height/2 < 0;
        if(!passedTopBound)
            this.y -= this.moveSpeed;
    }

    moveDown(){
        let passedBottomBound = this.y + this.height/2 > height;
        if(!passedBottomBound)
            this.y += this.moveSpeed;
    }

    show(){
        rect(this.x, this.y, this.width, this.height);
    }

    getX(){
        return this.x;
    }

    getTopCornerY(){
        return this.y - this.height/2;
    }

    getBottomCornerY(){
        return this.y + this.height/2;
    }

    getWidth(){
        return this.width;
    }
}