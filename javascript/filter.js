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

var arr2 = arr.filter(function(temp){

    if(temp > 1){
        return true;
    }

});

var arr3 = arr.filter(temp => temp > 1);

console.log(arr2);
console.log(arr3);

//var arr4 = devs.filter(temp => temp.addr.city === 'Pune');
var arr4 = devs.filter(temp => temp.tech.includes('AWS'));
console.log(arr4);