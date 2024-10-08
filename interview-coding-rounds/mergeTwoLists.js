let mergeTwoLists = async () => {

    let list1 = [1,2,4];
    let list2 = [1,3,4,6,7];
    
    let mergedArr = [];

    let len = list1.length > list2.length ? list1.length : list2.length;
    console.log("len => ", len);
    
    for(let i = 0; i < len; i++){
        if(list1[i] != undefined && list2[i] != undefined){
            if(list1[i] < list2[i]){
                mergedArr.push(list1[i]);
                mergedArr.push(list2[i]);
            }
            else{
                mergedArr.push(list2[i]);
                mergedArr.push(list1[i]);
            }
        }
        else if(list1[i] != undefined){
            mergedArr.push(list1[i]);
        }
        else{
            mergedArr.push(list2[i]);
        }
    }
    console.log("mergedArr => ", mergedArr);
};

mergeTwoLists();
