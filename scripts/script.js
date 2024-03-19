var canvas = document.getElementById('canvas').getContext("2d");

var bg = new Bg(0,0,500,900,"assets/images/sky.png");
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png");


function draw() {
    bg.draw();
    bg2.draw();
}

function update() {
    bg.move(15, -500, 0);
    bg2.move(15, 0, 500);

}

function main() {
    canvas.clearRect(0, 0, 500, 900);
    draw();
    update();
}

setInterval(main, 100);