// Promise chaining solves the issue of Callback hell

let cart = ["shoes" , "laptop", "Mouse"]

let cartData = function(){
    return new Promise((resolve, reject) => {
        if(cart){
            resolve(cart)
        }
        reject( new Error("Err"))
    })
}
let payment = function(data){
    return new Promise((resolve, reject) => {
        if(data){
            resolve(console.log("Payment done!"))
        }
        reject( new Error("Payment has failed!"))
    })
}
let paymentDetails = function(data){
    return new Promise((resolve, reject) => {
        if(data){
            resolve(console.log("Here is the payment detail :- ID!"))
        }
        reject( new Error("Payment has failed!"))
    })
}

cartData()
.then((data) => {
    console.log(data)
    return data
})
.then((data) => {
    payment(data)
    return (data)
})
.then((data) => {
    paymentDetails(data)
})
.catch((err) => {
    console.log(err)
})
