// sum of arrays-> non func way

const a = [5,1,3,2,6]


function sumA(){
    let sum =0;
    for (let i =0; i< a.length; i++){
        sum = sum + a[i]
    }
    console.log(sum)
}

sumA()


const ele = a.reduce(function(acc,curr){
    acc = acc + curr;
    return acc
}, 0)
console.log(ele)

const max = a.reduce(function(acc, curr){
    if(curr > acc ){
        acc = curr
    }
    return curr
},0)

console.log(max)