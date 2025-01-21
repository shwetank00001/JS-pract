// This is called as as a function statement or a function declaration.
function a(){
    console.log("a is called")
}
a()


// function expression
var b = function(){
    console.log("b is called")
}
b()


// anonymous functions
// function(){
//     console.log("b is called")
// }


// named fn expression
var c = function xyz(){
    console.log("c is called")
}
c()
// xyz() =  ReferenceError: xyz is not defined



// what is the difference between parameter and arguements
function d(param1, param2){
    console.log(" d is called", param1, param2)
}
d(1,2) // arguements

//FIRST CLASS FUNCTIONS =  Ability of a function to be used like a value = First class Citizens
function first(){
    return function child(){
        
    }
}
console.log(first())

function second(param1){
    console.log(param1)
}

second(function secondchild(){

})


// Closure + data hiding + hoisting
function outer(){
    var outerLocal = 10;
    function inner(){
        console.log(outerLocal)
    }
    return inner
}

const outer1 = outer()
outer1()