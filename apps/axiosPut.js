var axios = require('axios');

let test = async () => {
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': ''
    };
    
    var data = {
        "refresh_token":""
    };
    
    var url = "";

    axios({ method: 'PUT', url: url, headers: headers, data: data })
    .then((response) => {
        console.log("response => ",response);
        console.log("response.data => ", response.data);
    })
    .catch((error) => {
        console.log("error => ", error.response);
        console.log("error response status => ", error.response.status);
        
    });
}

test();