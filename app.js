var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;

	if (Uscore === 20) {
		alert("Bonus Button Unlocked!");
		timerbutton();
		setTimeout(removeButton, 4000);
	}


	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};

var timerbutton = function() {
	document.getElementById('bonus').innerHTML = 
		'<input onclick="bonuspress()" type="image" id="button" src="button.jpg">';
}

var removeButton = function() {
	document.getElementById('bonus').innerHTML = "";
}

var bonuspress = function() {
	Uscore = Uscore + 10;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
}