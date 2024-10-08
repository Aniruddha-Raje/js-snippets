var fruits = ["1", "2", "5"];

fruits.splice(2, 0, "3", "44")
console.log(fruits);

let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.slice(2, 4));

//MAP
const arr3 = [1, 2, 3, 4, 5, 6];
const mapped = arr3.map(el => el + 20);
console.log(mapped);
// [21, 22, 23, 24, 25, 26]

//FILTER
const arr4 = [1, 2, 3, 4, 5, 6];
const filtered = arr4.filter(el => el === 2 || el === 4);
console.log(filtered);
// [2, 4]

//REDUCE
const arr5 = [1, 2, 3, 4, 5, 6];
const reduced = arr5.reduce((total, current) => total + current);
console.log(reduced);
// 21