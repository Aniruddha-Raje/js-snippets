var AWS = require('aws-sdk');
const util = require('util');
let fs   = require('fs');
let path   = require('path');

AWS.config.update({region:'us-east-1'});
var kms = new AWS.KMS({apiVersion: '2014-11-01'});

let test = async () => {

    try {
        let keyPath = path.join(__dirname, '/private.key');
        console.log("keyPath => ", keyPath);

        let fsReadFile = util.promisify(fs.readFile).bind(fs);
        let publicKey = await fsReadFile(keyPath, 'utf8');

        var encryptionParams = {
            KeyId: "xxx",
            Plaintext: publicKey
        };

        let kmsEncrypt = util.promisify(kms.encrypt).bind(kms);
        let encryptedData = await kmsEncrypt(encryptionParams);

        //encryptedData contained 2 parts, CiphertextBlob and KeyId
        // console.log('encryptedData => \n', encryptedData);
        // console.log('\nencryptedData.CiphertextBlob => \n', encryptedData.CiphertextBlob);
        // console.log('\nencryptedData.KeyId => \n', encryptedData.KeyId);
        
        let buff = Buffer.from(encryptedData.CiphertextBlob);
        let encryptedBase64data = buff.toString('base64');
        console.log("\nencryptedBase64data => \n", encryptedBase64data);

        var decryptionParams = {
            CiphertextBlob : encryptedData.CiphertextBlob
        };

        let kmsDecrypt = util.promisify(kms.decrypt).bind(kms);
        let decryptedData = await kmsDecrypt(decryptionParams);

        //decryptedData contained 2 parts, Plaintext and KeyId
        // console.log('\ndecryptedData => \n', decryptedData);
        // console.log('\ndecryptedData.Plaintext => \n', decryptedData.Plaintext);
        // console.log('\ndecryptedData.KeyId => \n', decryptedData.KeyId);

        let buff2 = Buffer.from(decryptedData.Plaintext, 'base64');  
        let originalText = buff2.toString('ascii');
        console.log(originalText);
    } catch (error) {
        console.log('\nerror => \n',error);
    }
};

test();