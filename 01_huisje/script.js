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
context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.lineTo(300,100);
context.closePath;
context.fillStyle = "red";
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(700,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.closePath;
context.fillStyle = "gray";
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(200,300);
context.lineTo(200,500);
context.lineTo(600,600);
context.lineTo(600,400);
context.lineTo(200,300);
context.closePath;
context.fillStyle = "white";
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(600,400);
context.lineTo(600,600);
context.lineTo(800,500);
context.lineTo(800,300);
context.lineTo(600,400);
context.closePath;
context.fillStyle = "gray";
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(250,375);
context.lineTo(250,425);
context.lineTo(450,475);
context.lineTo(450,425);
context.lineTo(250,375);
context.closePath;
context.fillStyle = "lightblue";
context.fill();
context.stroke();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "black";
context.moveTo(660,400);
context.lineTo(660,570);
context.lineTo(700,550);
context.lineTo(700,380);
context.lineTo(660,400);
context.closePath;
context.fillStyle = "white";
context.fill();
context.stroke();
