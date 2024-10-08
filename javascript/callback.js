function one(callback){
    console.log("Doing some processing!");
    let messageToPass = "Processing complete!";
    
    callback(messageToPass);
}

function two(messageToPass){
    console.log("Callback function called!\n", messageToPass);
}

one(two);