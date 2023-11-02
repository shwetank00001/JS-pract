function showData(){
    return new Promise( (resolve, reject) => {
        const a = true
        if(a){
            const data = { id: 1, name: "Shwetank"}
            resolve(data)
        }
        else{
            reject(new Error("CANT BE DISPLAYED"))
        }
    })
}
async function getData(){
    try {
        const data = await showData()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()