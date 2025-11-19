const str = "Shswetankk";
// lets count the freq of every character ;

const arr = str.split('');
console.log(arr);

const hashmap = {};

for(let i in arr){
    console.log(arr[i]);

    if(!hashmap[arr[i]]){
        hashmap[arr[i]] = 1;
    }
    else {
        hashmap[arr[i]] +=1
    }
}

console.log(hashmap)
console.log(hashmap)