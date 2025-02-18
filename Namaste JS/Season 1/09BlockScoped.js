
// this is a block in JS. {}
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}


// Shadowing example 
let x = 10;
{
    let x = 50
    console.log(x)
}
console.log(x)



// Shadowing Another example
let u = 10
{
    let v = 20
    var aw = 30
    const y = 40
    console.log(v)
    console.log(aw)
    console.log(y)
}
console.log(u)



// we can do this since let is in block memory and var in global
var a_ = 50
{
    let a_ = 500
}


// Lexical scoping using const
const blo = 50
{
    const blo = 100
  
    {

        console.log(blo)

    }
}