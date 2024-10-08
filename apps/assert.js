var assert = require('assert');

var x = { a = { n: 0 } };
var y = { a = { n: 0 } };
var z = { a = { n: '0' } };

console.log("assert => "+assert(50 > 70));
console.log("assert.ok => "+assert.ok(50 > 70));

console.log("deepEqual 1 => "+assert.deepEqual(x, y));
console.log("deepEqual 2 => "+assert.deepEqual(x, z));
console.log("deepStrictEqual => "+assert.deepStrictEqual(x, z));

console.log("equal 1 => "+assert.equal(50, 50));
console.log("equal 2 => "+assert.equal(50, "50"));
console.log("equal 3 => "+assert.equal(50, 70));