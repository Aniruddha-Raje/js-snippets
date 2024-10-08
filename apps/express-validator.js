const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator/check');

app.use(express.json());

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", 'Content-Type, Accept, X-Access-Token');

  if (req.method == 'OPTIONS') {
      res.status(200).end();
  } else {
      next();
  }
});

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));

});

var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});