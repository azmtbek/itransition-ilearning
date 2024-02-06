import { table } from 'table';
import { calculateWinner } from './winner.js';

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



const getTable = (moves: Moves) => {
  const n = Object.keys(moves).length;
  const p = Math.floor(n / 2);
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
      data[i][j] = calculateWinner(i, j, n);
    }
  }
  return table(data);
};




export { header, availabeMoves, getTable };