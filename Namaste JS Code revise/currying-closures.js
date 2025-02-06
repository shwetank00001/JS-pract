function x(paramB){
    let a = "Hi";
    function y(){
        console.log(a + " "+ paramB)
    }
    return y
}

const z = x("Shwetank");
z()