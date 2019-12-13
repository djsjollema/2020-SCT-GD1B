// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let circleObject = {};
circleObject.x = 400;
circleObject.y = 200;
circleObject.radius = 40;
circleObject.color = "purple";

circleObject.draw = function(){
  context.beginPath();
  context.lineWidth = "5";
  context.fillStyle = circleObject.color;
  context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}

circleObject.draw();

circleObject.x = 0;
circleObject.draw();

function anime(){
  circleObject.x = circleObject.x + 10;
  circleObject.draw();
}

setInterval(anime,100)
