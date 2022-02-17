

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

