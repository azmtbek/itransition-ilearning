const fs = require('node:fs');
const {
  createHash,
} = require('node:crypto');
const path = require('node:path');
const folderPath = './task2/'

let c = 0
const arr = []

fs.readdirSync(folderPath)
  .map(fileName => {
    if (!fs.lstatSync(path.join(folderPath, fileName)).isFile()) return
    try {
      const stats = fs.readFileSync(path.join(folderPath,fileName));
      const hash = createHash('SHA3-256');
      hash.update(stats);
      const ans = hash.digest('hex')
      arr.push(ans)
    } catch (err) {
      console.error(err);
    }
  })

try {
  arr.sort((a, b) => a.toString().localeCompare(b.toString()))
  arr.push("azamatbek.dev@gmail.com")
  const hash = createHash('SHA3-256');
  hash.update(arr.join(''));
  const ans = hash.digest('hex')
  console.log(ans);
  fs.writeFileSync('task2ans.txt', ans, { flag: 'w' });

} catch (err) {
  console.error(err);
}