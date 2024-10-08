var AWS = require('aws-sdk');
const util = require('util');
let fs   = require('fs');
let path   = require('path');

AWS.config.update({region:'us-east-1'});
var kms = new AWS.KMS({apiVersion: '2014-11-01'});

let test = async () => {

    try {
        
        var encryptionParams = {
            KeyId: "",
            Plaintext: "Aniruddha|!@# | 123908764 | 20-20-2020"
        };

        let kmsEncrypt = util.promisify(kms.encrypt).bind(kms);
        let encryptedData = await kmsEncrypt(encryptionParams);

        //encryptedData contained 2 parts, CiphertextBlob and KeyId
        console.log('encryptedData => \n', encryptedData);
        console.log('\nencryptedData.CiphertextBlob => \n', encryptedData.CiphertextBlob);
        console.log('\nencryptedData.KeyId => \n', encryptedData.KeyId);
        
        let buff = Buffer.from(encryptedData.CiphertextBlob);
        console.log("\nbuff 1 => \n", buff);
        
        let encryptedBase64data = buff.toString('base64');
        console.log("\nencryptedBase64data => \n", encryptedBase64data);

        console.log("\n================================================");

        let rebuff = new Buffer(encryptedBase64data, 'base64');
        console.log("\nrebuff 2 => \n", rebuff);
        
        var decryptionParams = {
            CiphertextBlob : rebuff
        };

        let kmsDecrypt = util.promisify(kms.decrypt).bind(kms);
        let decryptedData = await kmsDecrypt(decryptionParams);

        //decryptedData contained 2 parts, Plaintext and KeyId
        console.log('\ndecryptedData => \n', decryptedData);
        console.log('\ndecryptedData.Plaintext => \n', decryptedData.Plaintext);
        console.log('\ndecryptedData.KeyId => \n', decryptedData.KeyId);

        let buff2 = Buffer.from(decryptedData.Plaintext, 'base64');  
        let originalText = buff2.toString('ascii');
        console.log(originalText);
    } catch (error) {
        console.log('\nerror => \n',error);
    }
};

test();