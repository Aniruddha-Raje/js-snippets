let removeDuplicates = async () => {

    let arr = [1,2,2,3,3,4];
    let finalArr = new Set();

    for(let i in arr){
        finalArr.add(arr[i]);
    }
    console.log("ori => ", arr, " new => ", Array.from(finalArr));

}

removeDuplicates();