// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'ap-southeast-1'});

var sns = new AWS.SNS();

// Create promise and SNS service object
var listTopicsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listTopics({}).promise();

// // Handle promise's fulfilled/rejected states
// listTopicsPromise.then(
//   function(data) {
//     console.log(data.Topics);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });


// // // Create promise and SNS service object
// // var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "TOPIC_NAME"}).promise();

// // // Handle promise's fulfilled/rejected states
// // createTopicPromise.then(
// //   function(data) {
// //     console.log("Topic ARN is " + data.TopicArn);
// //   }).catch(
// //     function(err) {
// //     console.error(err, err.stack);
// //   });

// Create publish parameters
// var params = {
//   Message: 'Test Message', /* required */
//   TopicArn: ''
// };

// Create promise and SNS service object
//var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
// publishTextPromise.then(
//   function(data) {
//     console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
//     console.log("MessageID is " + data.MessageId);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });

//   // Create promise and SNS service object
// var deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: 'TOPIC_ARN'}).promise();

// // Handle promise's fulfilled/rejected states
// deleteTopicPromise.then(
//   function(data) {
//     console.log("Topic Deleted");
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });

var params = {
  Message: "Your payment is due in next 5 days, kindly maintain sufficient balance",
  MessageAttributes: {
    'AWS.SNS.SMS.SenderID': {
      'DataType': 'String',
      'StringValue': '94220'
    },
    'AWS.SNS.SMS.SMSType': {
      'DataType': 'String',
      'StringValue': 'Transactional'
    }
  },
  PhoneNumber: '+911111111'
};

sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});