// shallow copy-> let obj1=ob2 refers to same reference of the obj1, not the value
let obj1 = { a: 10, b:20}
let obj2 = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj2.a = 50);
console.log(obj2);

// DEEP copy => copies the whole object reference to another variable
let deepObj1 = { c: 100, d:200}
let deepObj2 = JSON.parse(JSON.stringify(deepObj1))
console.log(deepObj1)
console.log(deepObj2)
deepObj2.c = 1000
console.log(deepObj2)
