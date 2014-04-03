$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE
  var x = 20;
  //run an iteration of the game
  var updateGame = function() {
 
    context.fillStyle='blue';
    context.fillRect(0,0, 800, 800);

    context.fillStyle='red';
    context.beginPath();
    context.arc(x,20,20,-Math.PI,Math.PI);
    context.closePath();
    context.fill();

 

     x = x + 5;
     setTimeout(updateGame, 10);
  };

  updateGame();
  
});
