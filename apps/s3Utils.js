let AWS = require('aws-sdk');
let fs = require('fs');
var util = require('util');

let s3Client = new AWS.S3({
   region: "us-east-1"
});

let uploadImages = async () => {
   try {
      let fileLocation = "/Users/aniruddharaje/apps/snippets/outside.jpg";

      let fsReadFile = util.promisify(fs.readFile).bind(fs);
      let fileContent = await fsReadFile(fileLocation);
      console.log('sdfad');

      let params = {
         Bucket: '',
         Key: 'test/outside.jpg',
         Body: fileContent,
         ServerSideEncryption: "AES256"
      };
      console.log(params);
      console.log(fileContent);

      let s3Upload = util.promisify(s3Client.upload).bind(s3Client);
      await s3Upload(params);
      console.log('file uploaded');

      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}
//uploadImages();

let copyImage = async () => {
   try {

      let copyParams = {
         Bucket: 'target-bucket',
         CopySource: 'source-bucket/folder/test.jpg',
         Key: 'folder/test.jpg'
      };
 
     console.log('copyObject params => ', copyParams);
 
     let s3copyObject = util.promisify(s3Client.copyObject).bind(s3Client);
     let signedUrl = await s3copyObject(copyParams);
 
     return signedUrl;
   } catch (error) {
      console.log(error);
   }
};
copyImage();