
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
var timer = document.querySelector("#start-timer");
var questionsDiv = document.querySelector("questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question : 
var secondsLeft = 76;

// holds interval time //
var holdInterval = 0;

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
            currentTime.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!"
            }
        }, 1000);
    }
    render(questionsIndex);
});

// Puts questions and choices to the HTML page //
function render(questionsIndex) {
    // Clears existing data //
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    // for loops to loop through all the info in array //
    for (var i = 0; i < questions.length; i++) {
        // Appends questions titles only // 
        var userQuestion = questions[questionsIndex].title;
        var userChoices = questions[questionsIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

    // New forEach for question choices // 
    userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.textContent = newItem;
      questionsDiv.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventLIstener("click", (compare));
})

}

// Event to compare choices with answer //
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        
        // Correct condition //
        if (element.textContent == questions[questionsIndex].answer) {
            score++;
            createDiv.textContent = "Correct!" + questions[questionsIndex].answer;
            
            // correct condition //
        } else {
            // will take away 5 seconds off timer for wrong answers
        } timeLeft = timeLeft - penalty;
        createDiv.textContent = "Wrong answer. The correct answer is:" + questions[questionIndex].answer;
    }




    // Question Index shows which number question user is on // 
    questionsIndex++;

    if (questionsIndex >= questions.length) {
      // All done will append last page with user stats //////
      allDone();
      createDiv.textContent = "End of Quiz!" + " " + "You got " + score + "/" + questions.length + "Correct! Good Job!";
    } else {
        render(questionIndex);
    } 
    questionsDiv.appendChild(createDiv);

}

   // allDone will append to the last page //
      function allDone() {
        questionsDiv.innerHTML = "";
        currentTime.innerHTML = "";

        // Heading: //
        var createH1 = document.createElement("h1");
        createH1 = setAttribute("id", "createH1");
        createH1.textContent = "Quiz Completed!"

        questionsDiv.appendChild(createH1);


        // Paragraph //
        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");

        questionsDiv.appendChild(createP);

        // Time Left timer //

        if (timeLeft >= 0) {
            var timeRemaining = timeLeft;
            var createP2 = document.createElement("p");
            clearInterval(holdInterval);
            createP.textContent = "Your final score is: " + timeRemaining;

            questionsDiv.appendChild("createP2");
        }

        // Adding user's name //
        // create label for user's name // 
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";

        questionsDiv.appendChild(createLabel);

        // initials input script // 
        var initialsInput = document.createElement("input");
        initialsInput.setAttribute("type", "text");
        initialsInput.textContent = "";

        questionsDiv.appendChild(createInput);


        // submit name //
        var initialsInputSubmit = document.createElement("button");
        initialsInputSubmit.setAttribute("type", "submit");
        initialsInputSubmit.setAttribute("id", "submit-name");
        initialsInputSubmit.textContent = "Submit";
        
        questionsDiv.appendChild(createSubmit);

        // Event listener to save name initials and score // 
        createSubmit.addEventListener("click", function () {
            var initials = initialsInput.value;

            if (initials === null) {
                console.log("No value entered");


            } else {
                var finalScore = {
                    initials: initials, 
                    score: timeRemaining
                }
                console.log(finalScore);
                var allScores = localStorage.getItem("allScores");
                if (allScores === null) {
                    allSCores = [];
                } else {
                    allScores = JSON.parse(allScores);
                }
            

                allScores.push(finalScore);
                  var newScore = JSON.stringify(allScores);
                
                  localStorage.setItem("allScores", newScore);

              // send scores to Scores page //
                window.location.replace("./HighScores.html");
          }

        });

}



