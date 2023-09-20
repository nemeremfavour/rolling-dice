var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random numbers from 1 - 6 

var randomDiceImage = 'dice' + randomNumber1 + '.png'; //image from dice1 to dice6

var randomImageSource = 'images/' + randomDiceImage; //images/dice1.png - dice6.png

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

//If Player One wins
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🎉 Player One Wins!';
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player Two Wins 🎉';
}
else {
  document.querySelector('h1').innerHTML = 'Draw!';
}