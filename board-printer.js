/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
// Export the function so it can be used in other files/modules
export function printBoard(board) {
    // Loop through each row of the board
    for (let i = 0; i < board.length; i++) {
        // Create a new array by transforming each cell in the current row
        // Replace '_' with a space ' ', and leave 'X' or 'O' as-is
        let rowArray = board[i].map(cell => {
            if (cell === '_') {
                return ' '; // Display blank space for empty cells
            } else {
                return cell; // Keep the original character ('X' or 'O')
            }
        });

        // Join the row elements with "  |  " to create a nice display format
        let row = rowArray.join('  |  ');

        // Print the formatted row to the console with two spaces at the beginning
        console.log('  ' + row);

        // If this is not the last row, print a separator line underneath
        if (i < board.length - 1) {
            console.log('=================');
        }
    }

    // After the last row, print one final line to close the board
    console.log('=================');
}



// Function to check if there are any '_' left (i.e., if moves are possible)
export function checkIfNoMovesLeft(board) {
    for (let row of board) {
        if (row.includes('_')) {
            return false;
        }
    }
    return true;
}

// Test the functions
const board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];

printBoard(board);  // Outputs the board
console.log("No moves left?", checkIfNoMovesLeft(board));  // false