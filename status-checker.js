import { checkIfNoMovesLeft } from "./board-printer.js";

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
function checkRow(board, player, rowNumber) {
  if (
    board[rowNumber][0] === player &&
    board[rowNumber][1] === player &&
    board[rowNumber][2] === player
  ) {
    return true;
  }

  return false;
}
// let board = [];
// console.log("row check");
// board = [
//   ["X", "_", "_"],
//   ["_", "X", "_"],
//   ["O", "O", "X"],
// ];
// console.log(checkRow(board, "X", 1));
// board = [
//   ["X", "X", "X"],
//   ["_", "X", "_"],
//   ["O", "O", "X"],
// ];
// console.log(checkRow(board, "X", 1));

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
function checkColumn(board, player, columnNumber) {
  if (
    board[0][columnNumber] === player &&
    board[1][columnNumber] === player &&
    board[2][columnNumber] === player
  ) {
    return true;
  }

  return false;
}
// let board = [];
// console.log("col check");
// board = [
//   ["X", "_", "_"],
//   ["_", "X", "_"],
//   ["O", "O", "X"],
// ];
// console.log(checkColumn(board, "X", 2));
// board = [
//   ["X", "X", "X"],
//   ["_", "X", "_"],
//   ["O", "X", "X"],
// ];
// console.log(checkColumn(board, "X", 2));

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
function checkDiagonal(board, player) {
  // It may be easier to use an if statement than a loop here
  // slash
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  //back slash
  if (
    board[2][0] === player &&
    board[1][1] === player &&
    board[0][2] === player
  ) {
    return true;
  }
  return false;
}
// let board = [];
// console.log("diag check");
// board = [
//   ["X", "_", "_"],
//   ["_", "X", "_"],
//   ["O", "O", "_"],
// ];
// console.log(checkDiagonal(board, "X"));
// board = [
//   ["X", "X", "X"],
//   ["_", "X", "_"],
//   ["O", "X", "X"],
// ];
// console.log(checkDiagonal(board, "X"));

/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
  for (let i = 0; i <= 2; i++) {
    if (checkRow(board, player, i) || checkColumn(board, player, i)) {
      return true;
    }
  }

  if (checkDiagonal(board, player)) {
    return true;
  }

  return false;
}

export function isGameOver(board) {
  if (checkIfPlayerWon(board, "X")) {
    console.log("X has won the game!\n");
    return true;
  }

  if (checkIfPlayerWon(board, "O")) {
    console.log("O has won the game!\n");
    return true;
  }

  if (checkIfNoMovesLeft(board)) {
    console.log("Game Over - Its a tie!\n");
    return true;
  }

  return false;
}
