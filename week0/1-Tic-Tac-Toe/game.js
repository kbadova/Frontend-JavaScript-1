"use strict";
var prompt = require('prompt-sync')();

function printBoard(board) {
  console.log("This is the current state of the board:");
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

function checkPosition(position, xTurn){
  if (position > 3 || position < 1){
      console.log("Your choice is out of the board's boundaries! \n Choose again! ")
    } else if (isNaN(position)){
      console.log("Enter the position numerically!")
    } else{
      xTurn = !xTurn;
    }
  return xTurn;
}

function turn(player){
  console.log("It is " + player +"'s turn: ");
}

function transposeMatrix(board){
  var newMatrix = [];
  for (var x = 0; x < board[0].length; x++) {
    newMatrix[x] = [];
    for (var y = 0; y < board[0].length; y++) {
        newMatrix[x][y] = board[y][x];
    }
  }
  return newMatrix;
}
function getFirstDiagonal(board){
  var diagonals = [];
  for(var i = 0; i < board[0].length; i++){
    for (var j = 0; j < board[0].length; j++) {
        if (i == j){
          diagonals.push(board[i][j]);
        }
    }
  }
  return diagonals
}
function getSecondDiagonal(board){
  var diagonals = [];
  for(var i = 0; i < board[0].length; i++){
    diagonals.push(board[board.length - 1 - i][i]);
    }
  return diagonals
}
function checkPositionIsWIinning(board){
  var firstDiagonal = getFirstDiagonal(board);
  var secondDiagonal = getSecondDiagonal(board);
  var transposedMatrix = transposeMatrix(board);
  for(var row = 0; row < board[0].length; row++){
    if (board[row].every(elem=>elem=="O") || board[row].every(elem=>elem=="X") || transposedMatrix[row].every(elem=>elem=="O") || transposedMatrix[row].every(elem=>elem=="X")){
      return true;
    }
    if (firstDiagonal.every(elem=>elem=="O") || firstDiagonal.every(elem=>elem=="X")){
      return true;
    }
    if (secondDiagonal.every(elem=>elem=="O") || secondDiagonal.every(elem=>elem=="X")){
      return true;
    }
    return false
  }
}
// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    whoseTurn = true,
    player = null,
    playerChoice = [],
    position = null;

  var nicknamePlayer1 ={name: prompt("Enter the nickname of Player1: "), sign:"X"};
  var nicknamePlayer2 = {name: prompt("ENter the nickname of Player2: "), sign:"O"};

  while(true) {

    if(xTurn) {
      playerChoice = [];
      printBoard(board);
      
      if (whoseTurn){
        turn(nicknamePlayer1.name);
      } else {
        turn(nicknamePlayer2.name);
      }
      console.log("Place for x");
    }else {
      console.log("Place for y");
      
    }

    // this is blocking prompt
    position = prompt("x y>");
    xTurn = checkPosition(position, xTurn);
    playerChoice.push(position);

    if (!xTurn){
      whoseTurn = !whoseTurn;
    }
    else{
      var x = playerChoice[0];
      var y = playerChoice[1];
      if (board[x-1][y-1] == "*"){
        if (whoseTurn){
          board[x - 1][y - 1] = nicknamePlayer1.sign 
        } else{
          board[x - 1 ][y - 1] = nicknamePlayer2.sign 
        }
        if (checkPositionIsWIinning(board, x, y)){
          console.log("Player won");
          return
        }
      } else {
        console.log("This position is already taken");
        whoseTurn = !whoseTurn;
      }
    }
  }
}

gameLoop();
