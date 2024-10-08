var express = require('express');
var app = express();
var fs = require('fs');
var compression = require('compression');

app.use(compression({filter: shouldCompress}))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}
 
app.get('/compressed',function (req,res){
    fs.readFile("/home/user/office/node-crud-app/testJson.json", 'utf8',
        function (err, data) {
            if(err){
                console.log(err);
            }
            else{
                var temp = JSON.parse(data);
                res.end(JSON.stringify(temp));
            }
    });
});

app.get('/unCompressed',function (req,res){
    fs.readFile("/home/user/office/node-crud-app/testJson.json", 'utf8',
        function (err, data) {
            if(err){
                console.log(err);
            }
            else{
                var temp = JSON.parse(data);
                res.end(JSON.stringify(temp));
            }
    });
});

var server = app.listen(4300, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});