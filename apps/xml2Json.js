var parseString = require('xml2js').parseString;

let xml = `<root><product_id>020893334876081</product_id>
<product_purchase_date>2021-09-15T08:51:55.183Z</product_purchase_date></root>`

parseString(xml, function (err, response) {
    console.dir(response.root.product_purchase_date);
});