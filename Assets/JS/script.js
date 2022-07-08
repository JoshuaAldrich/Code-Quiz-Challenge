// Array of questions
var questions = [
    {
    question: "Which of the following a common application used by programmers?",
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

var score = 0;
var questionIndex = 0;

// Start working code 
// Variables
var Time = document.querySelector("#Time");
var timer = document.querySelector("#startQuiz");
var questionsDiv = document.querySelector("#questions");
var container = document.querySelector("#container");

var secondsLeft = 80;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 15;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            Time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

