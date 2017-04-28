<?php
session_start();
$link = mysqli_connect('localhost', 'root', '', 'TicTacToe');
mysqli_query($link, 'SET NAMES utf8');
