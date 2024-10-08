let test = async () => {
    let externalCallResponse = '';

    setTimeout(async () => {
        externalCallResponse = await apiRequest();
    }, 0);

    await timeout(3);
    console.log('after timeout')

    if (externalCallResponse != '') 
        return true;
    else 
        return false;
};

test()
.then(res => console.log(res))
.catch(err => console.log(err.message));

function timeout() {
    return new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
}
  
function apiRequest() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hello World')
            resolve('Hello World')
        }, 1000);
    });
}