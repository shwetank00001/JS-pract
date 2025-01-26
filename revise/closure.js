//Data hiding tooo
function abc(){
    let a = 20;
    function y(){
        console.log(a)
    }
    return y;
}

const z = abc();
console.log(z)
z()


// HERE y is returned at 6 so abc() = function y, and y() is called outside now,
// z = abc() = function y ; so at 6 its not returning a function, but returning the whole closure
// A function y bind together with its lexial scope is called as a closure.

