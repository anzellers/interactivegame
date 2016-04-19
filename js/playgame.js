$('.start').on('click', function() {

	$('.startgame').css('margin-top','50px');
	$('.intro').addClass('hide');

	$('.table').addClass('show');
	$('.timer').addClass('show').removeClass('hide');
	
	playGame();

});


$('.again').on('click', function() {

	$('.result').css('display','none');
	$('.loser').css('display','none');

	flipCards();
	
	playGame();


});


$('.next').on('click', function() {
	
	$('.result').css('display','none');
	$('.winner').css('display','none');


	flipCards();

	nextLevel();

	playGame();

});
