
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
    }
} 5000);