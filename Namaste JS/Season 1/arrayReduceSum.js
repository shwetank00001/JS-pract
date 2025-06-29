// reduce is used to give a single value from an array.

// acc is just like; sum=0 in afor loop and
// current is just like; a[i] in a for loop => current directly has the access to the values when using reduce
const arr = [1,3,5,5,2,4,9]
const output = arr.reduce(function(acc, current){
    acc = acc + current;
    return acc;
}, 0) // this is the initial value

console.log(output);



