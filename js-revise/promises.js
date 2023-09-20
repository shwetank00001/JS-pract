function getData(){
    return new Promise( (resolve,reject ) => {
        const value = true
        if(!value){
            const data = {"id" : 1, "name" : "shwetank"}
            resolve(data)
        }
        else
        reject(new Error("New error while doing this"))
    })
}

async function showData(){
    try {
        const newData = await getData()
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}

showData()