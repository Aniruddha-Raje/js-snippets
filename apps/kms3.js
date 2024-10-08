function encrypt(buffer) {
    const kms = new aws.KMS({
        accessKeyId: 'xxxx', //credentials for your IAM user
        secretAccessKey: 'xxx/xxx/xxx', //credentials for your IAM user
        region: 'ap-southeast-1'
    });
    return new Promise((resolve, reject) => {
        const params = {
            KeyId: 'x-x-xx-x-x', // The identifier of the CMK to use for encryption. You can use the key ID or Amazon Resource Name (ARN) of the CMK, or the name or ARN of an alias that refers to the CMK.
            Plaintext: buffer// The data to encrypt.
        };
        kms.encrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.CiphertextBlob);
            }
        });
    });
}

function decrypt(buffer) {
    const kms = new aws.KMS({
        accessKeyId: 'xx',
        secretAccessKey: 'x/x/x',
        region: 'ap-southeast-1'
    });
    return new Promise((resolve, reject) => {
        const params = {
            CiphertextBlob: buffer// The data to dencrypt.
        };
        kms.decrypt(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Plaintext);
            }
        });
    });
}

encrypt(new Buffer('abc','utf-8')).then(decrypt).then(plaintext => {
    console.log(plaintext.toString('utf-8'));
});