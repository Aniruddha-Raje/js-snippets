var mysql = require('mysql');
var express = require('express');
var AWSXRay = require('aws-xray-sdk');
var app = express();

AWSXRay.captureHTTPsGlobal(require('https'));
var http = require('https');
app.use(AWSXRay.express.openSegment('X-Ray-Node'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs",
    port: 3306
});

con.connect(function (err) {
    if (err) throw err

});

app.get('/getGoogle', function (req, res) {
    console.log("getGoogle called!");
    http.get("https://google.com", (resp) => {
        console.log(resp);
        res.send("googlefetched")
    });
});

app.get('/getHttp', function (req, res) {
    console.log("getGoogle called!");
    http.get("http://jsonplaceholder.typicode.com/todos/1", (resp) => {
        console.log(resp);
        res.send("jsonplaceholder fetched")
    });
});

app.get('/getDBData', function (req, res) {
    console.log("getDBData called!\n"+req);
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