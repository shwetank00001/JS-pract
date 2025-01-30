// PRESETTING THE VALUE IS CALLED FN CURRYING

function multiply(x,y){
    console.log(x*y) ;
}

let mult2 = multiply.bind(this, 2) // this pre-sets the value of x as 2
console.log(mult2) 
mult2(5)

