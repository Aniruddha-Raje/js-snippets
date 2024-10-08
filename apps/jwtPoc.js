const jwt = require('jsonwebtoken');

let token = "xx.xx.xx";

console.log(JSON.stringify(jwt.decode(token)));