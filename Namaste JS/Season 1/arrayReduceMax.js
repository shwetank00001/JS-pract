const arr = [1,3, 10, 400,5,5,2,4,9];
// const a= arr.sort((x,y) => x-y).reverse()

// console.log(a[0]);

const output = arr.reduce(function(acc, current){
    if(acc < current ){
        acc = current;
    }
    return acc;
}, 0);

console.log(output)