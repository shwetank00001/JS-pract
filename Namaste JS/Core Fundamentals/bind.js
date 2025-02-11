let obj1 = {
    a: 10
}

let printName = function(){
    console.log(this.a)
}

let obj2 = {
    a: 20
}

printName.call(obj2);
let test = printName.bind(obj1);
test()
