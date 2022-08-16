canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem, é preciso que seja carregada antes do canvas
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	if(keyPressed == '38'){
		up();
	}
	if(keyPressed == '40'){
		down();
	}
	if(keyPressed == '37'){
		left();
	}
	if(keyPressed == '39'){
		right();
	}
}
function up()
{
	if(roverY >=0){
		roverY = roverY - 10;
		uploadBackground();
		uploadrover();
	}	
}
function down()
{
	if(roverY <=510){
		roverY = roverY + 10;
		uploadBackground();
		uploadrover();
	}	
}
function left()
{
	if(roverX >=0){
		roverX = roverX - 10;
		uploadBackground();
		uploadrover();
	}	
}
function right()
{
	if(roverX <=700){
		roverX = roverX + 10;
		uploadBackground();
		uploadrover();
	}	
}

	