function f1(number){
    return number + number
}

function f2(ele){
    return ele * f1(ele)
}

a= f2(1)
console.log(a)