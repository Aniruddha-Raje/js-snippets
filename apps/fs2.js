var fs = require('fs');
let util = require('util');

let test = async () => {

    let fileContent = "Code,Expiry\nAniruddha,1234567890"

    let fsWriteFile = util.promisify(fs.writeFile).bind(fs);
    await fsWriteFile('/Users/aniruddharaje/apps/csvTest.csv', fileContent);
};

test();