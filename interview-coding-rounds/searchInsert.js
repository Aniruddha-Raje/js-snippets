var searchInsert = function() {
    let arr = [1,3,5,6];
    let target = 7;
    
    for (let i = 0; i < arr.length; i++) {
      if (target <= arr[i]) {
        return i;
      }
    }
    
    return arr.length;
    
};