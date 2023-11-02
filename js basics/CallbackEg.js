function useCall(callback){
    callback("1")
    callback("2")
    callback("3")
}

function callback(n){
    console.log(n)
}

useCall(callback)