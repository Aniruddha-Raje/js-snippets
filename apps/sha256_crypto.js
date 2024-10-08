let crypto = require('crypto');

let resp = crypto.createHmac('sha256', Buffer.from('example@test.com', 'utf8'))
.update("simple")
.digest()
.toString('base64');

console.log("resp => ", resp);