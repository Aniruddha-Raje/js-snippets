(async function f() {

    let arr = [1,2,3];
    var resp = [];
    
    //Set timeout is not a async function
    // await setTimeout(() => {
    //         resp = arr.filter(temp => temp > 1);
    //         console.log('1. => ' + resp);
    //         console.log('2. ');
    // },2000);

    var fun = function(){
        resp = arr.filter(temp => temp > 1);
        console.log('1. => ' + resp);
        console.log('2. ');
        console.log('3. ');
        console.log('4. ');
        console.log('5. ');
        console.log('6. ');
        console.log('7. ');
        console.log('8. ');
        console.log('9. ');
    }

    await fun();
    
    console.log('10. ');
})();

