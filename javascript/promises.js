let giveInterview = new Promise(function(resolve, reject){

    let cleared = true;

    if(cleared){
        resolve("Interview cleared!");
    }
    else{
        reject("Interview failed!");
    }

});

giveInterview.then(function(data){
    console.log("Success message => ", data);
})
.catch(function(error){
    console.log("Error message => ", error);
});



let giveNewInterview = async () => {
    return new Promise(function(resolve, reject){
        resolve("Interview cleared");
    });
};

let takeOffer = async (message) => {
    
    return new Promise(function(resolve, reject){
        resolve(message + " => Offer received");
    });
};

let takeBetterOffer = async (message) => {

    return new Promise(function(resolve, reject){
        resolve(message + " => Even better offer received");
    });
};

giveNewInterview().then(function(result){
    return takeOffer(result);
})
.then(function(result){
    return takeBetterOffer(result);
})
.then(function(result){
    console.log(result + " => Negotiate with own company's HR");
});