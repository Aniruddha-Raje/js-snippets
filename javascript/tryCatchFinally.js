let test = async() => {
    try {
        //throw "error"
        return await 10;;
    } catch (error) {
        console.log("error => ", error);
        return await 20;
    }
    finally{
        console.log("Finally")
    }
 }

let response = test()
console.log("response => ", response);