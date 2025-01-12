function test(){
    return new Promise((resolve, reject) => {
        let value = true
        if(value){
            const data = {id: 1, name : "Shwetank"}
            resolve(data)
        }
        else{
            reject ( new Error("Cant  get the value"))
        }
    })
}

test().then((msg)=> {
    console.log("Data is :", msg)
}).catch((err) => {
    console.log("Error is ", err)
})