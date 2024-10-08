const fs = require('fs');
const zlib = require('zlib');

let unzipFolder = async () => {
    const directoryFiles = fs.readdirSync('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/123456.zip');

    Promise.all(directoryFiles.map(filename => {
      return new Promise((resolve, reject) => {
        const fileContents = fs.createReadStream(`./data/${filename}`);
        const writeStream = fs.createWriteStream(`./data/${filename.slice(0, -3)}`);
        const unzip = zlib.createGunzip();
        fileContents.pipe(unzip).pipe(writeStream).on('finish', (err) => {
          if (err) return reject(err);
          else resolve();
        })
      })
    })).then(console.log('done'));
};

let zipFilesInFolder = async () => {
    const directoryFiles = fs.readdirSync('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/sharp');

    Promise.all(directoryFiles.map(filename => {
    return new Promise((resolve, reject) => {
        const fileContents = fs.createReadStream(`/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/sharp/${filename}`);
        const writeStream = fs.createWriteStream(`/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/sharp/${filename}.zip`);
        const zip = zlib.createGzip();
        fileContents.pipe(zip).pipe(writeStream).on('finish', (err) => {
        if (err) return reject(err);
        else resolve();
        })
    })
    }))
    .then(console.log('done'));
};

zipFilesInFolder();