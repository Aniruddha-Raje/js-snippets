let AWS = require('aws-sdk');
let util = require('util');

let test = async () => {
    let region = 'us-east-1';
    let secretId = '';

    let response = {};
    let client = new AWS.SecretsManager({
        region: region
    });
    
    let sm = util.promisify(client.getSecretValue).bind(client);
    let data = await sm({SecretId: secretId});
    console.log("Secrets Manager SDK Response => ", data);

    if ('SecretString' in data) {
        let secret = data.SecretString;
        secret = JSON.parse(secret);
        console.log('Secret => ', secret);

        response.user = secret.username;
        response.password = secret.password;
        response.host = secret.host;
        response.database = 'postgres'

        console.log('Secrets Manager Util response => \n', response);
    } else {
        let buff = new Buffer(data.SecretBinary, 'base64');
        let decodedBinarySecret = buff.toString('ascii');
        console.log('decodedBinarySecret => \n', decodedBinarySecret);
    }
};

test();