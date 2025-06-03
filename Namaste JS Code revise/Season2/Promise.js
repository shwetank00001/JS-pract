//THIS FIXES ISSUE OF invsersion of contorl
const cart = ["laptop", "back", "phone"];

function createOrder(cart){
    let cartPr = new Promise(function(resolve, reject){
        if(cart){
            resolve(cart);
        }
        else reject("No Cart")
    })
    return cartPr
}

const promise =  createOrder(cart);
console.log(promise);

promise.then((data) => console.log(data)).catch((er)=> console.log(er))


//suppose we have a payment

