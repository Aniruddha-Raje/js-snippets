let AWS = require('aws-sdk');
let fs = require('fs');
var util = require('util');

let testGetObjectAndDownload = async () => {
   let s3Client = new AWS.S3({
      region: "ap-southeast-1"
  });

  let params = {
      Bucket: 'bucket-name'
  };

//   const s3ListBuckets = await s3Client.listBuckets().promise();
//   console.log("s3ListBuckets => ", s3ListBuckets);

  const s3ListObjects = await s3Client.listObjects(params).promise();
  console.log("s3ListBuckets => ", s3ListObjects);

//   const s3Object = await s3Client.getObject(params).promise();
//   fs.writeFileSync('/Users/aniruddharaje/apps/snippets/aaaa.png', s3Object.Body, 'binary');
};
testGetObjectAndDownload();

// let uploadImages = async () => {
//    try {
//       let fileLocation = "/Users/xxx/Documents/work/pocs/node-crud-app/snippets/outside.jpg";

//       let fsReadFileSync = util.promisify(fs.readFileSync);
//       let fileContent = await fsReadFileSync(fileLocation);

//       let params = {
//          Bucket: '',
//          Key: 'test/outside.jpg',
//          Body: fileContent,
//          ServerSideEncryption: "AES256"
//       };
//       console.log(params);
//       console.log(fileContent);

//       let s3Upload = util.promisify(s3.upload).bind(s3);
//       await s3Upload(params);
//       console.log('file uploaded');

//       return true;
//    } catch (error) {
//       console.error(error);
//       return false;
//    }
// }

// //uploadImages();

// let s3GetObjectTest = async () => {
//    try {

//       let bucketName = '';
//       let s3FilePath = '';
//       let fileName = s3FilePath.substring(s3FilePath.lastIndexOf('/')+1,s3FilePath.length);
//       let downloadFilePath = '/Users/aniruddhanarendraraje/Documents/work/projects/serverless/serverless-imageit/resources/'+fileName;

//       let client = new AWS.S3({
//          region: "us-east-1"
//       });

//       var params = {
//          Bucket: bucketName, 
//          Key: s3FilePath
//       };

//       var file = await fs.createWriteStream(downloadFilePath);
//       await client.getObject(params).createReadStream().pipe(file);
//    } catch (error) {
//       console.log(error);
//    }
   
// };

//s3GetObjectTest();
// let test = async () => {
//    var params = {
//       Bucket: "", 
//       Key: "test/mufc.jpg"
//    };

//    let s3GetObject = util.promisify(s3.getObject).bind(s3);
//    let data = await s3GetObject(params);
//    console.log(data);
   
// };
// test();
                    
// s3.listBuckets(function(err, data) {
//    if (err) {
//       console.log("Error", err);
//    } else {
//       console.log("Bucket List", data.Buckets);
//    }
// });

// // Call S3 to create the bucket
// s3.createBucket(bucketParams, function(err, data) {
//     if (err) {
//        console.log("Error", err);
//     } else {
//        console.log("Success", data.Location);
//     }
//  });

//  // call S3 to retrieve upload file to specified bucket
// var uploadParams = {Bucket: process.argv[2], Key: '', Body: ''};
// var file = process.argv[3];

// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function(err) {
//   console.log('File Error', err);
// });
// uploadParams.Body = fileStream;

// var path = require('path');
// uploadParams.Key = path.basename(file);

// // call S3 to retrieve upload file to specified bucket
// s3.upload (uploadParams, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Upload Success", data.Location);
//   }
// });

// // Create the parameters for calling createBucket
// var bucketParams = {
//     Bucket : BUCKET_NAME
//  };                    
                                    
//   // Call S3 to create the bucket
//  s3.listObjects(bucketParams, function(err, data) {
//     if (err) {
//        console.log("Error", err);
//     } else {
//        console.log("Success", data);
//     }
//  });

//   // Call S3 to create the bucket
// s3.deleteBucket(bucketParams, function(err, data) {
//     if (err) {
//        console.log("Error", err);
//     } else {
//        console.log("Success", data);
//     }
//  });