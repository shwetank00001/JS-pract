const a = [5,1,3,2,6]

function maxNum(aParam){
    let max = 0;
    for(let i=0; i<aParam.length; i++){
        if(aParam[i] > max){
            max = a[i]
        }
    }
    return max;
}

console.log(maxNum(a))