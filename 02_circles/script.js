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

let circles = [];

for(let i=0; i<10; i++){
  drawCircle();
}

function drawCircle(){
  let circle = {};
  circle.x = getRandomNumber(width);
  circle.y = getRandomNumber(height);
  circle.draw = function (){
    context.beginPath();
    context.lineWidth = "5";
    context.fillStyle = "rgba(10,200,40,0.8)";
    context.arc(this.x,this.y,20,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
  circles.push(circle);
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}
