// Closure : A function 'y()' bind together with it's lexical scope ['y()'s local memory + x()'s lexical env'] 
// You borrow your mom's purse (outer function). Even when she leaves the room, you can still use the purse (inner function) because you have it with you. The purse contains her belongings (variables), and you can access them.


function x(){
    var a = 20
    function y(){
        console.log(a)
    }
    return y;  // this returns the value of x() = func y()
}
var z = x()
console.log("x value => ", z)

// function  abc(){
//     var _ = 50
//     function xyz(){
//         console.log(_)
//     }
//     console.log(xyz)
// }

// abc()