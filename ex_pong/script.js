// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;


let ball = {};

ball.x = 300;
ball.y = 350;
ball.speedX = -3;
ball.speedY = 4;

ball.update = () =>{
  ball.x += ball.speedX;
  ball.y += ball.speedY;
  ball.width = 20;
  if(ball.y >canvas.height - ball.width){
    ball.speedY = -ball.speedY;
  }
  if(ball.y < 0){
    ball.speedY = -ball.speedY;
  }
  if(ball.x >canvas.width){
    ball.x = canvas.width/2;
  }
  if(ball.x < -ball.width){
    ball.x = canvas.width/2;
  }

}

ball.draw = function(){
  context.fillRect(ball.x,ball.y,ball.width,ball.width);
}

let paddleLeft = {};
paddleLeft.x = 20;
paddleLeft.y = 20;

paddleLeft.draw = () => {
    context.fillRect(paddleLeft.x,paddleLeft.y,40,100)
}

let paddleRight = {};
paddleRight.x = canvas.width - 60;
paddleRight.y = 20;

paddleRight.draw = () => {
    context.fillRect(paddleRight.x,paddleRight.y,40,100)
}


window.addEventListener('keydown',keyDownHandler);

function keyDownHandler(event){
  switch (event.key) {
    case "s":
      paddleLeft.y += 5;
      break;
    case "w":
      paddleLeft.y -= 5;
      break;
    case "ArrowUp":
      paddleRight.y -= 5;
      break;
    case "ArrowDown":
      paddleRight.y += 5;
      break;
    default:

  }
}

function loop(){
  context.clearRect(0,0,canvas.width,canvas.height)
  ball.update();
  ball.draw();
  paddleLeft.draw();
  paddleRight.draw();
}

setInterval(loop,10)
