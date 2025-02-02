let names = {
    fname: "shwe",
    lnm :"mis"
}

let methodFn = function(hometown, area, country){
    console.log(this.fname, this.lnm, hometown, area, country)
}
const print = methodFn.bind(names);
print();

Function.prototype.customBind = function(...args){
    let obj1 = this, 
    params = args.slice(1)
    return function(...args2){
        obj1.apply(args[0], [...params, ...args2])
    }
}

const print2 = methodFn.customBind(names, "Bareilly", "IFFCO")
print2("INDIA")