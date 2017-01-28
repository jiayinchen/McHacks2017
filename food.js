function Food(){

	// food color code
	var pink =  [249, 116, 109]; // increase speed
	var blue = [109, 224, 249]; //decrease speed
	var green = [109, 249, 133]; //make more food
	var purple = [163, 109, 249]; //shrink snake
	var yellow = [240, 249, 109]; //elongate snake

	// pick random color
	var arrColors = [pink, blue, green, purple, yellow];
	var ranCol = arrColors[Math.floor(Math.random() * arrColors.length)];

	// start at random color, random position
	this.color = ranCol;
	this.x = Math.floor(Math.random()*30)*20;
	this.y = Math.floor(Math.random()*30)*20;

	// display food
	this.show = function() {
		fill(ranCol[0], ranCol[1], ranCol[2]);
		rect(this.x, this.y, snakeSize, snakeSize);
	}

	// eaten 5 consecutive same colored food
	this.eaten = function(){
		switch(this.color){
			case pink:
				break;
			case blue:
				break;
			case green:
				break;
			case purple:
				break;
			case yellow:
				break;
		}
	}
}