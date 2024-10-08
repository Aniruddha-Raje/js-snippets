var arr = [11,1,10,3];
console.log("Simple sort => ", arr.sort());

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
    }
]


var sortedDevs = devs.sort((a,b) => (a.age > b.age ? 1 : -1));
console.log(sortedDevs);

//Case insensitive sorting of array of objects

var fruits = [
    {name:'apple', capital:'sample'},
    {name:'Tomato', capital:'sample'},
    {name:'jack fruit', capital:'sample'}
 ];
 
 fruits.sort((a, b) => {
   a = (a.name || '').toLowerCase();
   b = (b.name || '').toLowerCase(); 
   return (a > b) ? 1 : ((a < b) ? -1 : 0);
 });
 
 console.log(fruits);