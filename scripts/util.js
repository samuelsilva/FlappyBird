class Obj{
    frame = 0;
    timer = 0;
    set_visible = true;

    constructor(positionX, positionY, width, height, image){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw(){
        if(this.set_visible) {
            var img = new Image();
            img.src = this.image;
            canvas.drawImage(img, this.positionX, this.positionY, this.width, this.height);
        }
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

    collide(obj) {
        if (this.positionX < obj.positionX +obj.width &&
            this.positionX + this.width > obj.positionX &&
            this.positionY < obj.positionY +obj.height &&
            this.positionY + this.height > obj.positionY) 
        {
            return true;
        }else {
            //console.log("NÃO colidiu");
            return false;
        }
    }
}

class Text{
    text = "";

    draw_text(size, font, posicaoX, posicaoY, color){
        canvas.font = size + "px" + " " + font;
        canvas.fillStyle = color;
        canvas.fillText(this.text, posicaoX, posicaoY);
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

class Coin extends Obj{
    move(pipe) {
        this.positionX = pipe.positionX + 25;
        this.positionY = pipe.positionY - 150;
    
        if( this.positionX <= -50) {
            this.set_visible = true;
        }
    }

    
}