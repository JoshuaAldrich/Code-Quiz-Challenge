//need to create variables
var quiz = document.getElementById("quiz");
var resultsE1 = document.getElementById("result");
var FinalScoreE1 = document.getElementById("finalScore");
var gameOver = document.getElementById("gameOver");
var questionsE1 = document.getElementById("questions");
var quizTimer = document.getElementById("quizTimer");
var startQuizbBtn = document.getElementById("start");
var startQuizDiv = document.getElementById("startbtn");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("highscore");
var highscoreInput = document.getElementById("quiz");
var highscoreDisplay = document.getElementById("quiz");
var endgameBtn = document.getElementById("quiz");
var submitScoreBtn = document.getElementById("quiz");
var highscoreDisplay = document.getElementById("quiz");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var finalQuestionsIndex = document.getElementById("finalIndex");
var currentQuestionsIndex = document.getElementById("currentIndex");
var timeLeft = document.getElementById("timeLeft");
var timeInterval = document.getElementById("timeInterval");
var score = 0;
var 

//Questions Objects
var quizQuestions = [{
    question: "Which of the following a common application used by programmers?",
    choiceA: "AutoCAD",
    choiceB: "Wrightsoft",
    choiceC: "Blitz",
    choiceD: "Visual Studios",
    correctAnswer: "d"
},

{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Desktop Oriented Mode",
    choiceD: "Data Object Manager",
    correctAnswer: "a"
},

{
    question: "How do you make comments in HTML?",
    choiceA: "<!-- text -->",
    choiceB: "/* text */",
    choiceC: "// text //",
    choiceD: "<text/>",
    correctAnswer: "a"
},

{
    question: "The condition in an if / else statement is enclose within _________.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correctAnswer: "c",
},
{
    question: "How do you call a function name myFunction?",
    choiceA: "function = myFunction()",
    choiceB: "createMyFunction()",
    choiceC: "function:myFunction()",
    choiceD: "function myFunction()",
    correctAnswer: "d",
},
{
    question: "The first index of an array is ______.",
    choiceA: "0",
    choiceB: "1",
    choiceC: "null",
    choiceD: "none of the above",
    correctAnswer: "a",
},
{
    question: "Javascript uses all but the following.",
    choiceA: "strings",
    choiceB: "numbers",
    choiceC: "booleans", 
    choiceD: "alerts",
    correctAnswer: "d",
},
];

//function to cycle objects questions and answers
function generateQuizQuestion(){
    if (currentQuestionsIndex === finalQuestionsIndex){
        return score();
}

var currentQuestion = quizQuestions[currentQuestionsIndex];
questionsE1.innerHTML = "<p>" + currentQuestion.question + "</p>";
buttonA.innerHTML = currentQuestion.choiceA;
buttonB.innerHTML = currentQuestion.choiceB;
buttonC.innerHTML = currentQuestion.choiceC;
buttonD.innerHTML = currentQuestion.choiceD;
};

//start quiz to start timer
function startQuizbBtn() {
    generateQuizQuestion();

    function startTimer(){
        console.log('timer suppose to go')
        var sec = 59;
        var timer = setInterval(function(){
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
}

//show scores and save high scores

//clear high scores

//start the quiz
startQuizDiv.addEventListener("click",startQuizbBtn);

