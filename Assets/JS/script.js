//Global variables
var time = document.getElementById("time");
var timer = document.getElementById("startQuiz");
var questionsDiv = document.getElementById("questions");
var container = document.getElementById("container");
var choicesEl = document.getElementById("choices");
var startPage = document.getElementById("startPage");
var questionPage = document.getElementById("questionPage");

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
            secondsLeft--;
            time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
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
    questionsDiv.textContent = displayQuest.question;
     for (let i = 0; i < displayQuest.choices.length; i++) {
    const element = displayQuest.choices[i];
    var createButton = document.createElement("button")
    createButton.setAttribute("class", choices)
    createButton.setAttribute("value", choices)
    createButton.textContent = i + 1 + ". " + element;
    choicesEl.appendChild(createButton);
  }
}

//add ability to click buttons
var choice1 = choices[0];
var choice2 = choices[1];
var choice3 = choices[2];
var choice4 = choices[3];
console.log(choice1);
createButton.addEventListener("click", function() {
    document.getElementsByClassName("choices".textContent);
});
choice2.addEventListener("click", function() {
    selectedChoice(choice2.textContent);
});
choice3.addEventListener("click", function() {
    selectedChoice(choice3.textContent);
});
choice4.addEventListener("click", function() {
    selectedChoice(choice4.textContent);
});


// function checkAnswers(){
//     var selectedChoice = questions[questionIndex].selectedChoice;
//     if (answer === selectedChoice){} 
//     showQuestion();
       
//     else { 
//        showQuestion();
//        timer -= 10;
//    }
//    };