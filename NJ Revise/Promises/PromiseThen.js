const cart = ["shoes", "magic", "bag"];

const promise1 = new Promise((resolve,reject) => {
    if(!cart){
        const a = {
            name: "Shwetank",
            age: 26
        }
        resolve(a);
    }
    throw new Error("Error")
})

promise1.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log("Error has popped up!", err)
})