// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen
let colors = ["RGBA(0,0,255,0.2)", "RGBA(0,255,0,0.2)", "RGBA(255,0,255,0.2)"];
var ballX = 90;
var ballY = 90;
var xVelocity = 2;
var yVelocity = 2;
var ballWidth = 15;

context.beginPath()
context.fillStyle = "RGBA(0,0,255,0.2";
context.arc(400,300,20, 0, Math.PI*2);
context.stroke();
context.fill();
context.closePath();

let cirkelObject = {}
cirkelObject.x = 200;
cirkelObject.y = 300;
cirkelObject.radius = 20;
cirkelObject.sAngle = 0;
cirkelObject.eAngle = Math.PI *2;
cirkelObject.color = "RGBA(0,0,255,0.2";
cirkelObject.velocity_x = 5;
cirkelObject.velocity_y = 5;

cirkelObject.draw = function(){
context.beginPath();
context.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle);
context.closePath();
context.stroke();
context.fillStyle = this.color;
context.fill();
}

function animate(){
	context.clearRect(0,0,width,height)
	cirkelObject.x += 2;
	cirkelObject.draw();
}

setInterval(animate,1);

function bounce()
{

 ballX += xVelocity;
 ballY += yVelocity;

 if(ballX - ballWidth <= 0) {
  xVelocity = -xVelocity;
}

if(ballX + ballWidth >= canvas.width) {
xVelocity = -xVelocity;
}
if(ballY - ballWidth <= 0) {
 yVelocity = -yVelocity;
}
if(ballY + ballWidth >= canvas.height) {
  yVelocity = -yVelocity;
}

}



