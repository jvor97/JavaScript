/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* UPGRADE
- AERT START GAME začať s pozadím jednotným- ani jeden nebude mať active a až ptm keď klikneš na alert start game tak naskoči
*/

var activePlayer, roundScore, score, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){

    //Roll dice
    var dice = Math.floor(Math.random()*6) + 1;

    //Display dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.style.opacity = 1;
    diceDOM.src = 'dice-' + dice + '.png'; 

    //Update and display score
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    
    }   
})

function init() {
    activePlayer = 0;
    gamePlaying = true;
    roundScore = 0;
    score = [0,0];

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
}

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.dice').style.opacity = 0.5;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}