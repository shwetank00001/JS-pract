let obj1 = {
    name : "shwetank",
    age: 25,
    "is a cool guy": true
}
console.log(obj1)
console.log(obj1.name)
console.log(obj1["is a cool guy"])
console.log(delete obj1["is a cool guy"]) // delete is only an obj property
console.log(obj1)
console.log("--------LOOPING THRU AN OBJ------------");
//LOOP thru the obj
let obj2 = {
    name2: "swapnil",
    area: "iffco",
    "is a smart guy" : false
}
for (key in obj2){
    console.log(key)
    console.log(obj2[key])
}

//famous interview ques
// other same key will be considered while printing
const test = {
    a: "first",
    b: "second",
    a: "thrird"
}
console.log(test)


//multiply By 2
let nums = {
    a: 100,
    b : 200,
    "done by" : "shwetank"
}
let multiplyBytwo = function(){
    console.log(this.a * this.b )
}
multiplyBytwo.call(nums)