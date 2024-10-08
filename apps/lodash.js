// Load the full build.
var _ = require('lodash');

var arr = ['apple', 'banana', 'strawberry', 'banana', 'orange']
var arr = _.concat(arr, 2, [3], [[4]]);
console.log(arr);
console.log("\n===============================");
// output: ["apple", "banana", "strawberry", "banana", "orange", 2, 3, Array(1)]


var arr1 = [{'fruit': 'apple'}, {'fruit': 'banana'}, {'fruit': 'strawberry'}, {'fruit': 'banana'}, {'fruit': 'orange'}]
var arr = _.find(arr1, function(obj){ 
	if(obj.fruit == "apple"){
		arr1.push(_.extend(obj, {"quantity": 20}));
	}
});
console.log(arr1)
console.log("\n===============================");

var array = [ 1, 2, 3, 4 ,5 ];
_.first(array, 3);
console.log("first => " + array);
// returns [1,2,3]
console.log("\n===============================");

_.rest(array, 3);
console.log("rest => " + array);
// returns [1,2,3]
console.log("\n===============================");

_.compact(array);
console.log("compact => " + array);
// returns [ 1,2, true]
console.log("\n===============================");

_.flatten(array);
console.log("flatten => " + array);
// returns [1,2,3,4]
console.log("\n===============================");

_.each(array, function(v,i){
    array[i] = v*2;
});
console.log("each => " + array);
// does not return anything, just sets array to [ 2, 4, 6 ];
console.log("\n===============================");