let a = [0,1]

var missingNumber = function(nums) {
    let b = nums.sort().reverse();
    console.log(b)
    let miss;
    if(b[0] === 1){
        miss = 1+1
        console.log("miss", miss)
    }
    else if(b[0] === 0){
        return 1
    }
    else miss = b[0] - 1;
    console.log(miss)
};

missingNumber(a)