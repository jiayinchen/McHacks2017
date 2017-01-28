
//returns true if the snake is at the border of the gameBoard, else false
function isAtBorder(){
  //check if x or y position is out of bound
  if((snake.x>=floor(canvasWidth/snakeSize))||snake.x<0){
    return true;
  }
  else if ((snake.y>=floor(canvasHeight/snakeSize)||snake.y<0 )){
    return true;
  }
  return false;
}


