const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hash = "$2b$10$DlGtAREFqEL.c/cm.iO8iuCwZhG/vxcQgC0FFosba6SjeMWpXChGb";

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         console.log("Hash 1 => " + hash + "\n");
//     });
// });

//Verify Password with HASH from a DB
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    console.log("Original Text of Hash1 => ", res);
});

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     console.log("Hash 2 => " + hash + "\n");

//     //Verify Password with HASH from a DB
//     bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//         console.log("Original Text of Hash1 => ", res);
//     });
// });