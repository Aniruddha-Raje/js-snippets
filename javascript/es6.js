// Let and const keywords.
// Default Parameters. function multiply(a, b = 1) {} 
// Arrow functions - write shorter function syntax.
// Template Literals => ` ${variableHere} `.
// Object Literals => an object literal is a comma-separated list of name-value pairs inside of curly braces
// Rest and spread operators - allows us to quickly copy all or part of an existing array or object into another array or object
// Destructuring assignment.
// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// Modules, Classes, Generators, and iterators. - Modules rely on the import and export statements, classes allow inheritance using extends
// Promises, and many more.

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// ==========  JavaScript let ========== 
var x = 10;
{
  let x = 2;
  console.log("inner x => ", x);

}
console.log("outer x => ", x);


// ========== JavaScript const ==========
var x2 = 10;
{
  const x2 = 2;
  console.log("inner x2 => ", x2);

}
console.log("outer x2 => ", x2);



// ========== Arrow Functions ========== 
// ES5
var x = function(x, y) {
    return x * y;
}
 
// ========== ES6 ========== 
const x = (x, y) => x * y;


// ========== Default Parameter Values ========== 
let myFunction = async (x, y = 10) => {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(5); // will return 15


// ========== The isNaN() Method ========== 
isNaN("Hello"); 
// returns true
