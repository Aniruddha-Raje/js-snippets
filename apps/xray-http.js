var AWSXRay = require('aws-xray-sdk');
var express = require('express');
var app = express();
AWSXRay.captureHTTPsGlobal(require('http'));
var http = require('http');

app.use(AWSXRay.express.openSegment('X-Ray-HTTP'));

app.get('/traceHttp', function (req, res) {
    console.log("traceHttp called!\n" + req);

    http.get("http://jsonplaceholder.typicode.com/todos/1", (resp) => {
        console.log(resp);
        res.send("googlefetched")
    });
});

var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
//app.use(AWSXRay.express.closeSegment());
