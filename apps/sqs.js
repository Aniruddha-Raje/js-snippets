let AWS = require('aws-sdk');
let util = require('util');
AWS.config.update({region: 'ap-southeast-1'});

let test = async() => {
    let sqs = new AWS.SQS();

    let params = {
        QueueUrl:'https://sqs.ap-southeast-1.amazonaws.com/xxx/fifo_sqs.fifo',
        MessageBody:'Test message 1',
        MessageGroupId: "1"
    };

    let sqsSendMessage = util.promisify(sqs.sendMessage).bind(sqs);
    let sqsList = await sqsSendMessage(params);
    console.log(sqsList);

    // let sqsListQueues = util.promisify(sqs.listQueues).bind(sqs);
    // let sqsList = await sqsListQueues(params);
    // console.log(sqsList);
        
    // let sqsReceiveMessage = util.promisify(sqs.receiveMessage).bind(sqs);
    // let messages = await sqsReceiveMessage(params);
    // console.log(messages);
};
test();