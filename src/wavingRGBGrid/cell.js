class Cell{
    constructor(x, y, side, color){
        this.x = x
        this.y = y
        this.side = side
        this.color = color;
        this.offset = this.side / 2;
    }

    increaseColor(){
        this.color -= 10
        if(this.color < 0)
            this.color = 360 + this.color;
    }

    calcDistAndSetColor(){
        let distance = dist(this.x, this.y, mouseX - this.offset, mouseY - this.offset);
        this.color = map(distance, 0, 1300, 0, 400); 
    }

    show(){
        fill((this.color % 360), 100, 50, 0.08);
        rect(this.x, this.y, this.side, this.side);
    }
}