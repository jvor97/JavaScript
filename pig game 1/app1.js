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
Challenge 2: possibility to set  winning score    *UPGRADE: when clicking on new game, the inputed score from previous game dissapears
Challenge 3: 2 dices    *UPGRADE: still having the previous challenge- two 6 in a row */     

/* THINK ABOUT UPGRADE
- AERT START GAME začať s pozadím jednotným- ani jeden nebude mať active a až ptm keď klikneš na alert start game tak naskoči + možno aby si mohli zadať vastné mena----> toto jedine s JQUERY 
-nastaviť si win score iba na začiatku hry
*/

/*QUESTIONS
1-prečo nefunguje zmena stylu pre vsetkych clenov class naraz? ale musim to robit po jednom po ID.. napr. mam 2xdice, kt maju ale spoločnu class= dice. Chcem aby keď začínam hru všetke dice boli nevyditelne ´, tak prečo to nemozem urobit  :   
document.querySelector('.dice').style.display = 'none';
 ale musim to robit ako:    
 document.getElementById('dice1').style.display = 'none';
 document.getElementById('dice2').style.display = 'none';
*/

var activePlayer, roundScore, score, gamePlaying;

init();

var previousdice1 = 0;
var previousdice2 = 0;

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        //Roll dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //Display dice
        var diceDOM = document.getElementById('dice1');
        diceDOM.style.display = 'block';
        diceDOM.style.opacity = 1;
        diceDOM.src = 'dice-' + dice1 + '.png';

        var diceDOM = document.getElementById('dice2');
        diceDOM.style.display = 'block';
        diceDOM.style.opacity = 1;
        diceDOM.src = 'dice-' + dice2 + '.png';
        

        //Update and display score
        if ((dice1 === 6 || dice2 === 6) && (previousdice1 === 6 || previousdice2 === 6)) {
            score[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
            nextPlayer();
        } else {
            if (dice1 !== 1 && dice2 !== 1) {
                roundScore += dice1 + dice2;
                document.getElementById('current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }
        previousdice1 = dice1;
        previousdice2 = dice2;
        document.querySelector('.win-input').style.display = 'none';
    }
});



document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        //Add current score to global score
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        //Check if player won
        var inputWinScore = document.querySelector('.win-input').value;
        var winScore;
        if (inputWinScore) {
            winScore = inputWinScore;
        } else {
            winScore = 15;
        }

        if (score[activePlayer] >= winScore) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.getElementById('name-' + activePlayer).textContent = 'Winner !';
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
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

window.confirm('Do you want to play PIG GAME ?');



    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.win-input').style.display = 'block';
    document.querySelector('.win-input').value = "";
}

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('dice1').style.opacity = 0.5;
    document.getElementById('dice2').style.opacity = 0.5;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}