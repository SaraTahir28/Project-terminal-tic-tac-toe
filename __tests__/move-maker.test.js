const { validateMove } = require("../move-maker.js");
const { makeMove } = require("../move-maker.js");

test("validateMove should return true if the target is a valid location and the location is empty", () => {
  let board = [
    ["X", "O", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  let move = "1,3";
  expect(validateMove(move, board)).toBe(true);
});

test("validateMove should return false if the target location is not empty", () => {
  let board = [
    ["X", "O", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  let move = "1,1";
  expect(validateMove(move, board)).toBe(false);
  move = "1,2";
  expect(validateMove(move, board)).toBe(false);
});

test("validateMove should return false if the target location is not inside the board", () => {
  let board = [
    ["X", "O", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  let move = "4,1";
  expect(validateMove(move, board)).toBe(false);
  move = "1,7";
  expect(validateMove(move, board)).toBe(false);
});
