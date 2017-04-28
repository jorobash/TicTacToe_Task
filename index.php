<?php
session_start();
?>
<a href="logout.php" target="_blank">Exit</a>


<!DOCTYPE html>
<html>
<head>
	<title>Tic Tac Toe</title>

	<link rel="stylesheet" type="text/css" href="./CSS/main.css" >
	<script type="text/javascript" src="./js/tic.js"></script>

</head>

<body onload="startTicTac()">


<table border="1px solid black" id=board>
	<tr class="row">
		<td id="s1" class="Square" onclick="nextMove(this);"></td>
		<td id="s2" class="Square" onclick="nextMove(this);"></td>
		<td id="s3" class="Square" onclick="nextMove(this);"></td>
	</tr>
	<tr class="row">
		<td id="s4" class="Square" onclick="nextMove(this);"></td>
		<td id="s5" class="Square" onclick="nextMove(this);"></td>
		<td id="s6" class="Square" onclick="nextMove(this);"></td>
	</tr>
	<tr class="row">
		<td id="s7" class="Square" onclick="nextMove(this);"></td>
		<td id="s8" class="Square" onclick="nextMove(this);"></td>
		<td id="s9" class="Square" onclick="nextMove(this);"></td>
	</tr>
</table>

	<a id="id-2" href="javascript:startTicTac();">reset</a>


<div id="message"></div>
</body>
</html>
