// The File System module has methods for creating new files:
// fs.open()
// fs.writeFile()  replaces the specified file and content.
// fs.appendFile() method appends specified content to a file. 
// If the file does not exist, the file will be created
// fs.unlink() method deletes the specified .
// fs.rename() method renames the specified file
var fs = require('fs');
let util = require('util');
const uuid = require('uuid/v4');


// console.log("~~~~~~~~~~~~");
// let tempFiles = await fsReaddir('/tmp/extracted');
// tempFiles.forEach(function (file) {
//   console.log(file); 
// });

console.log("~~~~~~~~~~~~");

let fsRename = async() => {
  let fsReaddir = util.promisify(fs.readdir).bind(fs);
  let readDirResult = await fsReaddir('./temp');

  let fsRename = util.promisify(fs.rename);

  for(let tmp in readDirResult){
      let file = readDirResult[tmp];
      console.log('file => ', file);
      let random_uuid = await uuid();

      let suffix = await file.substring(file.lastIndexOf("."), file.length);

      await fsRename('./temp/'+file,'/Users/aniruddharaje/apps/temp/testdasd_'+random_uuid+suffix);
  }
}

let fsReaddir = async() => {
  try {
    let fsReaddir = util.promisify(fs.readdir).bind(fs);
    let files = await fsReaddir('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/javascript');
    
    files.forEach(function (file) {
      console.log(file); 
  });

  } catch (error) {
    console.error(error);
  }
};


let test2 = async() => {
  try {
    fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    fs.appendFile('mynewfile1.txt', '\nHello appended content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    
    fs.open('mynewfile1.txt', 'r', function (err, file) {
        if (err) throw err;
        console.log(file);
    });
    
    fs.readFile(keypath,'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      else{
        console.log(data);
      }
    });
  } catch (error) {
    console.error(error);
  }
}


//fsRename();

let copyFile = async() => {
  
  try {

    let fsCopyFile = util.promisify(fs.copyFile).bind(fs);
    //await fsCopyFile('./sharp/enhancedTest.jpg','./sharp2/enhancedTest.jpg');
    await fsCopyFile('/Users/aniruddharaje/apps/sharp/enhancedTest.jpg','/Users/aniruddharaje/apps/sharp2/enhancedTest.jpg');
    console.log('Files copied!');

    
  } catch (error) {
    console.error(error);
  }
};

//copyFile();

let fsMkdir = async() => {
  
  try {

    let fsMkdir = util.promisify(fs.mkdir).bind(fs);
    await fsMkdir('/Users/aniruddharaje/apps/sharp3');
    console.log('Folder created!');

  } catch (error) {
    console.error(error);
  }
};

//fsMkdir();

let isDirPresent = async() => {
  
  try {
    console.log("isDirPresent");

    let dirPath = "/Users/aniruddharaje/apps/sharp";

    let isDirExists = fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
    console.log("isDirExists => ", isDirExists);

    // let fsExistsSync = util.promisify(fs.existsSync).bind(fs);
    // let fsExistsSyncResp = await fsExistsSync(dirPath);
    // console.log("fsExistsSyncResp => ", fsExistsSyncResp);

    // let fsLstatSync = util.promisify(fs.lstatSync).bind(fs);
    // let fsLstatSyncResp = await fsLstatSync(dirPath).isDirectory();
    // console.log("fsLstatSyncResp => ", fsLstatSyncResp);

  } catch (error) {
    console.error(error);
  }
};

isDirPresent();