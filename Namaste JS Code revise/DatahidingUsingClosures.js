function dataHiding(){
    let count= 0;
    function y(){
        console.log("Count is: ", count++)
    }
    return y;
}

const z = dataHiding();
console.log(z)  // z = function y
z();
z();
z();
z();
