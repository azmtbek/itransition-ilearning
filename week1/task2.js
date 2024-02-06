const fs = require('node:fs');
const {
  createHash,
} = require('node:crypto');
const path = require('node:path');
const folderPath = './task2/'
const ansFolderPath = './task2ans/'

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
      fs.writeFileSync(path.join(ansFolderPath, fileName), ans, { flag: 'w' });
      console.log(c++)
    } catch (err) {
      console.error(err);
    }
  })
c=0
// fs.readdirSync(ansFolderPath)
//   .map(fileName => {
//     if (!fs.lstatSync(path.join(ansFolderPath, fileName)).isFile()) return
//     try {
//       const stats = fs.readFileSync(path.join(ansFolderPath, fileName));
//       arr.push(stats.toString('hex'))
//       console.log(c++)
//     } catch (err) {
//       console.error(err);
//     }
  // })
  
try {
  arr.sort((a, b) => a.toString().localeCompare(b.toString()))
  console.log(arr)
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