var fruits = ["Banana", "Orange", "Apple", "Mango"];

// pop() Remove an item from the end of an array
// push() Add items to the end of an array
// shift() Remove an item from the beginning of an array
// unshift()  Add items to the beginning of an array

console.log("sort => ", fruits.sort());        // First sort the elements of fruits
console.log("reverse => ", fruits.reverse());     // Then reverse the order of the elements

var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));

console.log("toString => ", fruits.toString());

console.log("join => ", fruits.join(" * "));

console.log("pop => ", fruits.pop());

console.log("push => ", fruits.push("Kiwi"));

console.log("shift => ", fruits.shift());

console.log("unshift => ", fruits.unshift("Lemon"));


console.log("delete => ", delete fruits[0]);

console.log("splice => ", fruits.splice(2, 0, "Lemon", "Kiwi"));
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

console.log(fruits.slice(1));

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3


