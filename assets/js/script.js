

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// keeps score //
Quiz.prototype.guess = function(answer) {
    if(this.getQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show quiz question //
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show answer options //
        var Choices = quiz.getQuestionIndex.choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHtml = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }

};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

// current question, progress //
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + " of " + quiz.questions.length;

};

function showScores() {
    var gameOverHTML = "<h1>Result";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// quiz questions //
/* quiz questions */

var questions = [
    new Question ("How do you add comments to a JavaScript file?", ["// comment //", "<!-- comment -->"], ["&& comment %%"], ["@@ comment @@"]),
    new Question ("Which one of these answers is a Conditional Expression?" ["Alternative to if-else"], ["Switch statement"], ["if-then-else"], ["immediate if"]),
    new Question ("When you see 'function' and 'var' in a JavaScript file, these are:" ["Keywords"], ["Data Types"], ["Declaration Statements"], ["Protocols"]),
    new Question ("True or false: It's a good idea to commit your code often, or whenever you leave your desk or workspace for an extended time.", ["True"], ["True"], ["True"], ["True"]),
    new Question ("")
    ])
]
