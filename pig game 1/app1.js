/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
Challenge 1: if there is twice 6 in a row, the player loose his entire score
Challenge 2: possibility to set  winning score    *doplnok: ked dam new game tak to score v boxe tam zostava, chcem aby to bolo ako na zaciatku
Challenge 3: 2 dices */

/* UPGRADE
- AERT START GAME začať s pozadím jednotným- ani jeden nebude mať active a až ptm keď klikneš na alert start game tak naskoči
*/

var activePlayer, roundScore, score, gamePlaying;

init();

var previousdice = 0;

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        //Roll dice
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.style.opacity = 1;
        diceDOM.src = 'dice-' + dice + '.png';

        //Update and display score
        if (dice === 6 && previousdice === 6) {
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
            nextPlayer();
        } else {
            if (dice !== 1) {
                roundScore += dice;
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }
        previousdice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        //Add current score to global score
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        //Check if player won
        if (score[activePlayer] >= 100) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.getElementById('name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', function () {
    init();
});

function init() {
    activePlayer = 0;
    gamePlaying = true;
    roundScore = 0;
    score = [0, 0];

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;

    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.dice').style.opacity = 0.5;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}