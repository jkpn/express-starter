$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE
  var balls = []
  
  var b0 = {x:20, y:20, radius:10, color:"red", vx:5, vy:5}

  var b1 = {x:45, y:45, radius:20, color:"black", vx:5, vy:5}

  var b2 = {x:85, y:85, radius:30, color:"blue", vx:5, vy:5}
   
balls.push(b0)
balls.push(b1)
balls.push(b2)


  // Run an interation of the game
  var updateGame = function() {
// PUT STUFF HERE
for (var i = 0; i < balls.length; i++) {

  context.fillStyle=balls[i].color;
    context.beginPath();
    context.arc(balls[i].x,balls[i].y,balls[i].radius,-Math.PI,Math.PI);
    context.closePath();
    context.fill();
}
    //context.fillStyle=b1.color;
    //context.beginPath();
    //context.arc(b1.x,b1.y,b1.radius,-Math.PI,Math.PI);
    //context.closePath();
    //context.fill();

    //context.fillStyle=b2.color;
    //context.beginPath();
    //context.arc(b2.x,b2.y,b2.radius,-Math.PI,Math.PI);
    //context.closePath();
    //context.fill();
  };

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
