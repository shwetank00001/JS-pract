console.log([..."Shwetank"])

//AN EXAMPLE OF DEEP COPY 
const obj1 = {
    name : "Hi",
    age: 25
}
const obj2 = {...obj1}
obj2.name = "hello"

console.log(obj1)
console.log(obj2)