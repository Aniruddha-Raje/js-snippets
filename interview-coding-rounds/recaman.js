const recaman = async() => {
    let n = 6;
    let arr = [];
    arr[0] = 0;
    
    console.log(arr[0] + ",");
    
    for (let i = 1; i < n; i++){
        let curr = arr[i - 1] - i;
        let j;

        for (j = 0; j < i; j++){
            if ((arr[j] == curr) || curr < 0){
                curr = arr[i - 1] + i;
                break;
            }
        }
    
        arr[i] = curr;
        console.log(arr[i]+", ");
    }
}
     
recaman();