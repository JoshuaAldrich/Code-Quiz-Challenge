//need to create variables

var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


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
