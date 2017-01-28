function Snake(){
	this.x = 0;
	this.y = 0;
	this.xSpeed = 0;
	this.ySpeed = 0;

	this.show = function(){
		fill(255);
		rect(this.x, this.y, snakeSize, snakeSize);
	}

	this.update = function(){
		this.x = this.x + this.xSpeed * snakeSize;
		this.y = this.y + this.ySpeed * snakeSize;
	}

	this.changeDir = function(x,y){
		this.xSpeed = x;
		this.ySpeed = y;
	}

	this.death = function(){
		fill(30);
		console.log("You've died");
	}
}