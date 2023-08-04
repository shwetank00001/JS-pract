function fetchData(){
    return new Promise( (resolve, reject ) => {
        const value = false
        if(value){
            const name = "Shwetank"
            resolve(name)
        }
        else{
            reject( new Error("None found"))
        }
    })
}

fetchData().then( (newData) => {
    console.log(newData)
}).catch( (msg) => {
    console.log(msg)
})