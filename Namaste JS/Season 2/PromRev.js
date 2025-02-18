const cart = ["I", "will clear", "EY Today"]

const cartApi = function(){
    return new Promise((resolve, reject) => {
        if(cart){
            resolve(cart)
        }
        else reject( new Error("Cart failed to fetch"))
    })
}

const paymentApi = function(data){
    return new Promise((resolve, reject)=> {
        if(data){
            resolve(console.log("Interview has been cleared"))
        }
        else reject (new Error("Interview still cleared"))
    })
}

cartApi()
.then(function(data){
    console.log(data)
    return data;
})
.then(function(data){
    return paymentApi(data)
})
.catch((err) => {
    console.log(err)
})