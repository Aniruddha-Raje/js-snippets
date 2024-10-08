var crypto = require('crypto');
var fs = require('fs');

console.log(crypto.createHash('md5').update("Aniruddha").digest("hex"));

let checksumFile = async (filepath) => {

    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('md5');
      const stream = fs.createReadStream(filepath);

      stream.on('error', err => reject(err));
      stream.on('data', chunk => hash.update(chunk));
      stream.on('end', () => resolve(hash.digest('hex')));
    });
};

let test = async () => {

  let respnse = await checksumFile('/Users/aniruddharaje/apps/snippets/md5Text.txt')
  console.log('respnse => ', respnse);
  
}

test();