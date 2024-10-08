var AWS = require('aws-sdk');
var util = require('util');
var fs = require('fs');

let getDynamoConnection = async () => {
    
    AWS.config.update({
        region: 'us-east-1'
    });
    
    return new AWS.DynamoDB.DocumentClient();
};

let indexSearch = async () => {

    let connection = await getDynamoConnection();
   
    const params = {
        TableName: '',
        IndexName: '',
        KeyConditionExpression: 'index_name = :hkey',
        ExpressionAttributeValues: {
            ':hkey': ""
        }
    }

    console.log('indexSearch Params => ', params);
    let dynamoDb = util.promisify(connection.query).bind(connection);
    let results = await dynamoDb(params);
    console.log('results => ', results);
};

let batchWrite = async () => {

    try {
        let connection = await getDynamoConnection();

        let params = {
            RequestItems: {
                "table_name": [
                {
                    DeleteRequest: {
                        Key: {
                            "primary_key": "",
                            "sort_key": ""
                        }
                    }
                }]
            }
        };
    
        let dynamoDbBatchWrite = util.promisify(connection.batchWrite).bind(connection);
        let response = await dynamoDbBatchWrite(params);
        console.log('batchWriteItem response => ', response);
        
    } catch (error) {
        console.log('error =>\n',error);
    }
    
};

let getQuery = async () => {

    let connection = await getDynamoConnection();
   
    const params = {
        TableName: '',
        KeyConditionExpression: 'user_id = :user_id and begins_with(sort_key, :sort_key)',
        ExpressionAttributeValues: {
          ":user_id": "",
          ":sort_key": ""
        }
    }

    console.log('getQuery Params => ', params);
    let dynamoDb = util.promisify(connection.query).bind(connection);
    let results = await dynamoDb(params);
    console.log('results => ', results);
};

let uploadFileObjects = async () => {

    let connection = await getDynamoConnection();
    let fsReadFile = util.promisify(fs.readFile).bind(fs);
    let countryList = await fsReadFile('/Users/aniruddhanarendraraje/Documents/work/pocs/node-crud-app/snippets/countryList.json','utf8');
    countryList = await JSON.parse(countryList);
    countryList = countryList.data;

    for(let temp in countryList){
        let params = {
            TableName: '',
            Item:{
                "country_iso2": countryList[temp]['alpha-2'],
                "country_name": countryList[temp]['name'],
                "country_iso3": countryList[temp]['alpha-3'],
                "country_code": countryList[temp]['country-code']
            }
        };
    
        try {
            let put = util.promisify(connection.put).bind(connection);
            let results = await put(params);
        } catch (error) {
            console.log(params);
            console.log(error);
        }
        
    }

};

//let connection = new AWS.DynamoDB.DocumentClient();

let get = async () => {

    let connection = await getDynamoConnection();
   
    let params = {
        TableName: '',
        Key:{
            "user_id": 509036
        },
        ConsistentRead: true
    };

    console.log('Params => ', params);
    let dynamoDb = util.promisify(connection.query).bind(connection);
    let results = await dynamoDb(params);
    console.log('results => ', results);
};



let getScan = async () => {
    let connection = await getDynamoConnection();
    
    let params = {
        TableName: '',
    };
    console.log(' Params => ', params);
    let dynamoDb = util.promisify(connection.scan).bind(connection);
    let results = await dynamoDb(params);
    
    console.log("dynamoDb get response => ", results);
};

//getQuery();
//getScan();
//batchWrite();
//uploadFileObjects();

let update = async () => {

    let connection = await getDynamoConnection();

    let params = {
        TableName: '',
        Key: {  },
        UpdateExpression: '',
        ExpressionAttributeValues: {
            
        },
        ReturnValues: 'UPDATED_NEW'
    }

    console.log(' Params => ', params);
    let dynamoDb = util.promisify(connection.update).bind(connection);
    let results = await dynamoDb(params);
    
    console.log("dynamoDb update response => ", results);
};

update();