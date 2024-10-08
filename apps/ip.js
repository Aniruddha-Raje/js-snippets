let ipUtil = require('geoip-lite');

let test = async () => {
    let sourceIp = '';

    let ipDetails = await ipUtil.lookup(sourceIp);
    console.log('ipDetails => ', ipDetails);

}

test();