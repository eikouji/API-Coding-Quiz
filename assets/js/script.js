
// Var Array, Quiz Question Array //

// 10 questions total //
var quizQuestions = [
    {
        title: "How do you write a comment in a JavaScript file?",
        choices: ["<!-- comment -->", "// comment //", "%% comment %%", "-- comment --"],
        answer: "// comment //"
    },
    {
        title: "Arrays in JavaScript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Which of the options is the right way to call a random number?",
        choices: ["var randomNum = Math.random();", "var randomNum = Random.math();", "math.number() = randomNum", "solve.random() = math",],
        answer: "var randomNum = Math.random();"
    },
    {
        title: "Which of the following function of Array Object removes the last element from an array and returns that element?",
        choices: ["pop()", "push()", "join()", "map()",],
        answer: "pop() -- removes the last element from an array and returns that element"
    },
    {
        title: "How do you round the number 7.25 to the nearest integer?",
        choices: ["Math.Round(7.25);", "round(7.25);", "math.compute(7.25);", "calc.math(7.25);",],
        answer: "Math.Round(7.25)"
    },
    {
        title: "Which of the following will result in a pop-up, prompting the user for information?",
        choices: ["notifiy()", "yoohoo()", "alert()", "prompt()",],
        answer: "prompt()"
    },
    {
        title: "Which JavaScript element represents TRUE or FALSE values?",
        choices: ["RegExp", "Array", "Boolean", "Event"],
        answer: "Boolean"
    },
    {
        title: "What is the object called that lets you work with both dates and time-related data?",
        choices: ["Clock", "Time-field", "Time-Warp", "Dates"],
        answer: ""
    },
    {
        title: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choices: ["Syntax", "JSON", "Scope", "Input"],
        answer: ""
    },
    {
        title: "A useful tool to checking your own code during development and the de-bugging process is:",
        choices: ["checkCode()", "for loops", "console.log()", "debug.document"],
        answer: "console.log()"
    },
];

// Quiz Variables // 
var score = 0
var questionsIndex = 0;

// more Quiz variables //
var currentTime = document.querySelector("#currentTime");
var Timer = document.querySelector("#quiz-count-down-timer");
var questionsDiv = document.querySelector("questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question : 
var secondsLeft = 76;

// holds interval time //
varHoldInterval = 0;

// holds penalty time // 
var holdPenalty = 10;

// creates new element //
var ulCreate = document.createElement("ul");

// Clicking on Start Quiz button starts timer, Timer starts ticking // 
timer.addEventListener("click", function() {
    // checking zero //
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!"
            }
        }, 1000)
    }
    render(questionsIndex)
}



