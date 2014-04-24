$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  var numBalls = 3;

  var balls = [];

  var reactions = [];
  
  for (var i = 0; i < numBalls; i++) {
    a = {x: width*Math.random(), y: height*Math.random(), radius: 20, vx: 2.5*Math.random()+2.5, vy: 2.5*Math.random()+2.5};
    balls.push(a);
  }

  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;
      if (balls[i].x >= width) {
        balls[i].vx = -5;
      }
      if (balls[i].y >= height) {
        balls[i].vy = -5;
      }
      if (balls[i].x <= 0) {
        balls[i].vx = 5;
      }
      if (balls[i].y <= 0) {
        balls[i].vy = 5;
      }
    }

    context.fillStyle='black';
    context.fillRect(0, 0, 800, 800);
    for (var c = 0; c < balls.length; c++) {
      context.beginPath();
      context.fillStyle='blue';
      context.arc(balls[c].x, balls[c].y, balls[c].radius,0,2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    }
    for (var c = 0; c < reactions.length; c++) {
      context.beginPath();
      context.fillStyle='blue';
      context.arc (reactions[c].x, reactions[c].y, reactions[c].radius,0,2*Math.PI);
      context.closePath();
      context.stroke();
      context.fill();
    }
    requestAnimationFrame(updateGame);
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    
    z = {x: x, y: y, radius: 30, vx: 2.5*Math.random()+2.5, vy: 2.5*Math.random()+2.5};
    reactions.push(z);

  
  });

  updateGame();
});
