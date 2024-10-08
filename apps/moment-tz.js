var moment = require('moment-timezone');
var momo = require('moment');

var tsInSecs = moment().unix();
console.log("moment().unix() ", tsInSecs);
console.log("Epoch to UTC -> ",moment.unix(moment().unix()).tz("Asia/Singapore").format('DD-MM-YYY hh:mm:ss'));

console.log("Convert from Asia/Kuala_Lumpur to Unix -> ", moment.tz("2023-02-08 14:10:00","UTC").unix());
console.log("Convert from Asia/Kuala_Lumpur to Unix -> ", moment.tz("2019-10-09 23:59:59","UTC").unix());
// Outputs - 1570595400

console.log("Epoch to Specific TimeZone Epoch -> ",moment.unix(1570579200).tz("Asia/Kuala_Lumpur").unix());


console.log("Epoch to Specific TimeZone Epoch -> ",moment.unix(1555296000).tz("Asia/Kuala_Lumpur").format('YYYY-MM-DD hh:mm:ss'));

console.log("Epoch to Specific TimeZone and Format -> ",moment.unix(1555296000).tz("Asia/Calcutta").format('YYYY-MM-DD hh:mm:ss'));

console.log("UTC to Local ", moment().tz("Asia/Kuala_Lumpur").format('H'));

