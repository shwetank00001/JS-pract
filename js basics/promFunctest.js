function showData(){
    return new Promise(( resolve, reject ) => {
        const a = true
        if(a){
            const data = {id : "1", name: "Shwetank Mishra"}
            resolve(data)
        }
        else 
        reject(new Error("NONE FOUND"))
    })
}

showData().then( (msg) => {
    console.log(msg)
}).catch( (err) => {
    console.log(err)
})