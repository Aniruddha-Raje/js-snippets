var fs = require('fs');
var pdf = require('html-pdf');

var html = fs.readFileSync('/home/user/Desktop/node/index.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('/home/user/Desktop/node/output.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});