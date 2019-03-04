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


var scores, roundScore, activePlayer, gamePlaying, inputWinScore;

init();

var previousdice = 0;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1; //+1 tam je pretože chceš nie čísla od 0-5 ale od 1-6
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var dice1DOM = document.querySelector('.dice1');
        dice1DOM.style.display = 'block';
        dice1DOM.style.opacity = 1;
        dice1DOM.src = 'dice-' + dice1 + '.png';

        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.style.display = 'block';
        dice2DOM.style.opacity = 1;
        dice2DOM.src = 'dice-' + dice2 + '.png';

        //3. Update the round score if number>1
        if (dice1 === 6 && previousdice === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            NextPlayer();
        } else {
            if (dice1 !== 1 && dice2 !== 1) {
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                NextPlayer();
            }
        }
        previousdice = dice1;
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        //Add current score to gobal score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won
        var inputWinScore = document.getElementById('input-win-score').value;  //číta value, kt. zadali
        var winScore = 0;

        if(inputWinScore) {
            winScore = inputWinScore;
        }else {
            winScore = 20;
        }   //ak je inputWinScore true (čo je ked je tam nejaka hodnota zadana) tak.. a ked tam nie je tak je to false- !!! pretože program vzdy vyhodi ked je tam null/0/""/undefined ze je to false !!!!

        if (scores[activePlayer] >= winScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.dice1').style.display = 'none';
                document.querySelector('.dice2').style.display = 'none';
                gamePlaying = false;
        } else {
                NextPlayer();
            }
        }  
});


function NextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.opacity = 0.5;
    document.querySelector('.dice2').style.opacity = 0.5;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');    //keby si nedala remove active a iba add active tak sa može stať, že bol active a znova sa mu prida active (bude mať 2x active čo neches)
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active'); 

    document.getElementById('input-win-score').value = "";
};



/*
document.querySelector('#current-' + activePlayer).textContent = dice;  // --> setter

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
var x = document.querySelector('#name-1').textContent;
console.log(x);     // ---> getter
*/
