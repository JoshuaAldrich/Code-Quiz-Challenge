var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var startOver = document.querySelector("#startOver");

// Clear Scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Local Storage 
var EveryScore = localStorage.getItem("EveryScore");
EveryScore = JSON.parse(EveryScore);

if (EveryScore !== null) {

    for (var i = 0; i < EveryScore.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = EveryScore[i].initials + " " + EveryScore[i].score;
        highScore.appendChild(createLi);

    }
}
// Go to index page
startOver.addEventListener("click", function () {
    window.location.replace("./index.html");
});