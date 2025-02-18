function x(){
    let a = 20;
    let b = 50;
    function y(){
        console.log(a)
    }
    return y
}

let z = x();
z()

//B is garbabe collected

const arr = [131,44,22,1];
arr.sort((x,y) => x-y)
console.log(arr)

arr.reverse();
console.log(arr)


let obj1 = {
    a: "",
    b: 40,
    c: [],
    d: "",
    e: 50
}
console.log(obj1)

for(i in obj1){
    if(obj1[i] ==="" || obj1[i].length === 0){
        delete obj1[i]
    }
}
console.log(obj1)