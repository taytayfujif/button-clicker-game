var Uscore = 0;

var highscore = 10;

function press() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};