var moment = require('moment');
var crypto = require('crypto');

var utcTimeIntegerTimestamp = moment().utc().valueOf();


console.log("utcTimeIntegerTimestamp           => ",utcTimeIntegerTimestamp);

console.log("moment().unix()                   => ",moment().unix());
// Outputs -> 1554949318

console.log("moment().utc().valueOf()          => ",moment().utc().valueOf());
// Outputs -> 1554948550304

console.log("moment().valueOf()                => ",moment().valueOf());
// Outputs -> 1554948550315

console.log("moment().utc().format().valueOf() => ",moment().utc().format().valueOf());
// Outputs -> 2019-04-11T02:09:10Z

//var signature = "test_lambda" + "." + utcTimeIntegerTimestamp + "." + "|" + "." + "123456";
var signature = "" + utcTimeIntegerTimestamp  + "|"  + "";
console.log("signature => ",signature);

var md5 = crypto.createHash('md5').update(signature).digest("hex")
console.log("md5 => ",md5);