function x(){
    var a = 5;
    var b = 6;
    function y(){
        console.log(a);
    }
    return y;
}

const z = x();
z();

