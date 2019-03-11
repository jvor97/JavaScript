/*
(function () {
    var Question = function(question, answers, correctAnsw) {
    this.question = question;
    this.answers = answers;
    this.correctAnsw = correctAnsw;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
};

Question.prototype.checkAnswer = function(plAnswer) {
    if (plAnswer === this.correctAnsw) {
        console.log('Correct answer !');
    } else {
        console.log('Wrong answer ! Try again :)');
    }
};

var q1 = new Question('How is the weather today ?', ['very good', 'good', 'bad'],2);
var q2 = new Question('What\'s the capital of Czechia ?', ['Prague', 'London', 'Vienna'],0);
var q3 = new Question('What\'s the capital of Slovakia ?', ['Prague', 'Bratislava', 'Kyjev'],1);

var questions = [q1,q2,q3];

var random = Math.floor(Math.random() * questions.length);

questions[random].displayQuestion();

var playerAnswer = parseInt(prompt('Please select the correct answer (input number).'));

questions[random].checkAnswer(playerAnswer);

})();

*/

//Expert level


    var Question = function(question, answers, correctAnsw) {
    this.question = question;
    this.answers = answers;
    this.correctAnsw = correctAnsw;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
};

Question.prototype.checkAnswer = function(plAnswer) {
    if (plAnswer === this.correctAnsw) {
        console.log('Correct answer !');
        callQuestion();
    } else {
        console.log('Wrong answer ! Try again :)');
        callQuestion();
    };
}


var q1 = new Question('How is the weather today ?', ['very good', 'good', 'bad'],2);
var q2 = new Question('What\'s the capital of Czechia ?', ['Prague', 'London', 'Vienna'],0);
var q3 = new Question('What\'s the capital of Slovakia ?', ['Prague', 'Bratislava', 'Kyjev'],1);

var questions = [q1,q2,q3];

//var random = Math.floor(Math.random() * questions.length);
/*
questions[random].displayQuestion();

var playerAnswer = parseInt(prompt('Please select the correct answer (input number).'));

questions[random].checkAnswer(playerAnswer);
//callQuestion(questions[random]);
*/
function callQuestion() {
    var random = Math.floor(Math.random() * questions.length);
   questions[random].displayQuestion();
   playerAnswer = prompt('Please select the correct answer (input number).');
 
   if(playerAnswer !== 'exit') {
    questions[random].checkAnswer(parseInt(playerAnswer));
   }
    
}

callQuestion();