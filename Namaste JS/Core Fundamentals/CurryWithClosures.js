// PRESETTING THE VALUE IS CALLED FN CURRYING

function outer(x){
    function inner(y){
        console.log(x*y)
    }
    return inner
}

const closureCurr = outer(10)
closureCurr(20);