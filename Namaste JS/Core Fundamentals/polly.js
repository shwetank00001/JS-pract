let obj1 = {
    fname: "Shwetank"
}
let obj2 = {
    fname :"swapnil"
}
let print = function(home){
    console.log(this.fname +" "+home)
}
print.call(obj1)
let bindTest = print.bind(obj1)
bindTest()  // now we know bind returns a function

Function.prototype.customBind = function(...args){
    console.log(args)
    console.log(...args)
    let obj = this   // this is storing the function - print - on which custombind is called
    let params = args.slice(1)
    console.log(params)
    return function(){
        obj.apply(args[0], params)
    }
}

let customAns = print.customBind(obj1, "Bareilly")
customAns()