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
