let AWS = require('aws-sdk');
let util = require('util');

let test = async () => {

    try {
        let client = new AWS.Lambda({
            region: "us-east-1"
        });
    
        let payload = {
            "lambda_warmer": true,
            "sdk_call" : true
        };
    
        payload = JSON.stringify(payload);
        console.log("Payload => ", payload);
    
        let params = {
            FunctionName: 'coldstart',
            InvocationType: "RequestResponse", 
            Payload: payload
        };
    
        let clientInvoke = util.promisify(client.invoke).bind(client);
        let invokeResponse  = await clientInvoke(params);
    
        console.log('invokeResponse => ',invokeResponse);
    } catch (error) {
        console.log('error =>\n', error);
    }
    
};

test();