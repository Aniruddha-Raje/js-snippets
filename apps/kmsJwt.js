var AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
const util = require('util');

AWS.config.update({region:'us-east-1'});
var kms = new AWS.KMS({apiVersion: '2014-11-01'});

let payload = {
    "userId": ""
};

let test = async () => {

    try {
        //Encrypted Keys
        const KEYS = {
            'public' : '',
            'private' : ''
        };

        // SIGNING OPTIONS
        let signOptions = {
            expiresIn:  3600,
            algorithm:  "RS256"
        };

        let verifyOptions = {
            expiresIn:  3600,
            algorithm:  ["RS256"]
        };

        let base64dataPriv = Buffer.from(KEYS.private, 'base64');
        let base64dataPub = Buffer.from(KEYS.public, 'base64');

        var decryptionParamsPriv = {
            CiphertextBlob : base64dataPriv
        };

        var decryptionParamsPub = {
            CiphertextBlob : base64dataPub
        };

        let kmsDecryptPriv = util.promisify(kms.decrypt).bind(kms);
        let decryptedDataPriv = await kmsDecryptPriv(decryptionParamsPriv);

        let kmsDecryptPub = util.promisify(kms.decrypt).bind(kms);
        let decryptedDataPub = await kmsDecryptPub(decryptionParamsPub);

        let buff2Priv = Buffer.from(decryptedDataPriv.Plaintext, 'base64');  
        let privKey = buff2Priv.toString('ascii');

        let buff2Pub = Buffer.from(decryptedDataPub.Plaintext, 'base64');  
        let pubKey = buff2Pub.toString('ascii');

        let token = jwt.sign(payload, privKey, signOptions);
        console.log("Token - " + token);

        var legit = jwt.verify(token, pubKey, verifyOptions);
        console.log(JSON.stringify(legit));

    } catch (error) {
        console.log('\nerror => \n',error);
    }
};

test();