const a = "shwetank"
const b = a.split('')
console.log(b)

const c = b.reverse().join('')
console.log(c)

if(a == c){
    console.log("Valid")
}
else {
    console.log("invalid")
}