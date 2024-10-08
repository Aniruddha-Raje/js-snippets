let util = require('util');
let AWS = require('aws-sdk');
let jwt = require('jsonwebtoken');

let test = async () => {

    try {
        let constants = {};

    let payload = {
        "subType" : "admin",
        "subRole" : ['Test Lambda', 'Test Lambda Role']
    };

    let client = new AWS.SSM({
        region: "us-east-1"
    });

    let adminParameterPath = "/Admin/Stage/1";
    let jwtParameterPath = "/JWT/Stage/1";

    let params = {
        Names: [adminParameterPath,jwtParameterPath]
    };

    let parameterStore = util.promisify(client.getParameters).bind(client);
    let constantVariables = await parameterStore(params);

    for(let i in constantVariables.Parameters){
        if(constantVariables.Parameters[i].Name === adminParameterPath){
            constants.admin = JSON.parse(constantVariables.Parameters[i].Value);
        }

        if(constantVariables.Parameters[i].Name === jwtParameterPath){
            constants.jwt = JSON.parse(constantVariables.Parameters[i].Value);
        }
    }

    // SIGNING OPTIONS
    let signOptions = {
        issuer: constants.admin.tokenDetails.TestSlsAccessToken.issuer,
        audience: constants.admin.tokenDetails.TestSlsAccessToken.audience,
        subject: '29',
        expiresIn: constants.admin.tokenDetails.TestSlsAccessToken.expiryInSeconds,
        algorithm: constants.admin.tokenDetails.TestSlsAccessToken.algorithm
    };

    let token = jwt.sign(payload, constants.jwt.stageAccessTokenPrivateKey, signOptions);
    console.log("Token - " + token);

    let decodedToken = jwt.decode(token, {complete: true});
    console.log(decodedToken.header);
    console.log(decodedToken.payload);

    let verifyOptions = {
        issuer: constants.admin.tokenDetails.TestSlsAccessToken.issuer,
        audience: constants.admin.tokenDetails.TestSlsAccessToken.audience,
        subject: decodedToken.payload.sub,
        expiresIn: constants.admin.tokenDetails.TestSlsAccessToken.expiryInSeconds,
        algorithm: [constants.admin.tokenDetails.TestSlsAccessToken.algorithm]
    };

    var legit = jwt.verify(token, constants.jwt.stageAccessTokenPublicKey, verifyOptions);
    console.log("\nJWT verification result: " + JSON.stringify(legit));
    } catch (error) {
        console.log(error);
    }
};

test();

