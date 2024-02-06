// hmac gen
import {
  createHmac,
  randomBytes
} from 'node:crypto';

// requirement at least 256 bits length
// 32 bytes is 256 bits
const KEY_SIZE = 32;

// hmac generator
const getHMAC = (computers_move: string) => {
  const key = randomBytes(KEY_SIZE).toString('hex');
  const hmac = createHmac('SHA3-256', key);

  hmac.update(computers_move);
  return { hmac: hmac.digest("hex"), key: key };
};
// random generator 
function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export { getHMAC, getRandomNumber };