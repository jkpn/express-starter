$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
  var ball1 = {x:20, y:20, radius:30, color:"red"}
  var x = 20;
  var y = 20;
  //run an iteration of the game
  var updateGame = function() {
 
    context.fillStyle='blue';
    context.fillRect(0,0, 800, 800);

    context.fillStyle=ball1.color;
    context.beginPath();
    context.arc(ball1.x,ball1.y,ball1.radius,-Math.PI,Math.PI);
    context.closePath();
    context.fill();

     ball1.x = ball1.x + 5;
     ball1.y = ball1.y + 5;
     setTimeout(updateGame, 10);
  };

  updateGame();
  
});
