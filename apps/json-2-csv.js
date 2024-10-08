var json2csvClient = require('json-2-csv');
var util = require('util');
var fs = require('fs');

let test = async() => {
    var options = {
        delimiter : {
            wrap  : '"', // Double Quote (") character
            field : ',', // Comma field delimiter
            array : ';', // Semicolon array value delimiter
            eol   : '\n' // Newline delimiter
        },
        prependHeader    : true,
        sortHeader       : false,
        trimHeaderValues : true,
        trimFieldValues  :  true,
        keys             : ['Make', 'Model', 'Year', 'Specifications.Mileage', 'Specifications.Trim']
    };

    let fsReadFile = util.promisify(fs.readFile).bind(fs);
    let jsonData = await fsReadFile('./testJson.json');

    let clientjson2csv = util.promisify(json2csvClient.json2csv).bind(json2csvClient);
    let csvData = await clientjson2csv(jsonData,options);

    let fsWriteFile = util.promisify(fs.writeFile).bind(fs);
    await fsWriteFile('./testCSV.csv',csvData);
};

test();