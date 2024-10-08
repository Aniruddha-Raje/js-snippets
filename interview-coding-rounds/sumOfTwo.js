var twoSum = function(nums, target) {

    let x = 1;

    for(let i = 0; i < nums.length; i++){

        for(let j = x; j < nums.length; j++){
            console.log("i => ", i, "| j => ", j);

            if((nums[i] + nums[j]) == target){
                console.log("found! i => ", i,"| j => ",j);
                return true;
            }
        }
        console.log("x bef => ", x);
        x = i+2;
        console.log("x aft => ", x);
    }
    
};

//twoSum([2, 7, 11, 15],9);
twoSum([2,5,5,11], 10);