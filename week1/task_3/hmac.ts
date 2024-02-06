// hmac gen
import {
  createHmac,
  randomBytes
} from 'node:crypto';

// hmac generator
const getHMAC = (computers_move: string) => {
  const key = randomBytes(Math.floor(256 / 8)).toString('hex');
  const hmac = createHmac('SHA3-256', key);

  hmac.update(computers_move);
  return { hmac: hmac.digest("hex"), key: key };
};
// random generator 
function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export { getHMAC, getRandomNumber };