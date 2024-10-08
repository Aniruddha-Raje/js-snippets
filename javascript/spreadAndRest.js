const innerArr = [3,4];
const arr = [1,2, ...innerArr];

console.log("arr => ", arr, "\n===================");

const innerObj = {
    name: "name",
    age: 29
}

const obj = {
    city: "Pune",
    ...innerObj
}
console.log("obj => ", obj, "\n===================");


function restOperator(a, ...manyMoreArgs) {
    console.log("first arg => ", a)
    console.log("remaing args => ", manyMoreArgs)
}
  
restOperator("one", "two", "three", "four", "five", "six")