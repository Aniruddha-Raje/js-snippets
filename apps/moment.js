var moment = require('moment');

var timestamp = moment().utc().valueOf();
console.log("timestamp => ", timestamp);
console.log(moment(timestamp).format('YYYY-MM-DD hh:mm:ss'));

console.log(moment().format('YYYY-MM-DDThh:mm:ss.ms'));
console.log("UTC => ",moment().toISOString());
console.log("toISOString => ",moment().toISOString(true));

console.log(moment().format('YYYY-MM-DDTHH:mm:ss.SSS000'));

console.log("Date Time: 1 ", moment("2019-04-01T05:15:32Z").format('YYYY-MM-DD hh:mm:ss'));

var tsInSecs = moment().unix();
console.log("moment().unix() ", tsInSecs);


console.log("TS in MS => ",timestamp);
console.log("TS in Secs => ",moment(timestamp).unix());

console.log("Type of Timestamp => ",typeof timestamp);
console.log(moment(timestamp).format('YYYY-MM-DD hh:mm:ss'));

console.log("UTC ", moment().format('YYYY-MM-DD hh:mm:ss'));
console.log("UTC ",moment().format('YYYY-MM-DDThh:mm:ss')+'Z');
console.log("moment().format() ", moment().format());
console.log("==================================");
console.log("DateTime to Epoch ", moment("2019-04-14 10:17:23").unix());
console.log("Epoch to DateTime ", moment(1555251443).format('YYYY-MM-DD hh:mm:ss'));
console.log("==================================");

let time = moment();
console.log(time.add(2, 'hours').unix());
console.log(time.add(15, 'day').unix());

console.log(moment().format('H'));

let ts = moment();
console.log('Ori => ',ts.unix());
ts.add(2,'minutes').unix();
console.log('Updated => ',ts.unix());

console.log(moment('2019-06-20 16:06:59','YYYY-MM-DD hh:mm:ss').isValid());


console.log("yyyy only => ", moment('2019-09-10').format('YYYY'));

console.log(moment().format('YYYY/MM/DD'));

console.log("validation => ", moment("21 Apr 0000", 'DD MMM YYYY').isValid());

console.log("Transaction ", moment("2021-03-15 00:00:00").unix());
console.log("Start ", moment("2021-04-25 00:00:00").unix());
console.log("End ", moment("2021-05-24 00:00:00").unix());
console.log("Next ", moment("2021-05-15 23:00:00").unix());
