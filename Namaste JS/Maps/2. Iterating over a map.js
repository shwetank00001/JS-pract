//Iteration of keys and values in Maps and Object

const test  = new Map();
test.set("EY", "SDE-1");
test.set("Amz", "SWE");
test.set("FB", "Front End Dev");


//We use "of" when iterating over a map
for(let [key, value] of test){
    console.log(`Hi the position is ${value} in ${key}`)
}
console.log('\n')
console.log("==== Object iteration below ====");

//OBJECT iteration

//We use "in" when iterating over a object
const obj1 = {
    name:"Shwetank",
    company: "Welocalize",
    age: 26,
    add : {
        location: "Gurgaon",
        sector : "Phase 3"
    }
}
for (let keys in obj1){
    console.log(keys)
}
console.log('\n')
for (let keys in obj1){
    console.log(obj1[keys])
}
console.log('\n')
console.log("asfsfs", obj1["name"])
console.log("asfsfs", obj1.name)