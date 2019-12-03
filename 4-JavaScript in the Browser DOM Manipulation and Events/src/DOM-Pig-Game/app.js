/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying; //Global scope variables
init();
//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-' + activePlayer).textContent = dice; // sadece text değiştirilebilir. html olarak düzenlenemez.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// https://developer.mozilla.org/en-US/docs/Web/Events
// function btn() { }
//document.querySelector('.btn-roll').addEventListener('click', btn); // btn is a callback function. It is a function that is not called by us but by another function. It is passed as an argument to EventListener function.

document.querySelector('.btn-roll').addEventListener('click', function() {
    //Anonymous function is a function that is not have a name and can not be used out of this context. It can be only used here.
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        console.log(dice);
        //3. Update the round score if the rolled number was not a 1
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById(
                'current-' + activePlayer
            ).textContent = roundScore;
        } else {
            document.getElementById('current-' + activePlayer).textContent =
                '0';
            //document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            //document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            //Next Player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent =
            scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore = 100;
        // Undefined, 0, null or "" are coerced to false, anything else is coerced to true
        if (input) {
            winningScore = input;
        }
        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent =
                'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.add('winner');
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.remove('active');
        } else {
            // Next Player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    before = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0'; // faster than querySelector
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    roundScore = 0;
    before = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    activePlayer = activePlayer === 1 ? 0 : 1;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
