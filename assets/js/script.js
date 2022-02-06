
var buttonE1 = document.querySelector("#ans-btn");

// target the ul element in HTML section by class //
var quizQuestionsE1 = document.querySelector("#question-list-ul")

// Create answer option, style answer option, add text of answer option, 
// append this element to the answer list of the question. //

// function for quiz question // 
var createQuizQuestion = function() {
    var questionItemE1 = document.createElement("ul") {
        questionItemE1.className = "question-list-ul";
        questionItemE1.textContent = "";
        quizQuestionsE1.appendChild(createQuizQuestion);
    };

};

buttonE1.addEventListener("click", createTaskHandler);

// function for quiz answers
var answerOptions = function() {

};


// quiz timer function //
var quizTimer = new Date().getTime();


// Update the count down to every 1 second //
var x = setInterval(function() {
    // get today's date and time //
    var now = new Date().getTime();

    // display result in the element with id "quiz-timer" //
    document.getElementById("quiz-timer").innerHTML =
    "you have" + minutes + "Minutes" + seconds + "seconds" + "left";

    // if countdown is finished, write text //
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Time's Up! Quiz Over!";
    };


    /*
    To Do:
    1. Create quiz question card with dynamically created questions (question function)
    2. Populate quiz with 4 answers per multiple choice question (answer function)
    3. Tally right answers, ding time for wrong answers (tally, timer subtract function)
    4. Timer function (set timer)
    5. record name and end quiz score (localStorage feature)
    */
};
