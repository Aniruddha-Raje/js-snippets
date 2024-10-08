//Object Literal
var person = {
    name: 'Ani',
    age: 25,
    tech: ['Java','Node','AWS'],
    addr:{
        country:'India',
        state:'State',
        city:'Pune'
    },
    display: function(){
        console.log('Name: ' + this.name + '\n' + 
        'Age: ' + this.age + '\n' + 
        'Tech: ' + this.tech + '\n' + 
        'Addr: ' + this.addr.country + ',' + this.addr.state + ',' +this.addr.city);
    }
}

person.display();

//===================================================================================
//Object Constructor

var obj = new Object();
obj.name = 'Ani';
obj.age = 25;
obj.tech = ['Java','Node','AWS'];
obj.addr = {
    country:'India',
    state:'State',
    city:'Pune'
};
obj.display = function(){
    return 'Name: ' + this.name + '\n' + 
    'Age: ' + this.age + '\n' + 
    'Tech: ' + this.tech + '\n' + 
    'Addr: ' + this.addr.country + ',' + this.addr.state + ',' +this.addr.city + '\n' 
}
console.log('\n'+obj.display());

//===================================================================================
//Constructor Pattern

function myObj(name,age){
    this.name = name;
    this.age = age;

    this.display = function(){
        return 'Name : ' + this.name + '\n' +
                'Age : ' + this.age
    }
}

var ani = new myObj('Ani',26);
console.log(ani.display());
//===================================================================================
