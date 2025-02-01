let nums = [1001]; 
let target = 5;

var searchInsert = function(a, target) {
    if (a.includes(target)){
        console.log(a.indexOf(target))
    }
    else {
        a.push(target);
        a.sort((a, b) => a - b);   //imp
        console.log(a)
        console.log(a.indexOf(target))
    }
};

searchInsert(nums, target)
