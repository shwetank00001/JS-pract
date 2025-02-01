// Every variable type is hoisted in JS. 
// var is accessible everywhere, but the scope is limited to function scope only
// let and const are hoisted in block scope.
// we can not access let and const before their declaration in their TDZ. 

// How will i explain in interview?

console.log(x)
var x = 10

get()
function get(){
    console.log("hi")
}