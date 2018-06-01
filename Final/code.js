var car;
var game;
var track;

function checkCollisions() {

    if (track.collidesWith(car)) {
        game.over();
    } 
}
function Car() {
    tCar = new Sprite(game, 'https://i.stack.imgur.com/ZS04i.png', 50, 50);

    tCar.checkKeys = function() {
        if (keysDown[K_LEFT]) {
            this.changeImgAngleBy(-5);
        }
        if (keysDown[K_RIGHT]) {
            this.changeImgAngleBy(5);
        }
        if (keysDown[K_UP]) {
            this.setSpeed(9.5);
        }
        this.addVector(this.getImgAngle(), (this.speed / 20));
    };
     tCar.checkDrag = function(){
        speed = this.getSpeed();
        speed *= 0.95;
        this.setSpeed(speed);
    };
    return tCar;
}


function init() {
    game = new Scene();
    track = new Sprite(game, 'http://themusicianscircle.org/parts/circle.gif', 400, 400);
    track.setSpeed(0);
    track.setPosition(400, 300);
    car = new Car();
    car.setSpeed(0);
    game.start();
    car.setBoundActions(DIE);
}

function update() {
    game.clear();
    track.update();
    car.checkKeys();
    car.checkDrag();
    car.update();
    checkCollisions();

}

$(document).ready(function(){
    $(".start").click(function(){
        $(".canvas").slideToggle(1000);
    });
});
