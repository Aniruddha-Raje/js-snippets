var AWS = require('aws-sdk');
var util = require('util');

let getDynamoConnection = async () => {
    
    AWS.config.update({
        region: ''
    });
    
    return new AWS.DynamoDB.DocumentClient();
};

let getQuery = async () => {
    try {
        AWS.config.update({
            region: ''
        });
        
        let connection = await getDynamoConnection();
    
        let params = {
            TableName: "",
            IndexName: 'user_status-index',
            KeyConditionExpression: 'user_status = :hkey',
            ExpressionAttributeValues: {
                ':hkey': 'SUSPENDED'
            }
        };
    
        console.log(' Params => ', params);
        let dynamoDb = util.promisify(connection.query).bind(connection);
        let results = await dynamoDb(params);
        results = await results.Items;
    
        for(let i in results){
            let temp = results[i];
            console.log(temp);
            await updateItem(connection, temp);
        }
    } catch (error) {
        console.log(error);
    }
};


let updateItem = async (connection, item) => {
    
    let params = {
        TableName: '',
        Key:{
            "user_id": item.user_id
        },
        UpdateExpression: "set user_status = :status",
        ExpressionAttributeValues:{
            ":status": "ACTIVE"
        },
        ReturnValues:"UPDATED_NEW"
    };

    let dynamoDb = util.promisify(connection.update).bind(connection);
    await dynamoDb(params);
    return true;
};

//getQuery();

