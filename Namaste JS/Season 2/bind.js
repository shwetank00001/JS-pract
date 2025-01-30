// BIND makes  a copy of a method
let method1 = function(){
    console.log("This is method 1")
}

method1()
let method1Bind = method1.bind()  // made a copy here
method1Bind()


let output = function(){
    console.log(this.fname + this.lname)
}
let obj1 = {
    fname:"shw",
    lname:"mis"
}
let obj2 = {
    fname:"jos",
    lname:"tan"
}
let outBind = output.bind(obj1)
output.call(obj2)
outBind()
