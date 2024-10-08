const AWS = require('aws-sdk');
let util = require('util');
let fs = require('fs');

AWS.config.update({region:'us-east-1'});
let s3Client = new AWS.S3({region:'us-east-1'});

let s3Upload = async () => {
    let fsReadFile = util.promisify(fs.readFile);
    let imageBody = await fsReadFile("/Users/aniruddharaje/apps/snippets/outside.jpg");

    let params = {
        Bucket: '', 
        Key: 'testImage.jpg',
        Body: imageBody
    };
    console.log('uploadObject params => ', params);

    let s3UploadObject = util.promisify(s3Client.upload).bind(s3Client);
    await s3UploadObject(params);
};

s3Upload();