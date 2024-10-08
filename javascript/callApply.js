let func = async(a, b) => {
    
    console.log("a => ", a, "b => ", b);
    return a + b;
};
  
console.log("call => ", func.call(null, 1, 2));

console.log("apply => ", func.apply(null, [1, 2]));