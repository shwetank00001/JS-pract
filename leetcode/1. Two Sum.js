let nums = [3,2,4];
let target = 6
function abc(n, t){
    let data = []
    for (let i = 0; i<n.length; i++){
        for( let j =0; j< i; j++){
            if(n[i]+n[j] === t){
                data.push(j);
                data.push(i);
            }
        }
    }
    console.log(data)
}

abc(nums, target)