var snake;
var snakeSize = 20;
var foods = [];

function setup(){
	createCanvas(600, 600);
	frameRate(10);

	snake = new Snake();
  for(i = 0; i < 5; i++){
    foods.push(new Food());
  }

}

function draw(){
	background(30);
	snake.update();
	snake.show();
  for(i = 0; i < foods.length; i++){
    foods[i].show();
  }
  
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

