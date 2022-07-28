var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var startOver = document.querySelector("#startOver");
// var inputEl = document.getElementById("input");

// Clear Scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Local Storage 
var EveryScore = localStorage.getItem("EveryScore");
EveryScore = JSON.parse(EveryScore);

    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "score") {
            continue
        }

        var createLi = document.createElement("li");
        createLi.textContent = localStorage.key(i) + " " + localStorage.getItem(localStorage.key(i));
        highScore.appendChild(createLi);
    


    }
// Go to index page
startOver.addEventListener("click", function () {
    window.location.replace("index.html");
});