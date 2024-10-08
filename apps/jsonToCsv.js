const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;
const util = require('util');

let test = async() => {

    let fsReadFile = util.promisify(fs.readFile).bind(fs);
    let jsonData = await fsReadFile('./testJson.json');

    let toCSV = util.promisify(csvjson.toCSV).bind(csvjson);
    let csvData = await toCSV(jsonData,{headers: 'key'});

    let fsWriteFile = util.promisify(fs.writeFile).bind(fs);
    await fsWriteFile('./testCSV.csv',csvData);
};

test();