var axios = require("axios");

let getTestUsingPromises = async () => {
  var headers = {
    "Content-Type": "application/json",
    Authorization: ""
  };

  var url = "";

  axios
    .get(url, { headers: headers })
    .then(response => {
      console.log("response => \n", response);
      console.log("=================");
      console.log("response.data => \n", response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

let getTest = async () => {
  try {

    let apiResponse = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      headers: {
        "Content-Type": "application/json",
        "Authorization": ""
      }
    });

    console.log("apiResponse.data => ", apiResponse.data);
  } catch (error) {
    console.error(error);
  }
};

//getTestUsingPromises();
getTest();
