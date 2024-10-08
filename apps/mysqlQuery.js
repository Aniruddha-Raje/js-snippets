var mysql = require('mysql');
var http = require('http');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "junit"
});

con.connect(function(err) {
  if (err) throw err;
  /*Select all customers with the address "Park Lane 38":*/
  //con.query("SELECT id, name FROM role WHERE id = '4'", 
  con.query("SELECT id, name FROM role",
  function (err, result) {
        if (err) throw err;
    console.log(result);
    console.log(result.length);
  });

  // con.query("INSERT INTO role (name) VALUES ('Test Role')", 
  //   function (err, result) {
  //       if (err) throw err;
  //   console.log(result);
  // });

  // con.query("UPDATE role SET name = 'New Name' WHERE id = '4'", 
  //   function (err, result) {
  //       if (err) throw err;
  //   console.log(result);
  // });

});
