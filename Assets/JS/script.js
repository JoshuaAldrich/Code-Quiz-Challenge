//Global variables
var time = document.getElementById("time");
var timer = document.getElementById("startQuiz");
var titleDiv = document.getElementById("QTitle");
var container = document.getElementById("container");
var choicesEl = document.getElementById("choices");
var startPage = document.getElementById("startPage");
var questionPage = document.getElementById("questionPage");
var SaveScore = document.getElementById("initials");
var saveIn = document.getElementById("save-initials")
// var feedBack = getElementById("feedback")

var score = 0;
var questionIndex = 0;
var choicesIndex = 0;
var secondsLeft = 80;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 15;

// Array of questions
var questions = [
    {
    question: "Which of the following is a common application used by programmers?",
    choices: ["AutoCAD","Wrightsoft","Blitz","Visual Studios"],
    answer: "Visual Studios"
},
{
    question: "What does DOM stand for?",
    choices: ["Document Object Model","Display Object Management","Desktop Oriented Mode","Data Object Manager"],
    answer: "Document Object Model"
},
{
    question: "The condition in an if / else statement is enclose within _________.",
    choices: ["quotes","curly brackets","parentheses","square brackets"],
    answer: "parentheses"
},
{
    question: "How do you call a function name myFunction?",
    choices: ["function = myFunction()","createMyFunction()","function:myFunction()","function myFunction()"],
    answer: "function myFunction()"
},
{
    question: "The first index of an array is ______.",
    choices: ["0","1","null","none of the above"],
    answer: "0"
},
{
    question: "Javascript uses all but the following.",
    choices: ["strings","numbers","booleans", "alerts"],
    answer: "alerts"
},
];

// Start working code


// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            localStorage.setItem("score", secondsLeft);
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                endGame();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    startPage.classList.add('hide');
    questionPage.classList.remove('hide');
    showQuestion();
});

// Renders questions and choices to page: 
function showQuestion(){
    var displayQuest = questions[questionIndex];
    titleDiv.textContent = displayQuest.question;

// Choices made and populating
function C(element,i){
        choicesEl.innerHTML = "";
    for (let i = 0; i < displayQuest.choices.length; i++) {
        const element = displayQuest.choices[i];
        var createButton = document.createElement("button")
        createButton.setAttribute("class", "feedBack")
        createButton.setAttribute("value", element)
        createButton.textContent = i + 1 + ". " + element;
        createButton.onclick = nextQuestion;
        choicesEl.appendChild(createButton);
}
  }
  C();
};

function nextQuestion() {
    if (this.value === questions[questionIndex].answer) {
        alert("Right")
    } else {
        alert("Wrong")
        secondsLeft -= penalty;
        secondsLeft--;
    }
    if (questionIndex == questions.length - 1) {
        endGame();
    } else {
        questionIndex++;
        showQuestion();
    }
};

function endGame() {
    clearInterval(holdInterval);
    questionPage.classList.add("hide");
    saveIn.classList.remove("hide");
    saveHighscore();
}

var hsSave = document.getElementById("hsSave");
function saveHighscore() {
    var UserHs = document.getElementById("UserHs");

    SaveScore.classList.remove("hide");
    UserHs.textContent = "Score: " + secondsLeft;

    }


    
hsSave.addEventListener("click", function () {

    var inputEl = document.getElementById("initials");
    var initials = inputEl.value.trim();
    
    localStorage.setItem(initials, secondsLeft);
    window.location.replace("highscores.html");
    // var EveryScore = [ {
    //     secondsLeft: secondsLeft,
    //     initials: "initials", 
    // }];
    // var storage = JSON.parse(localStorage.getItem("highscores")) || [];
    // EveryScore.push("initials","secondsLeft");
    // finalScore.push(EveryScore);
    // localStorage.setItem('Score', JSON.stringify(storage));
    
    
    console.log(EveryScore);
    
});

