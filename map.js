const a = [5,1,3,2,6]

// const output = a.map(function(item){
//     return item * 2
// })
// console.log(output)

// we can simplify this callback and store it somewhere too. 
// How this works>? Because functions are First Class Functions/Citizens 

function double(item){
    return item * 2
}

function binary(item){
    return item.toString(2);
}
const output = a.map(double)
console.log(output)

const output1 = a.map(binary)
console.log(output1)

const triple = a.map( (item) => item * 3)
console.log(triple)