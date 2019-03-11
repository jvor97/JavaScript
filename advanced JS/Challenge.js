

(function() {
    var Question = function(question, answers, correctAnsw){
        this.question = question;
        this.answers = answers;
        this.correctAnsw = correctAnsw;
    }
    
    var question1 = new Question
    ('What is the name of my boyfriend ?', ['David','Josephe'], 2);
    
    var question2 = new Question
    ('What\'s my name ?', ['David','Julia'], 2);
    
    var question3 = new Question
    ('What is my favorite color ?', ['black','white'], 1);
    
    var questions = [question1,question2,question3];
    
    // Pick random q and log it
    // with the possible answers
    // use method for this
    
    function RandomQuestionPicker(questions){
        var random = Math.floor(Math.random() * questions.length);
        var randomQuestion = questions[random];
    
        console.log(randomQuestion.question);
        for (let i = 0; i < randomQuestion.answers.length; i++) {
            console.log(randomQuestion.answers[i]);
        } 
        return randomQuestion;
    }
    
    var randomQuestion = RandomQuestionPicker(questions);
    
    function displayQuestion() {
        RandomQuestionPicker.call(this, questions);
        var playerAnswer = parseInt(prompt('Please select the correct answer(type number)'));
    
        if (playerAnswer === null || playerAnswer === 0 || playerAnswer === '') {
            console.log('You finished the game');
        } else if (playerAnswer === randomQuestion.correctAnsw) {
            console.log('Correct answer !');
            displayQuestion(); 
        } else {
            console.log('This is not correct answer!');
            displayQuestion(); 
        };
    }

    displayQuestion();
/*
    var playerAnswer = displayQuestion();

    if (playerAnswer === randomQuestion.correctAnsw) {
        console.log('Correct answer !');
        displayQuestion(); 
    } else {
        console.log('This is not correct answer!');
        displayQuestion(); 
    };

    displayQuestion(); */

   // var playerAnswer = window.prompt('Please select the correct answer(type number)');
    
})();




