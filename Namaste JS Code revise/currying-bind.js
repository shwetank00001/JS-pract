// currying means presetting the values of a parametre in a func. 

let valuesMulti = function(x,y){
    console.log(x * y)
}

const multi = valuesMulti.bind(this,4);
multi()