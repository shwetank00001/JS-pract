//THIS FIXES ISSUE OF CALLBACK HELL

const cart = ["laptop", "back", "phone"];

function createOrder(cart){
    return new Promise(function(resolve, reject){
        if(cart){
            resolve(cart);
        }
        else reject("No Cart")
    })
}

function payment(data){
    return new Promise(function(resolve, reject){
        if(data){
            resolve(console.log("Redirected to payments page ", data));
        }
        else reject("Payment failed")
    })
}

function orderSuccess(data){
    return new Promise((resolve, reject) => {
        if(data){
            resolve(console.log("Payment is done, ORDER ID is ->>", data))
        }
        else reject (new Error("No Order done"))
    })
}

const promise =  createOrder(cart);

promise
.then(function(data){
    console.log("cart data",data);
    return data;
})
.then(function(data){
    payment(data);
    return data
})
.then(function(data){
    orderSuccess(data)
})
.catch(error=> console.log(error))
