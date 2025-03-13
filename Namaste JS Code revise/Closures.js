function x(){
    let a = 100;
    function y(){
        console.log(a)
    }
    return y
}

let z = x();
console.log(z);
z()