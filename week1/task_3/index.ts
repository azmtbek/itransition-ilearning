import {
  header,
  availabeMoves,
  getWinner,
  getTable,
  calculateWinner
} from './printer.js';
import { isValidArgsLength, isValidInput } from './validator.js';
import { getHMAC, getRandomNumber } from './hmac.js';
import { input } from '@inquirer/prompts';


import type { Moves } from './types.js';
// generate header
header("THE GAME: rock-paper-scissors and more ");
const args = process.argv.slice(2);
const n = args.length;
const p = Math.floor(n / 2);

// exit if args length not valid
if (isValidArgsLength(n) === false) {
  process.exit();
}
// generate moves
const moves: Moves = {};
for (let i = 0; i < n; i++) {
  moves[i + 1] = args[i];
}
let cur_move = '';

while (cur_move !== '0') {
  // get comp's move
  const comps_move = getRandomNumber(n);
  const { hmac, key } = getHMAC(comps_move.toString());

  console.log("HMAC: ", hmac);
  availabeMoves(moves);

  const move = await input({ message: 'Enter your move: ' });
  if (move === '?') {
    header("Win/Draw/Lose reference table: ");
    console.log(getTable(moves, n, p));
    continue;
  } else if (move === '0') {
    header("See you again!");
    break;
  } else if (isValidInput(move, n) === false) {
    console.log("Wrong input, enter again!");
    console.log();
    console.log();
    continue;
  }
  console.log("Your move:", moves[+move]);

  // the winner is
  console.log("Comp's move: ", moves[comps_move]);

  const winner = calculateWinner(comps_move, +move, n, p);
  console.log(getWinner(winner));
  console.log("HMAC key: ", key);
  console.log();
  console.log();
}