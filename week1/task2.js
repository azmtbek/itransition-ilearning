const fs = require('node:fs');
const {
  createHash,
} = require('node:crypto');
const path = require('node:path');
const folderPath = './task2/'
const ansFolderPath = './task2ans/'

fs.readdirSync(folderPath)
  .map(fileName => {
    try {
      const stats = fs.readFileSync(path.join(folderPath,fileName));
      const hash = createHash('SHA3-256');
      hash.update(stats);
      const ans = hash.digest('hex')
      console.log(ans);
      fs.writeFileSync(path.join(ansFolderPath,fileName), ans, { flag: 'w' });
    } catch (err) {
      console.error(err);
    }
  })
const arr = []
fs.readdirSync(ansFolderPath)
  .map(fileName => {
    try {
      const stats = fs.readFileSync(path.join(ansFolderPath, fileName));
      arr.push(stats)
    } catch (err) {
      console.error(err);
    }
  })
  
try {
  arr.sort((a, b) =>a.toString().localeCompare(b.toString()))
  fs.writeFileSync('task2sum.data', arr.join(''), { flag: 'w' });
  const stats = fs.readFileSync('task2sum.data');
  const hash = createHash('SHA3-256');
  hash.update(stats);
  const ans = hash.digest('hex')
  console.log(ans);
  fs.writeFileSync('task2ans.txt', ans, { flag: 'w' });

} catch (err) {
  console.error(err);
}