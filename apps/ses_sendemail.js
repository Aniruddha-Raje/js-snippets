var AWS = require('aws-sdk');
let util = require('util');

const emailHtmlString = `<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>
`;

let test = async() => {
  try {
    AWS.config.update({region: 'ap-southeast-1'});

    let params = {
      Destination: {
        ToAddresses: [
          'receiver@example.com'
        ]
      },
      Message: {
        Body: {
          Html: {
           Charset: "UTF-8",
           Data: emailHtmlString
          }
          // ,
          // Text: {
          //  Charset: "UTF-8",
          //  Data: "TEXT_FORMAT_BODY"
          // }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: 'Welcome'
         }
        },
      Source: "sender@example.com"
    };
    
    var client = new AWS.SES();
	console.log("client => ", client);
    
    // let sesSendEmail = util.promisify(client.sendEmail).bind(client);
    // let data = await sesSendEmail(params);
	let data = await client.sendEmail(params).promise();
    console.log(data.MessageId);
  } catch (error) {
    console.error("error => ", error);
  }

};

test();