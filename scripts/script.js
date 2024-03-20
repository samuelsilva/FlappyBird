var canvas = document.getElementById('canvas').getContext("2d");

var bg = new Bg(0,0,500,900,"assets/images/sky.png");
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png");

var ground = new Ground(0,736,500,164,"assets/images/ground.png");
var ground2 = new Ground(500,736,500,164,"assets/images/ground.png");

var pipe1 = new Pipe(300,500, 96, 358, "assets/images/pipe1.png");
var pipe2 = new Pipe(300,0, 96, 358, "assets/images/pipe2.png");

var bird = new Bird(50,400,63,51, "assets/images/bird0.png");

var coin = new Coin(50,50, 45,65, "assets/images/3.png");

var score = 0;
var score_text = new Text();

var fly = new Audio("assets/sounds/wing.ogg");
var coin_pick = new Audio("assets/sounds/point.ogg");
var game_over = new Audio("assets/sounds/hit.ogg");

var play = true;

document.addEventListener("click", function(event){
    bird.speed -= 15;
    fly.play();
});

function collision() {
    if(bird.collide(coin)) {
        if(coin.set_visible){
            coin.set_visible = false;
            score += 1;
            coin_pick.play();
        }
    }
 
    if(bird.collide(pipe1) || bird.collide(pipe2)) {
        game_over.play();
        play = false;
    }
}

function draw() {
    bg.draw();
    bg2.draw();
    pipe1.draw();
    pipe2.draw();
    ground.draw();
    ground2.draw();
    bird.draw();
    coin.draw();
    score_text.draw_text(60, "Arial", 225, 100, "white");
}

function update() {
    if(play) {
        bg.move(1, -500, 0);
        bg2.move(1, 0, 500);
    
        ground.move(2, -500, 0);
        ground2.move(2, 0, 500);
        
        bird.move();
        bird.animation(8, 4, "bird");
        bird.limits();
    
        pipe1.move(1, -100, 500, pipe2);
    
        coin.move(pipe1);
        coin.animation(5, 5, "");
    
        score_text.text = score;
        
        collision();
    }

}

function main() {
    canvas.clearRect(0, 0, 500, 900);
    draw();
    update();
    requestAnimationFrame(main);
}

main();