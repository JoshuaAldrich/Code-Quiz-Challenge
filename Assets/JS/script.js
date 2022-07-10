//Global variables
var time = document.getElementById("time");
var timer = document.getElementById("startQuiz");
var questionsDiv = document.getElementById("questions");
var container = document.getElementById("container");
var choices = document.getElementById("choices");
var startpage = document.getElementById("startpage")
var questionpage = document.getElementById("questionpage")

var score = 0;
var questionIndex;
var choicesIndex;
var secondsLeft = 80;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 15;
// Creates new element
var ulCreate = document.createElement("ul");

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
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    questionpage.classList.remove('hide');
    showQuestion();
    showChoices();
    return questionIndex;
});

// Renders questions and choices to page: 
function showQuestion() {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++)
        // Appends question only
        var userQuestion = questions[0].question;
        questionsDiv.textContent = userQuestion;
    };


function showChoices() {
    for (var i = 0; i < questions.length; i++)
    //Appends choices only
    var userChoices = questions[0].choices;
    choices.textContent = userChoices;
    };


      
