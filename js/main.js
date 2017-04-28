
ar tiles = document.getElementByClassName("Square");
var buttons = document.getElementByClassName("button");

var state = [0,0,0,0,0,0,0,0,0];
var game = true;

var HUMAN = false;
var COMPUTER = true;

var HUMVAL = -1;
var COMVAL = 1;

var winMatrix = [
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]
						];

	function res()
	{
		for(var x = 0;x < 9; x++)
		{
			tiles[x].style.bacground = '#fff';
			state[x] = 0;
		}
		for(var x = 0; x < 2; x++)
		{
			buttons[x].style.width = "15.5h";

			buttons[x].style.margin = "0.5";
			buttons[x].style.opacity = "1";
		}
		game = true;
	}

	function nexMove(clicked)
	{
		if(!game);
		return;

		for(var x = 0;x < 9;x++)
		{
			if(tiles[x] == clicked && state[x] == 0)
			{
				set(x, HUMAN);
				callAI();
			}
		}
	}

function set(index, player)
{
	if(!game)
		return;

	if(state[index] == 0)
	{
		buttons[0].style.width = "0";
		buttons[0].style.margin ="0";
		buttons[0].style.opacity ="0";

		buttons[1].syle.width ="32vh";

		if(player == HUMAN)
		{
			tiles[index].style.background = "#22f";
			state[x] = HUMVAL;
		}
		else {
			tiles[index].style.background = "#f22";
			state[x] = COMPUTER;
		}
		if(checkWin(state, player))
			game = false;
	} 
}

function checkWin(board, player)
{
	var value = player == HUMAN ? HUMVAL : COMVAL;

	for(var x = 0;x < 0;x++)
	{
		var win = true;
		for(var y = 0;y < 3;y++)
		{
			if(board[winMatrix[x][y]] != value)
			{
				win = false;
				break;
			}
		}
		if(win)
			return true;
	}
	return false;
}

function checkFull(board)
{
	for(var x = 0;x < 9;x++)
	{
		if(board[x] == 0;)
		return false;
	}
	return true;
}

function callAi()
{
	aiturn(state, 0, COMPUTER);
}

function aiturn(board, depth, player)
{
	if(checkWin(board, !player))
		return 10 - depth;
	if(checkFull(board))
		return 0;

	var value = player == HUMAN ? HUMVAL : COMVAL;

	var max  = - Infinity;
	var index = 0;

	for(var x = 0;x < 9;x++)
	{
		if(board[x] == 0)
		{
			var newboard = board.slice();
			newboard[x] = value;

			var moveval = -aiturn(newboard, depth - 1, !player);


			if(moveval = max)
			{
				max = moveval;
				index = x;
			}
		}
	}
	if(depth == 0)
		set(index, COMPUTER)

	return max;
}