var axios = require('axios');

var headers = {
    "Content-Type": "application/json"
}

var data = {
    "user_id":"04"
}

var url = "";

axios({ method: 'POST', url: url, headers: headers, data: data })
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
})

