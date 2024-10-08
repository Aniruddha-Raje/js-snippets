const jwt = require('jsonwebtoken');

const JWT_SECRET_TOKEN = 'secret';
const JWT_WRONG_TOKEN = 'test';
const jwtoken = '';

let verifyOptions = {
    expiresIn:  3600,
    algorithm:  ["HS256"]
};

jwt.verify(jwtoken, JWT_SECRET_TOKEN, verifyOptions, function (err, decoded) {
    //jwt.verify(token, JWT_WRONG_TOKEN, function (err, decoded) {
        if (err) {             
            console.log('Error => ', err.message);
    
            if (err.name === 'TokenExpiredError') {
                console.log("AUTH_EXPIRED");
            } 
            else if (err.name === 'JsonWebTokenError') {
                console.log("JWT_ERROR");
            }
            else if (err.name === 'NotBeforeError') {
                console.log("JWT_NOT_ACTIVE");
            } else {
                console.log("ERR_ON");
            }
    
        } else {
            console.log('Success => ', decoded)
        }
});