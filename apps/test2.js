let fs = require('fs');
let util = require('util');

let test = async (filePath, fileContent) => {
    let fsWriteFile = util.promisify(fs.writeFile).bind(fs);
    await fsWriteFile(filePath, fileContent);
};

test('/Users/aniruddharaje/Documents/apps/md5TestFile.txt','Aniruddha');