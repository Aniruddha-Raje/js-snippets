let crypto = require('crypto');

let dataForSignature = "";

//let sha256 = crypto.createHash('sha256').update(dataForSignature).digest("hex");

let sha1 = crypto.createHash('sha1').update(dataForSignature).digest("hex");

console.log(sha1);