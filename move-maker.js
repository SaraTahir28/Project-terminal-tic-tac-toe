/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function invalidMove() {
  // invalid move:
  console.log("Try again...");
  return;
}

function validMove() {
  console.log("Good move");
  return;
}

function validateMove(move, board) {
  // separate move into row and column
  let movearr = move.split(",");
  const row = movearr[0];
  const col = movearr[1];
  // console.log(row, col);

  // check for invalid input
  // check row and col are int between 1 - 3 and target on board is empty
  if (
    row < 1 ||
    row > 3 ||
    row % 1 > 0 ||
    col < 1 ||
    col > 3 ||
    col % 1 > 0 ||
    board[row - 1][col - 1] !== "_"
  ) {
    invalidMove();
    return false;
  }

  // Implement this at the end if you have time, otherwise you can help your teammates!
  // validMove();
  return true;
}

// const move1 = "1,2";
// const board1 = [
//   ["X", "O", "_"],
//   ["_", "_", "_"],
//   ["_", "_", "_"],
// ];
// validateMove(move1, board1);

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
function makeMove(board, move, player) {
  // validate the move
  if (validateMove(move, board) == false) {
    return false;
  }

  // separate move into row and column
  let movearr = move.split(",");
  const row = movearr[0];
  const col = movearr[1];

  // check valid player input
  if (player === "X" || player === "O") {
    board[row - 1][col - 1] = player;
  }
  //   else {
  //     console.log("invalid player");
  //     return false;
  //   }

  // catch all
  //console.log("error catch all triggered");
  return false;
}
// let move1 = "2,3";
// let board1 = [
//   ["X", "O", "_"],
//   ["_", "_", "_"],
//   ["_", "_", "_"],
// ];
// const player1 = "P";
// makeMove(board1, move1, player1);
// console.log(board1);

/*module.exports = {
  makeMove,
  validateMove,
};*/
export { makeMove, validateMove };