/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declaring variables
var score, roundScore, activePlayer;

//We use an array to have multiple variables with the same name
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//Set a radom number between 0 and 6
//we can use Math.random(); but it gives us decimals
//to remove decimal we add another method call Math.floor and
//we define its limits

//I'll move the code to the eventListener 
/*dice = Math.floor(Math.random() * 6) + 1;*/
//console.log(dice);

//DOM MANIPULATION
//The object we will manipulate is the document and we use querySelector to select items as CSS
//We use a string to select it and use another method to change it 'textContent'
//We changed the content of the text but using another variable
/*document.querySelector('#current-' + activePlayer).textContent = dice;*/

//If we want to change HTML code we have to use innerHTML method
//Any HTML tag has to be as a string
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

//We can read elements from a web page and store it in a variable

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//We can add CSS properties to elements with JS
document.querySelector('.dice').style.display = 'none';

//Setting scores to 0 without modifying HTML
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Create an event by clicking "Roll Dice", then setup a function to be executed once the event happens
//create an anonymous function to only use it when the event happens
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display  the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice + '.png';

    //3. Update the round score IF the rolled number was NOT a 1

});
