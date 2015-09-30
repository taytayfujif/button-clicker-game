var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore === 20) {
		alert("Bonus Button Unlocked!");
		document.getElementById('bonus').innerHTML = 
		'<input onclick="bonuspress()" type="image" id="button" src="button.jpg">';
	}


	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};

var bonuspress = function() {
	Uscore = Uscore + 9;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
}