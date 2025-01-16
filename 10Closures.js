// Closure : A function 'y()' bind together with it's lexical scope ['y()'s local memory + x()'s lexical env']

function x(){
    var a = 20
    var b = 200
    y()
    function y(){
        console.log(a)
    }
}
x()
