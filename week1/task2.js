const fs = require('node:fs');
const {
  createHash,
} = require('node:crypto');
const path = require('node:path');
const hash = createHash('sha256');
const folderPath = './task2/'
const ansFolderPath = './task2ans/'

fs.readdirSync(folderPath)
  .map(fileName => {
    try {
      const stats = fs.readFileSync(path.join(folderPath,fileName));

      hash.update(stats);
      const ans = hash.digest('hex')
      console.log(ans);
      fs.writeFileSync(path.join(ansFolderPath,fileName), ans, { flag: 'w+' });
    } catch (err) {
      console.error(err);
    }
  })
