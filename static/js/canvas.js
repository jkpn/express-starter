$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
$('#p1').click(function() {
    context.strokeRect(20, 20, 200, 100);
});

$('#p2').click(function() {
    context.strokeRect(20, 20, 200, 200);
});

$('#p3').click(function() {
    context.beginPath();
    	//context.moveTo(20,20);
    	//context.lineTo(40,40);
    	context.arc(100,100,50,0,Math.PI);
    context.closePath();
    context.stroke();
});

$('#p4').click(function() {
    context.beginPath();
    	context.arc(100,100,50,-Math.PI,Math.PI);
    context.closePath();
    context.stroke();
});

$('#p5').click(function() {
    context.beginPath();
    	context.moveTo(20,20);
    	context.lineTo(200,200);
    context.closePath();
    context.stroke();
});

$('#p6').click(function() {
    context.strokeStyle='green';
    	context.strokeRect(20, 20, 200, 100);
    context.strokeStyle='black';

});

$('#p7').click(function() {
	context.fillStyle='red';
    	context.beginPath();
    		context.arc(100,100,50,-Math.PI,Math.PI);
    	context.closePath();
    context.fill();
});

$('#p8').click(function() {
    context.strokeStyle='blue';
    	context.strokeRect(20, 20, 200, 100);
    context.fillStyle='yellow';
    	context.fillRect(20, 20, 200, 100);
    context.strokeStyle='black';

});
});
