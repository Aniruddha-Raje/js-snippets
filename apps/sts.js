var AWS = require('aws-sdk');
let util = require('util');
AWS.config.update({region: 'us-east-1'});

let getStsTokens = async() => {
    let sts = new AWS.STS();

    const params = {
        'RoleArn': '',
        'RoleSessionName': 'testing-to-assume-dev-role'
    };

    let stsAssumeRole = util.promisify(sts.assumeRole).bind(sts);
    let response = await stsAssumeRole(params);

    console.log('response => ', response);

};

getStsTokens();