// createOrder
// paymentApi
// showOrderSummary
// updateWallet\
// we have to call each other after wach other


let cart = ["Need a better job", "A good LPA", "Right away!"]

function createOrder(){
    return new Promise(function(resolve, reject){
        if(cart){
            resolve (cart)
        }
        else 
        reject (new Error("This is a custome error"))
    })
}

function paymentApi(data){
    return new Promise(function(resolve, reject){
        if(data){
            resolve (console.log("The payment has been received"));
        }
        else
        reject (new Error("Payment has been failed"))
    })
}

function showOrderSummary(data){
    return new Promise(function(resolve, reject){
        if(data){
            resolve (console.log(`The order summary is:- ${cart}`));
        }
        else
        reject (new Error("No Summary since payment failed"))
    })
}
function updateWallet(data){
    return new Promise(function(resolve, reject){
        if(data){
            resolve (console.log(`The wallet balance is update upon successful completion of payment.`));
        }
        else
        reject (new Error("Wallet is still the same"))
    })
}

createOrder()
.then(function(data){
    console.log(data);
    return data;

})
.then(function(data){
    paymentApi(data);
    return data;
})
.then(function(data){
    showOrderSummary(data);
    return data
})
.then(function(data){
    updateWallet(data);
})
.catch(function(err){
    console.log(err.msg)
})