function x(){
    const a = 10;
    function y(){
        console.log(a);
    }
    return y
}

console.log(x());
const z = x();

z()