
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
  {let:'qC', img:'qClub.png', alt:'queen-club'},
  {let:'kC', img:'kClub.png', alt:'king-club'},
  {let:'jC', img:'jClub.png', alt:'jack-club'},
  {let:'aC', img:'aClub.png', alt:'ace-club'},
];

var cards = ['a-one', 'b-one', 'c-one'];
var counter;
var times = 0;

var playingCards = [];

	playingCards[0] = $(".cardplaceholder:first");
	playingCards[1] = $(".cardplaceholder:nth-child(2)");
	playingCards[2] = $(".cardplaceholder:nth-child(3)");

var x = ['a-one', 'b-one', 'c-one', 'd-one', 'e-one', 'f-two', 'g-two', 'h-two', 'i-two', 'j-two'];
var queen = "queen-heart";
var level = 0;
var q = 0;
var numCards;

var chooseCards = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth']; 
var randNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



var pickCard = function() {
  
  var c = Math.floor(Math.random() * sortCards.length);
  
  if ( c == q ) {
    c++;
  }

  return c;

};

var setCards = function () {

  $('.first').html('<img src="./img/'+sortCards[q].img+'" alt="'+sortCards[q].alt+'">');

  for (i=1; i < randNum.length; i++) {
	randNum[i] = pickCard();
	}

  for (i=1; i < chooseCards.length; i++) {
  	$('.'+chooseCards[i]).html('<img src="./img/'+sortCards[randNum[i]].img+'" alt="'+sortCards[randNum[i]].alt+'">');
  }

};

var flipCards = function () {
	if ( $('.card').hasClass('flipped') ) {
		$('.card').removeClass('flipped')
	}
	else {
		$('.card').addClass('flipped');
	};

	playFlipSound();
};

var countdown = function () {

	var seconds = 5;
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

	$('.flip').off('click');
	setCards();
	countdown();

};

var checkCard = function () {

	var $target = $(this);

	$target.find('.card')
		.removeClass('flipped');	

	playFlipSound();

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
		.removeClass('b-one')
		.removeClass('c-one')
		.removeClass('d-one')
		.removeClass('e-one')
		.removeClass('f-two')
		.removeClass('g-two')
		.removeClass('h-two')
		.removeClass('i-two')
		.removeClass('j-two')
		.addClass(cards[i]);
	});

	times++;
	if (times >= 15) {
		clearInterval(counter);
		$('.flip').on('click', checkCard);
		times = 0;
	}

	playShuffleSound();

};

var resetPositions = function() {

	cards.sort();

	for (i=0; i < playingCards.length; i++) {
		var $target = playingCards[i];

		$target.removeClass('a-one')
			.removeClass('b-one')
			.removeClass('c-one')
			.removeClass('d-one')
			.removeClass('e-one')
			.removeClass('f-two')
			.removeClass('g-two')
			.removeClass('h-two')
			.removeClass('i-two')
			.removeClass('j-two')
			.addClass(cards[i]);
	}

	if (numCards == 6) {
		cards[3]='g-two';
		playingCards[3].removeClass('d-one')
		.addClass('g-two');
		
		cards[4]='h-two';
		playingCards[4].removeClass('e-one')
		.addClass('h-two');
	};
	
	if (numCards == 7) {
		cards[4]='d-one';
		playingCards[4].removeClass('g-two')
		.addClass('d-one');
	};

	if (numCards == 8) {
		cards[6]='i-two';
		playingCards[6].removeClass('h-two')
		.addClass('i-two');
	};

	if (numCards == 9) {
		cards[7]='e-one';
		playingCards[7].removeClass('i-two')
		.addClass('e-one');
	}

};

var nextLevel = function () {

	level++;
	numCards = level+3;

	addCard();

	resetPositions();

	//Determine row of 3, 4 or 5
	if ( numCards % 4 == 0 || numCards == 7) {
		$('.wrapper').addClass('fourcardrow');
	}
	else if ( numCards % 5 == 0 || numCards == 9) {
		$('.wrapper').removeClass('fourcardrow').addClass('fivecardrow');
	}
	else {
		$('.wrapper').removeClass('fourcardrow')
			.removeClass('fivecardrow');
	};

	cards[cards.length] = x[numCards-1];

	newCard = $(".cardplaceholder:nth-child("+ numCards + ")");

	playingCards.push(newCard);

	$(newCard).addClass(cards[(cards.length-1)])

	//increase speed of card shuffle
	var speed = 1000;
	speed = 1000 - (level*20);

	$('.cardplaceholder').css('transition-duration', speed+'ms')

};

var addCard = function () {

	var $target = $('<div>').addClass('cardplaceholder').addClass('flip');

	var $btarget = $('<div>').addClass('card'); 

	$target.appendTo('.wrapper');
	$btarget.appendTo($target);

	$('<div>').addClass('face').addClass('front').addClass(chooseCards[numCards-1]).appendTo($btarget);
	$('<img>').attr('src','img/backface.png').appendTo($btarget).wrap('<div class="face back"></div>');

};

var playFlipSound = function () {
	document.getElementById('flipcardsound').play();
}

var playShuffleSound = function () {
	document.getElementById('shufflesound').play();
}

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




