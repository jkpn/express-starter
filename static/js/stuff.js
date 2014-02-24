alert('Welcome to my page that is fuleth of stuffeth'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#tickle').click(function() {
  $('#tickled_text').css('color','Pink')
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#Greet').click(function() {
	$('#my_name').val()
});
