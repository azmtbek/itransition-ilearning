const getWinner = (winner: string): string => {
  let out_winner = '';
  if (winner === "Win") out_winner = "You've won!";
  else if (winner === "Draw") out_winner = "Draw!";
  else if (winner === "Lose") out_winner = "You've lost!";
  return out_winner;
};
const calculateWinner = (a: number, b: number, n: number) => {
  const p = Math.floor(n / 2);
  const STATUS: { [key: number]: string; } = {};
  STATUS[-1] = "Win";
  STATUS[0] = "Draw";
  STATUS[1] = "Lose";
  const num = Math.sign((a - b + p + n) % n - p);
  return STATUS[num];
};


export {
  getWinner,
  calculateWinner
};