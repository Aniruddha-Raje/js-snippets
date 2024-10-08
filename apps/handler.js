let service = require('./createResponseOrError.js');

let test = async () => {

    try {
        let response = await service.createError(0);    
        console.log("Response => ",response);
    } catch (error) {
        console.log("Error => ", error);
    }
};
test();