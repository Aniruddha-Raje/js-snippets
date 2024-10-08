var schedule = require('node-schedule');

//Runs every minute
function run() {
    schedule.scheduleJob('0 * * ? * *', function () {
        console.log('Hello World');
    });
}

run();