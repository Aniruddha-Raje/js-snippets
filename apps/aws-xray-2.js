// Load the SDK for JavaScript
var AWSXRay = require('aws-xray-sdk');
var AWS = AWSXRay.captureAWS(require('aws-sdk'));
var mysql = AWSXRay.captureMySQL(require('mysql'));

var express = require('express');
var app = express();

var http = AWSXRay.captureHTTPs(require('http'));
app.use(AWSXRay.express.openSegment('X-Ray-Node-Example'));

AWS.config.update({region: 'us-east-1'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "nodejs",
    port: 3306
});

con.connect(function (err) {
    if (err) throw err

});

app.get('/traceS3', function(req,res){

    // Call S3 to list current buckets
    s3.listBuckets(function(err, data) {
        if (err) {
            console.log("Error", err);
            res.send(err);
        } else {
            res.send(data.Buckets);
        }
    });
});

app.get('/traceHttp', function (req, res) {
    console.log("traceHttp called!\n"+req);
    
    http.get("http://jsonplaceholder.typicode.com/todos/1", (resp) => {
        console.log(resp);
        res.send("googlefetched")
    });
});

app.get('/traceMysql', function (req, res) {
    console.log("traceMysql called!\n"+req);

    var start = Date.now();
   
    var query = con.query('SELECT * FROM customer', function (err, rows, fields) {
        if (err) {
            console.log("Error Selecting : %s ", err);
        }
        else {
            var resp = [];
            function Person(id, name) {
                this.id = id;
                this.name = name;
            }

            for (var i = 0; i < rows.length; i++) {
                var id = rows[i].id;
                var name = rows[i].name;
                resp.push(new Person(id, name));
            }
            var end = Date.now();
            res.send(JSON.stringify({ "status": 200, "error": null, "response": resp, "requestTime": end - start }));
        }
    });
});

app.use(AWSXRay.express.closeSegment());
var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});