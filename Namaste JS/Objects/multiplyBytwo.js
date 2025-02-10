let obj1 = {
    a: 20,
    b: 50,
    c: "DSsf",
    d: []
}
multiplyByTwo(obj1)

function multiplyByTwo(params){
    for (keys in params){
        if(typeof params[keys] === "array"){
                params[keys] = params[keys] * 2;
        }

    }
}
console.log(obj1)