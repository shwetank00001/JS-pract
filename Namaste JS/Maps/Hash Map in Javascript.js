let s = "shwwwtetank"
let arr = s.split('');

let hashMap={};

for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
    if(!hashMap[arr[i]]){
        hashMap[arr[i]] = 1
    }
    else {
        hashMap[arr[i]] += 1
    }
}

console.log(hashMap);