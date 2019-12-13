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

// context.beginPath();
// context.lineWidth = "10";
// context.strokeStyle = "blue";
// context.fillStyle = "yellow";
// context.arc(300,200,60,0, Math.PI*2);
// context.closePath();
// context.stroke();
// context.fill();

let circleObject = {};
circleObject.x = 300;
circleObject.y =100;
circleObject.radius = 60;

circleObject.draw = function(){
  context.beginPath();
  context.arc(circleObject.x ,circleObject.y , circleObject.radius, 0, 2*Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}



function animate(){
  context.clearRect(0,0,width,height);
  circleObject. x = circleObject.x + 20;
  circleObject.draw();
}

setInterval(animate,100);
