function x(param){
    let a = 50;
    function y(){
        console.log(a)
        console.log(param)
    }
    return y
}
// x() =>fn y
const z = x("Hshfhsfhs"); // function currying with the help of closures!
z()

//this happens because we returned a fn y (6)// not only the fn was returned -> but a closure was returned!

