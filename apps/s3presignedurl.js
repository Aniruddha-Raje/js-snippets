const AWS = require('aws-sdk');
let util = require('util');

AWS.config.update({region:'us-east-1'});
let s3Client = new AWS.S3({region:'us-east-1'});

let presignedUrl = async () => {

    let signingParams = {
        Bucket: '',
        Key: 'test/image.jpg',
        Expires: 3600
    }
    
    let s3GetSignedUrl = util.promisify(s3Client.getSignedUrl).bind(s3Client);
    let signedUrl = await s3GetSignedUrl('putObject',signingParams);
    
    console.log('signedUrl => ', signedUrl);
}

let postSignedUrl = async () => {

    try {
        // 1000Byte/ 1KB - 5MB
        let postSigningParams = {
            Expires: 3600,
            Bucket: "",
            Conditions: [["content-length-range", 1000, 7000000]],
            Fields: {
                key: 'test-image.jpg'
            },
            ACL: 'public-read'
        }

        let s3createPresignedPost = util.promisify(s3Client.createPresignedPost).bind(s3Client);
        let postSignedUrl = await s3createPresignedPost(postSigningParams);

        console.log('postSignedUrl => ', postSignedUrl);
    } catch (error) {
        console.error(error);
    }
}

//presignedUrl();
postSignedUrl();