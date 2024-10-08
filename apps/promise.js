
var request = require("request");

function initialize() {
    var options = {
        url: 'https://jsonplaceholder.typicode.com/todos/1'
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })

}

function main() {
    var initializePromise = initialize();

    initializePromise
    .then(function(result) {
        console.log(result);
    }, function(err) {
        console.log(err);
    }).then(function(result) {
        console.log("Second");
    }).then(function(result) {
        console.log("Last THen");
    })
}

main();