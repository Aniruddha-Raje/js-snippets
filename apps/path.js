var path = require('path');

console.log("basename => "+path.basename('/Users/Refsnes/demo_path.js'));

console.log("\ndirname => "+path.dirname('/Users/Refsnes/demo_path.js'));

console.log("\nextname => "+path.extname('/Users/Refsnes/demo_path.js'));

var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
console.log("\nformat => "+path.format(obj));

console.log("\nisAbsolute 1 => "+path.isAbsolute('/test/demo_path.js'));
console.log("\nisAbsolute 2 => "+path.isAbsolute('test/demo_path.js'));
console.log("\nisAbsolute 3 => "+path.isAbsolute('C:\\test\\demo_path.js'));

console.log("\njoin => "+path.join('Users', 'Refsnes', '..', 'demo_path.js'));

console.log("\nnormalize => "+path.normalize('Users/Refsnes/../Jackson'));