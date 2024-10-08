const { Parser } = require('json2csv');
 
const fields = ['car', 'price', 'color'];
const myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];
 
const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);
 
console.log(csv);