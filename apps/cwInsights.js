var AWS = require('aws-sdk');
var util = require('util');

let test = async() => {

    AWS.config.update({
        region: 'us-east-1'
    });

    let cloudwatchlogs = await new AWS.CloudWatchLogs();

    var params = {
        endTime: '1571875199',
        queryString: 'fields @message, @logStream, @requestId | filter @message like /ERROR/ | sort @timestamp desc | limit 100',
        startTime: '1571788800',
        logGroupName: '/aws/lambda/test'
    };

    let startQuery = util.promisify(cloudwatchlogs.startQuery).bind(cloudwatchlogs);
    let results = await startQuery(params);
    console.log('results => ', results);

    var params2 = {
        queryId: results.queryId
    };
    let getQueryResults = util.promisify(cloudwatchlogs.getQueryResults).bind(cloudwatchlogs);
    let results2 = await getQueryResults(params2);

    results2 = results2.results;

    for(let temp in results2){
        let log = results2[temp];
        let ob = {};
        
        ob.errorMessage = log[0].value;
        ob.logStream = log[1].value;
        ob.cwRequestId = log[2].value;
        console.log(ob);
        ob = {};
    }
};

test();