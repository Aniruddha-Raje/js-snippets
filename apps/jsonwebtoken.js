const fs   = require('fs');
const jwt = require('jsonwebtoken');

let payload = {
    "subType" : "user",
    "subRole" : ["user", "admin"]
};

var privateKEY  = fs.readFileSync('/Users/aniruddharaje/apps/snippets/private.key', 'utf8');
var publicKEY  = fs.readFileSync('/Users/aniruddharaje/apps/snippets/public.key', 'utf8');

// SIGNING OPTIONS
let signOptions = {
    issuer: "test",
    audience: "test",
    subject: "test",
    expiresIn: 7200,
    algorithm: "RS256"
};

let token = jwt.sign(payload, privateKEY, signOptions);
console.log("Token - " + token);

let decoded = jwt.decode(token, {complete: true});
console.log('decoded => ',decoded);
console.log(decoded.header);
console.log(decoded.payload);

let verifyOptions = {
    issuer: decoded.payload.iss,
    audience: decoded.payload.aud,
    subject: decoded.payload.sub,
    algorithm: decoded.header.alg,
    maxAge: 300
};

var legit = jwt.verify('xx.xx.xx', publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));
