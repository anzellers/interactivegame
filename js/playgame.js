$('.start').on('click', function() {

	$('.startgame').css('margin-top','50px');
	$('h1').css('margin', '0')
	$('.start').css('display','none');
	$('.table').css('display', 'block').fadeIn(1000);
	
	$('.card').off('click');
	playGame();

});


$('.flip').on('click', checkCard);


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
	countdown();
});


