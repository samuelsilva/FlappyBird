class Obj{
    frame = 0;
    timer = 0;

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

    animation(speed, limit, name){
        this.timer += 1;
        if(this.timer >= speed) {
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame >= limit) {
            this.frame = 0;
        }

        this.image = "assets/images/" + name + this.frame + ".png";
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

class Ground extends Bg{

}

class Bird extends Obj{

    speed = 2;
    gravity = 1;

    move(){
        if(this.speed < 10) {
            this.speed += this.gravity;
        }
        this.positionY += this.speed;
    }

    // define limits to the fly: ground/sky
    limits() {
        if(this.positionY >= 695) {
            this.positionY = 695;
        }else if(this.positionY <=0) {
            this.positionY = 0;
        }
    }
}

class Pipe extends Obj{
    
    move(speed, limit, new_pos, pipe2){
        this.positionX -= speed;
        if(this.positionX <= limit){
            this.positionX = new_pos;
            this.positionY = Math.random() * (600 - 400) + 400;
        }

        pipe2.positionX = this.positionX;
        pipe2.positionY = this.positionY - 600;
    }
}