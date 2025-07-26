import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});


test("should return false if the board is completely empty", () => {
    const board = [
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("should return false if there is one move left", () => {
    const board = [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['O', 'X', '_']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("should return false if only top row is filled", () => {
    const board = [
      ['X', 'O', 'X'],
      ['_', '_', '_'],
      ['_', '_', '_']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("should return false if the board has a diagonal win but is not full", () => {
    const board = [
      ['X', 'O', 'O'],
      ['O', 'X', 'O'],
      ['_', '_', 'X']
    ];
    expect(checkIfNoMovesLeft(board)).toBe(false);
  });

  test("should return true for an empty array (edge case)", () => {
    const board = [];
    expect(checkIfNoMovesLeft(board)).toBe(true);
  });
