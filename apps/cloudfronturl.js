var cfsign = require('aws-cloudfront-sign');

let key = ``;

let signingParams = {keypairId: '', privateKeyString: key}

// Generating a signed URL
let signedUrl = cfsign.getSignedUrl(
  '', 
  signingParams
);

console.log(signedUrl);