import { table } from 'table';

import type { Moves } from "./types.js";

const header = (headerString: string) => {
  const length = headerString.length;
  const diff = Math.floor((76 - length) / 2) + length;
  console.log();
  console.log("#".repeat(76));
  console.log(headerString.padStart(diff, " "));
  console.log("#".repeat(76));
  console.log();
};

const availabeMoves = (moves: Moves) => {
  console.log("Available moves:");
  for (const move in moves) {
    console.log(`${move}: ${moves[move]}`);
  }
  console.log(`0: exit`);
  console.log(`?: help`);
};

const STATUS: Moves = {};
STATUS[-1] = "Win";
STATUS[0] = "Draw";
STATUS[1] = "Lose";
const calculateWinner = (a: number, b: number, n: number, p: number) => Math.sign((a - b + p + n) % n - p);

const getTable = (moves: Moves, n: number, p: number,) => {
  let data = Array(n + 1).fill(0).map(_ => Array(n + 1));
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === 0 && j === 0) {
        data[i][j] = "v PC\\User >";
        continue;
      }
      if (i == 0 || j == 0) {
        data[i][j] = moves[i + j];
        continue;
      }
      data[i][j] = STATUS[calculateWinner(i, j, n, p)];
    }
  }
  return table(data);
};



const getWinner = (winner: number): string => {
  let out_winner = '';
  if (STATUS[winner] === "Win") out_winner = "You've won!";
  else if (STATUS[winner] === "Draw") out_winner = "Draw!";
  else if (STATUS[winner] === "Lose") out_winner = "You've lost!";
  return out_winner;
};
export { header, availabeMoves, getWinner, getTable, calculateWinner };