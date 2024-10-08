var AWS = require('aws-sdk');
var config = {
  "apiVersion": "2012-08-10",
  "region":"us-west-2",
  "endpoint": "http://localhost:8000"
}
var dynamodb = new AWS.DynamoDB(config);

console.log(dynamodb);
