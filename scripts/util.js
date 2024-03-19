class Obj{
    constructor(positionX, positionY, width, height, image){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(){
        var img = new Image();
        img.src = this.image;
        canvas.drawImage(img, this.positionX, this.positionY, this.width, this.height);
    }
}

class Bg extends Obj{
    move(speed, limit, pos){
        this.positionX -= speed; // move background to the left
        if(this.positionX <= limit){
            this.positionX = pos;
        }
    }
}