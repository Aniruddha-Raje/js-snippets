import { SES } from "aws-sdk";

const emailHtmlString = `
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>
`;

let sesClient = new SES({
   region: "ap-southeast-1"
 });

 export const sendEmail = async () => {
   let params = {
     Destination: {
       ToAddresses: ["example@gmail.com"]
     },
     Message: {
       Body: {
         Html: {
          Charset: "UTF-8",
          Data: emailHtmlString
         }
        },
        Subject: {
         Charset: 'UTF-8',
         Data: "Welcome"
        }
       },
     Source: "test@gmail.com"
   };
   
   const sesSendEmailResponse = await sesClient.sendEmail(params);
   console.log("sesSendEmailResponse => ", sesSendEmailResponse);
   
   return true;
}

sendEmail();