//callByValue

let n1 = 10; 
let n2 = 20; 

let callByValue = async (n1, n2) => { 
    n1 = 100; 
    n2 = 200; 
    console.log(n1 +" | " +n2); 
}

console.log("Before update => " + n1 +" | " +n2); 
callByValue(n1, n2);
console.log("After update => " + n1 + " | " + n2); 


//callByReference

let varObj = {
    a:1
};

let callByReference = async (varObj) => { 
    varObj.a = 100; 
    console.log(varObj); 
} 

console.log("Before update => ", varObj);
callByReference(varObj) 
console.log("After update => ", varObj);