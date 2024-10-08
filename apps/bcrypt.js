const bcrypt = require('bcrypt');
var async = require('async');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

var seriesArray = [];

var one = function(callback){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            console.log("Hash 1 => " + hash + "\n");

            bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
                callback(err,"Original Test of Hash1 => " + res);
            });
        });
    });
}

var two = function(callback){
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        console.log("Hash 2 => " + hash + "\n");
    
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            callback(err,"Original Test of Hash2 => " + res);
        });
    });
}
seriesArray.push(one);
seriesArray.push(two);

async.series(seriesArray,
function(err, results) {
    console.log(results);
});