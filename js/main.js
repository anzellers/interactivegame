////////////////////VARIABLES////////////////////////////////////////

var sortCards = [
  {let:'qH', img:'qHeart.png', alt:'queen-heart'},
  {let:'kH', img:'kHeart.png', alt:'king-heart'},
  {let:'jH', img:'jHeart.png', alt:'jack-heart'},
  {let:'aH', img:'aHeart.png', alt:'ace-heart'},
  {let:'qD', img:'qDia.png', alt:'queen-diamond'},
  {let:'kD', img:'kDia.png', alt:'king-diamond'},
  {let:'jD', img:'jDia.png', alt:'jack-diamond'},
  {let:'aD', img:'aDia.png', alt:'ace-diamond'},
  {let:'qS', img:'qSpade.png', alt:'queen-spade'},
  {let:'kS', img:'kSpade.png', alt:'king-spade'},
  {let:'jS', img:'jSpade.png', alt:'jack-spade'},
  {let:'aS', img:'aSpade.png', alt:'ace-spade'},
];

var cards = ['a-one', 'b-two', 'c-three'];
var counter;
var times = 0;

var playingCards = [];

	playingCards[0] = $(".cardplaceholder:first");
	playingCards[1] = $(".cardplaceholder:nth-child(2)");
	playingCards[2] = $(".cardplaceholder:nth-child(3)");

// var i; 
// var p;
var x = ['a-one', 'b-two', 'c-three', 'd-four', 'e-five'];
var y = [];
var queen = "queen-heart";
var q = 0;
var level = 0;


var pickCard = function() {
  
  var c = Math.floor(Math.random() * sortCards.length);
  
  if ( c == q ) {
    c++;
  }

  return c;

};

var setCards = function () {

  $('.first').html('<img src="./img/'+sortCards[q].img+'" alt="'+sortCards[q].alt+'">');

  var second = pickCard();

  $('.second').html('<img src="./img/'+sortCards[second].img+'" alt="'+sortCards[second].alt+'">');

  var third = pickCard();

  $('.third').html('<img src="./img/'+sortCards[third].img+'" alt="'+sortCards[third].alt+'">');
  
  var fourth = pickCard();

  $('.fourth').html('<img src="./img/'+sortCards[fourth].img+'" alt="'+sortCards[fourth].alt+'">');

  var fifth = pickCard();

  $('.fifth').html('<img src="./img/'+sortCards[fifth].img+'" alt="'+sortCards[fifth].alt+'">');

};

var flipCards = function () {
	if ( $('.card').hasClass('flipped') ) {
		$('.card').removeClass('flipped')
	}
	else {
		$('.card').addClass('flipped');
	};
};

var countdown = function () {

	// var countdownElement = document.getElementById('countdown');
	var seconds = 4;
	var endTime = 0;
	var interval;

	interval = setInterval(function () {
		$('.seconds').text( "0" + (seconds - endTime) );

		if (endTime >= seconds) {
			$('.seconds').text("00");
			clearInterval(interval);
			flipCards();
			counter = setInterval(shuffleCards, 300);
		}

		endTime++;

	}, 1000);

};

var playGame = function () {
	setCards();
	countdown();
};

var checkCard = function () {
	
	$('.card').on('click');
	var $target = $(this);

	$target.find('.card')
		.toggleClass('flipped')		

	var timer = setTimeout( function ()  {
		clearInterval(timer);
			//If the card is the queen 'Winning' console window is show
			//Next level button shown
        		if ( queen == $target.find('.front').find('img').attr('alt') ) {
        			$('.result').css('display','block');
        			$('.winner').css('display','block');
        		}

				//If the card is wrong the 'Losing' console window is shown
				//Play again button is shown
        		else {
        			$('.result').css('display','block');
        			$('.loser').css('display','block');
        		}
        }, 800);
};

var shuffleCards = function() {

	
	shuffle(cards); 

	$('.cardplaceholder').each(function(i) {
		var $card = $(this);
		$card.removeClass('a-one')
		.removeClass('b-two')
		.removeClass('c-three')
		.removeClass('d-four')
		.removeClass('e-five')
		.addClass(cards[i]);
	});

	times++;
	if (times >= 10) {
		clearInterval(counter);
		times = 0;
	}

	//$('.one').removeClass('one').addClass('')

   /* // For each card generate a different x position 
    for (i = 0; i < playingCards.length; i++) {

    var newx = newPosition();

    playingCards[i]
		.animate({
			left: newx}, 
			800, function() {
				moveCards();
        });  

    }*/

  //   var newP = newPosition();

  //   var oldP = qDie.position();

  //   if (oldP.left == x[1] && newP > x[1]) {
  //   	newP = newP*(-1);
  //   }
  //   else if (oldP.left == x[1])

  //   qDie
		// .animate({
		// 	left: newP}, 
		// 	'slow', function() {
		// 		moveCards();
  //       });  

};

var resetPositions = function() {
	cards.sort();

	for (i=0; i < playingCards.length; i++) {
		var $target = playingCards[i];

		$target.removeClass('a-one')
			.removeClass('b-two')
			.removeClass('c-three')
			.removeClass('d-four')
			.removeClass('e-five')
			.addClass(cards[i]);
		}
};

var nextLevel = function () {

	level++;
	numCards = level+3;

	resetPositions();

	//Determine row of 3, 4 or 5
	if ( numCards % 4 == 0) {
		$('.wrapper').addClass('fourcardrow');
	}
	else if ( numCards % 5 == 0) {
		$('.wrapper').addClass('fivecardrow');
	}
	else {
		$('.wrapper').removeClass('fourcardrow')
			.removeClass('fivecardrow');
	};

	cards[cards.length] = x[numCards-1];

	newCard = $(".cardplaceholder:nth-child("+ numCards + ")");

	playingCards.push(newCard);

	$(newCard).addClass('show')
		.addClass(cards[(cards.length-1)])
		.removeClass('hide');

};





// var delayCards = function () {
// 	window.setTimeout(flipCards, 3000);
// };

var addCard = function () {

	$('<div>').addClass('face').addClass('front').hasClass(cards[cards.length]);
	$('<div>').addClass('face').addClass('back');
	$('img').attr('src','img/backface.png').appendTo('.back');

};





////////////////////STEPS FOR GAME////////////////////////////////////////

//Starting Page
	// Shows the title
	// When you click play the table shows 


//Show cards
	//Starts with 3 cards on table 
	//One card is the Queen of hearts
	//Timer: shows cards for 10 seconds 


//Turn over cards 
	//Animate cards turning over to back side


//Shuffle cards 
	//Cards move randomly on table
	//Stop at a position after 10 seconds 


//Wait for user to pick a card (click)
	//If user clicks card it turns over 
	// Animate cards turning overs

//In the next level another card is added 
	//Process repeats with 4 cards






/////////////

// var positionCards = function () {
	
// 	//Loop through cards and get coordinates
// 	for (i = 0; i < playingCards.length; i++) {

// 		p = playingCards[i].position(); //Get position of card
// 		x[i] = p.left; //Store x coordinate of card
// 		y[i] = p.top; //Store y coordinate of card
// 	};

// 	console.log(x);

// };

// var newPosition = function() {

//  	//Generate new X position
// 	// cards can only move along x
// 	// position x ranges from 0 to 420
// 	var wrapW = $('.wrapper').width() - 210;
// 	var nx = Math.floor(Math.random() * wrapW);

// 	return nx;

// };


