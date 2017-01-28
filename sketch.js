var snake;
var snakeSize = 20;

function setup(){
	createCanvas(600, 600);
	frameRate(10);

	snake = new Snake();
}

function draw(){
	background(30);
	snake.update();
	snake.show();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.changeDir(0, -1);
  } 
  else if (keyCode === DOWN_ARROW) {
    snake.changeDir(0, 1);
  } 
  else if (keyCode === RIGHT_ARROW) {
    snake.changeDir(1, 0);
  } 
  else if (keyCode === LEFT_ARROW) {
    snake.changeDir(-1, 0);
  }
}

