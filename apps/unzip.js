const extract = require('extract-zip');
const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v4');

let test = async () => {

    let fileToExtract = '/Users/aniruddharaje/Documents/apps/snippets/Archive.zip';
    let extractionLocation = {
        dir: '/Users/aniruddhanarendraraje/Documents/apps/snippets/temp'
    }

    let extractZip = util.promisify(extract).bind(extract);
    await extractZip(fileToExtract,extractionLocation);

    let fsReaddir = util.promisify(fs.readdir).bind(fs);
    let readDirResult = await fsReaddir('./temp');

    let fsRename = util.promisify(fs.rename);

    for(let tmp in readDirResult){
        let file = readDirResult[tmp];
        console.log('file => ', file);
        let random_uuid = await uuid();

        let suffix = await file.substring(file.lastIndexOf("."), file.length);

        await fsRename('./temp/'+file,'/Users/aniruddharaje/Documents/apps/snippets/temp/testdasd_'+random_uuid+suffix);
    }
}

test();