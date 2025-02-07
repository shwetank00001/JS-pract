let names = {
    fname: "shwetank",
    lname: "mishra",
    // printName: function(){
    //     console.log(this.fname+" "+this.lname)
    // }
}
// names.printName()

let printName= function(hometown, state){
    console.log(this.fname+" "+this.lname+" "+hometown+" "+state)
}

// let n = printName.call(names) = undefined    
let usingBind = printName.bind(names, "Bareilly" )
usingBind("UP")  // we know

// Custom function here ->
Function.prototype.myBind = function(...args){
    let obj = this
    let params = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let usingBind2 = printName.myBind(names, "Noidaaa")   // we want myBind to work same as bind, we know
usingBind2("Uttar") // we are doing to this get the value, but we know that PRINTNAME method will be executed.
// So we will add PRINTNAME() in our function prototype
