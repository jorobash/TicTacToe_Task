	function startTicTac() {


		for(var i =1; i <= 9; i = i + 1){
			clearBox(i);
		}


		document.set = "x";
		if (Math.random() < 0.5){
			document.set = "o";
		}
		document.winner = null;
		setMessage(document.set + " get started");
	}

	function setMessage(turn) {
		document.getElementById("message").innerText = turn;
	}

	function nextMove(square) {
		if (document.winner != null) {
			setMessage(document.winner + " already won the game.");
		} else	if (square.innerText == ""){
		square.innerText = document.set;
		switchMove();
	} else{
		return 0 ;
	}
	}

	function switchMove() {
		if(checkForWinner(document.set)){
			setMessage("You win " + document.set);
			document.winner = document.set;
		} else if (document.set == "x"){
			document.set = "o";
			setMessage("It's " + document.set + " turn");
		}
		else {
			document.set = "x";
			setMessage("It's " + document.set + " turn");
		}
	}

	function checkForWinner(move) {
		var result = false;
		if(checkRow(1, 2, 3, move) ||
		   checkRow(4, 5, 6, move) ||
		   checkRow(7, 8, 9, move) ||
		   checkRow(1, 4, 7, move) ||
		   checkRow(2, 5, 8, move) ||
		   checkRow(3, 6, 9, move) ||
		   checkRow(1, 5, 9, move) ||
		   checkRow(3, 5, 7, move) 
			){
			result = true;
		}
		return result;
	}

	function checkRow(a, b, c, move) {
		var result = false;
		if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
			result = true;
		}
		return result;
	}	

	function getBox(number){
		return document.getElementById("s" + number).innerText;
	}

	function clearBox(number) {
		document.getElementById("s" + number).innerText = "";
	}