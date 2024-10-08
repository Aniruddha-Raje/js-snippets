// .map() method allows you to run a function on each item in the array, returning a new array as the result

var arr = [1,2,3,'four'];

var devs = [
    {
        name: 'A',
        age: 1,
        tech: ['Java','Node','AWS'],
        addr:{
            country:'India',
            city:'Pune'
        }
    },
    {
        name: 'B',
        age: 2,
        tech: ['Node','AngularJs'],
        addr:{
            country:'USA',
            city:'NY'
        }
    },
    {
        name: 'C',
        age: 3,
        tech: ['AWS'],
        addr:{
            country:'UK',
            city:'London'
        }
    }
]

var cities = devs.map(temp => temp.addr.city);
console.log(cities);

var cities1 = devs.map(temp =>`${temp.name} [${temp.addr.city}]`);

var cities2 = devs.map(temp => ({"name":temp.name, "tech":temp.tech}));

console.log(cities1);
console.log(cities2);


let myMap = new Map()

let keyString = 'a string'
let keyObj    = {}
let keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

myMap.size              // 3

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
myMap.get(keyObj)       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

myMap.get('a string')    // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({})            // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}