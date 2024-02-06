console.log("#".repeat(70))
console.log("THE GAME: rock-paper-scissors and more ".padStart(55," "))
console.log("#".repeat(70))
const args = process.argv.slice(2)
console.log(args)
// error out if args length not valid
if (args.length < 3) {
  console.log("please enter more than 2 arguments")
  process.exit();
}
if (args.length % 2 === 0) {
  console.log("please enter odd number of arguments")
  process.exit();
}


// print moves availabe
console.log("Available moves:")
let i = 1
let moves: {[key:number]:string} = {}
for (const move of args) {
  moves[i++]=move
}
for (const move in moves){
  console.log(`${move}: ${moves[move]}`)
}
console.log(`0: exit`)
console.log(`?: help`)

import { input } from '@inquirer/prompts';

const move = await input({ message: 'Enter your move: ' });
if (move === '?') {
  console.log("this is help prompt")
} else if (move === '0') {
  console.log("See you again!")
  process.exit(0)
}
console.log("Your move:", moves[+move])

import { table } from 'table';

let first = `v PC\\User >`
const n = args.length
const p= Math.floor(n/2)
const formula = (a: number, b: number) => Math.sign((a - b + p + n) % n - p)
const STATUS: {[key:number]:string} = {}
STATUS[-1] = "Win"
STATUS[0]="Draw"
STATUS[1] = "Lose"
let data =Array(n+1).fill(0).map(_=>Array(n+1))
for (let i = 0; i < n + 1; i++){
  for (let j = 0; j < n + 1; j++){
    if (i === 0 && j === 0) {
      data[i][j] = first
      continue
    }
    if (i == 0 || j == 0) {
      data[i][j] = moves[i+j]
      continue
    }
    data[i][j] = STATUS[formula(i,j)]
    
  }
}


// random generator 
function getRandomNumber(max:number) {
  return Math.floor(Math.random() * max)+1;
}
const comp_move = getRandomNumber(n)
console.log("Comp's move: ", moves[comp_move])

// the winner is
const winner = formula(comp_move, +move)
let out_winner=''
if (STATUS[winner] === "Win") out_winner = "You win"
else if (STATUS[winner] === "Draw") out_winner = "Draw"
else if (STATUS[winner] === "Lose") out_winner = "You lose"
console.log(out_winner)


// hmac gen
import {
  createHmac,
  randomBytes
} from 'node:crypto';

const buf = randomBytes(Math.floor(256/8)).toString('hex')
const hmac = createHmac('SHA3-256', buf);

hmac.update(comp_move.toString());
console.log("hmac: ",hmac.digest('hex'));
console.log("key:  ",buf);
console.log(table(data));