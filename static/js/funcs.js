$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle= color;
    context.strokeRect(x, y, sideLen, sideLen);
    context.strokeStyle= "black";
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle= color;
    context.beginPath();
    context.arc(x, y, radius,0,2*Math.PI);
    context.closePath();
    context.stroke();
  };

  // Write drawTriplet function here
  var drawTriplet = function(x, y, radius, color) {
    drawCircle(x, y, radius, color);
    drawCircle(x-.75*radius, y+radius, radius, color);
    drawCircle(x+.75*radius, y+radius, radius, color);
  };
    
  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
 $('#p5').click(function() {
    drawCircle(300, 300, 50, 'blue');
    drawSquare(250,250, 100, 'red');
    drawCircle(300,250,50, 'lime');
    drawCircle(250,300,50,'lime');
    drawCircle(350,300,50, 'lime');
    drawCircle(300,350,50, 'lime');
  });

   $('#p6').click(function() {
    drawTriplet(300, 100, 50, 'lime');
  });
});
