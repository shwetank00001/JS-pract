async function get(){
    return "Shwe"
}
const data = get();
console.log(data)


async function get2(){
    return new Promise(function(resolve, reject){
        resolve ("This is resolved")
    })
}
const data2 = get2()
data2.then(res => console.log(res))


const p =  new Promise(function(resolve, reject){
    resolve ("This is Async resolved")
})
async function get3(){
    const value = await p;
    console.log(value)
}
get3();

//three ways to create a promise.


