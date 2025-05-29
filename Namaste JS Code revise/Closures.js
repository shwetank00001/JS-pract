function x(){
    function y(){
        console.log(a)
    }
    let a = 100;
    return y
}


const z = x();
console.log(z);
z();
