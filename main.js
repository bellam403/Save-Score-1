score = 0;

function updateScore()
{
	score = score + 1;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}


function nextPage() {
open("https://bellam403.github.io/Save-Score-2/")
}
