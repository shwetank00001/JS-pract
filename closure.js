// In JavaScript,
//  a closure is a function that has access to variables from its outer (enclosing) scope, 
//  even after that outer scope has finished executing.
//  This allows you to maintain state between function calls and create private data. 
//  Closures are often used for data encapsulation, event handling, and creating modular code structures. 
//  They are created when a nested function references variables from its containing function's scope.


function outer(){
    let out= "IM OUTER"

    function inner(){
        console.log(out)
    }

    return inner
}

const data = outer()
data()