let cart = ["I", "Will", "get a GOOD JOBB"];

function cartApi(){
    return new Promise(function(resolve, reject){
        if(cart){
            resolve(cart)
        }
        reject (new Error("The cart data failed to come from cart API.!!"))
    })
}


function payment (data){
    return new Promise(function(resolve, reject){
        if(data){
            resolve (console.log("Data has been received thru promise chaining"))
        }
        reject (new Error("failed to get Data"))
    });
}


cartApi()
.then((data)=>{
    console.log(data)
    return data;
})
.then((data) => {
    payment(data);
    return data;
})