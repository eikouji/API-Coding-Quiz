
var buttonE1 = document.querySelector("#ans-btn");

// target the ul element in HTML section by class //
var quizQuestionsE1 = document.querySelector("#question-list-ul")

// Create answer option, style answer option, add text of answer option, 
// append this element to the answer list of the question. //

// function for quiz question presentation// 
var createQuizQuestion = function() {
    var questionItemE1 = document.createElement("ul") {
        questionItemE1.className = "question-list-ul";
        questionItemE1.textContent = "";
        quizQuestionsE1.appendChild(createQuizQuestion);
    };

};

buttonE1.addEventListener("click", function() {
    alert("button clicked");
});

// function for quiz answers
var answerOptions = function() {

};

// create the quiz function, with quiz question array injected onto/into HTML //
createCodingQuiz();


// save quiz score // 
var saveTasks = function() {
    localStorage.setItem("quizQuestions", JSON.stringify(quizQuestions));
}



// Quiz questions and their answers //
// Quiz Question 1, Array of answers //
// Quiz Question 2, Array of Answers //
// Quiz Question 3 - 10, Array of Answers // 



/* OnClick function -- 
On clicking Start Quiz button, the following needs to happen - 
1. Timer starts from 15, counts down by 1 second to 0
2. Question with 4 multiple choice answers appears. Each answer is click-able.
3. With a right answer, a score is tallied. With a wrong answer, 3 seconds are subtracted from timer.
4. When timer is done, or when questions are all answered, score is recorded for tracking progress.
*/
