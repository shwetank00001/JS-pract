const a = [5,1,3,2,6]
const primArr =[2,3, 6,5,7, 14, 21 ]

const ele = a.filter(function(item){
    return item % 2 !== 0;
})
console.log(ele)

const prime = primArr.filter(function(item){
    return item % 1 === 0 && item % 7 === 0;
})
console.log(prime)