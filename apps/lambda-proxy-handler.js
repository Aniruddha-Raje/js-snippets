let axios = require('/opt/layer/node_modules/axios');

exports.handler = async (event) => {
    let response = '';
    let responseHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    
    try {
        let url = '';
        let headers = {
            'Content-Type': 'application/json'
        };
        
        // let getApiResponse  = await axios({ method: 'GET', url: url, headers: headers });
        // console.log('GET apiResponse => \n', getApiResponse.data);
        
        let postData = { 
            user_id: '1234' 
        };
        let postApiResponse = await axios({ method: 'POST', url: url, headers: headers, data: postData });    
        console.log('POST apiResponse => \n', postApiResponse.data);
        
        response = {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify({
                statusCode: 200,
                data :  'Ok'
            })
        };
        return response;
    }
    catch (error) {
        console.log('Error => ', error);
        
        response = {
            statusCode: 500,
            headers: responseHeaders,
            body: JSON.stringify({
                statusCode: 500,
                data : error
            })
        };
        return response;
    }
};