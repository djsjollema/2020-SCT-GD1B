// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

context.beginPath();
context.lineWidth = "5";
context.fillStyle = "purple";
context.arc(200,300,100,0,2*Math.PI);
context.closePath();
context.stroke();
context.fill();
