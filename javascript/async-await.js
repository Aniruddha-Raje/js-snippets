//Looping DB calls
(function f() {

    let arr = [1,2,3];
    let i = 0;

    arr.forEach(function(element){
        (async function(){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(element), 2000)
            });
            
            let result = await promise;
            i++;
            console.log(result);

            if(i === arr.length){
                console.log("done");
            }
        })();
    }); 
})();