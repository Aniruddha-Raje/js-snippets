let util = require("util");
let AWS = require("aws-sdk");

let test = async () => {
  let constants = {};

  let client = new AWS.SSM({
    region: "us-east-1"
  });

  let authParameterPath = "/Cart/Stage/1";
  let jwtParameterPath = "/Errors/Stage/1";

  let params = {
    Names: [authParameterPath, jwtParameterPath]
  };

  let parameterStore = util.promisify(client.getParameters).bind(client);
  let constantVariables = await parameterStore(params);
  console.log("constantVariables => ", constantVariables);

  for (let i in constantVariables.Parameters) {
    if (constantVariables.Parameters[i].Name === authParameterPath) {
      constants.auth = JSON.parse(constantVariables.Parameters[i].Value);
    }

    if (constantVariables.Parameters[i].Name === jwtParameterPath) {
      constants.jwt = JSON.parse(constantVariables.Parameters[i].Value);
    }
  }

  let devRefreshTokenPrivateKey = constants.jwt;
  console.log(devRefreshTokenPrivateKey.devRefreshTokenPrivateKey);
};

test();
