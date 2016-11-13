$(document).ready(function() {
    for(var x = 1; x < 16*16; x++) {
            $("<div class='box'></div>").appendTo('.container');
		$(".box").height('31.25px');
    		$(".box").width('31.25px');
    }; 
    $('.box').mouseenter(function() {
    $(this).css('background-color','black');
    });
$('#right').click(function(){
    $(".box").css(
        'background-color', 'grey');
});
$('#left').click(function() {
	 $(".box").css(
        'background-color', 'grey');
	var input =-1
	while(input < 1 | input > 64){
		input=prompt("Pick a number between 1 and 64");
	}
	input*=input;
	$(".container").empty();
	for(var i = 0; i < input; i++) {
		$("<div class='box'></div>").appendTo('.container');
	}
	$('.box').mouseenter(function() {
    $(this).css('background-color','black');
    });		

	$(".box").height(500 / (Math.sqrt(input)));
	$(".box").width(500 / (Math.sqrt(input)));
});
$('.box').mouseenter(function() {
    $(this).css('background-color','black');
    });
});


