//shedfunction

//empty array to keep the location of all skins(immoveable)
var skins=[];

//shedfunction
function shedskin(){
	var tLength=snake.tail.length;

	//if length of the snake >=25... shed 10
	if(tLength>=25){

	}
	//get position of the tail...
	var oldSkin=snake.tail[tLength-1];
	//
	snake.shed();
	createSkin(oldSkin.x, oldSkin.y);


}

function skin(posX,posY){
	this.position=createVector(posX,posY);
	this.x=posX;
	this.y=posY;
	this.type="skin";
	//don't forget to skin.mult(snakeSize)!!!! when printing out to the website
}

function createSkin(posX,posY){
	var newSkin= new skin(posX,posY);
	skins.push(newSkin);
	drawSkin(newSkin);
}

function drawSkin(){
	for(i=0; i<skins.length;i++){
		fill(255,0,100);
		rect(skins[i].x,skins[i].y,snakeSize,snakeSize);
	}
}

function drawSkin(s){
	fill(255,0,100);
	rect(s.x,s.y,snakeSize,snakeSize);
}

function isSkin(thing){
	if(skin.type=="skin"){
		return true;
	}
	return false;
}
