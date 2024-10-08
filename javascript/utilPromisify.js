let environment = process.env.Environment != null ? process.env.Environment : "Local";
let fs   = require(environment == 'Local' ? 'fs': 'fs');
let util = require('util');

let test = async () => {

    let keyPath = '/home/user/office/pocs/node-apps/sample-apps/Apps/public.key';
    const fsReadFile = util.promisify(fs.readFile).bind(this);
    var privateKey  = await fsReadFile(keyPath, 'utf8');
    console.log(privateKey);
};

test();