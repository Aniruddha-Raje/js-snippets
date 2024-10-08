import * as AWS from 'aws-sdk';
import * as util from 'util';

export const  sendMessage = async () => {
    try {
        AWS.config.update({region: 'ap-southeast-1'});
        const sqsClient = await new AWS.SQS({apiVersion: '2012-11-05'})
    
        let params = {
            QueueUrl: "https://sqs.ap-southeast-1.amazonaws.com/xxx/test.fifo",
            MessageGroupId: "lalamove",
            MessageBody: "test"
        };
        console.log('params => ', params);

        // let sendMessageResponse = await sqsClient.sendMessage(params);
        // console.log("FIFO sendMessageResponse => ", sendMessageResponse);
        let sqsSendMessage = util.promisify(sqsClient.sendMessage).bind(sqsClient);
        let sendMessageResponse = await sqsSendMessage(params);
        console.log(sendMessageResponse);

        return sendMessageResponse;
    } catch (error) {
        console.error("error => ", error);
    }    
};

sendMessage();