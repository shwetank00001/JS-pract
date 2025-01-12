function showData(){
    return new Promise  (( resolve, reject ) => {
        const value = true
        if(value){
            const a = { id: "1", name: "Shwetank"}
            resolve(a)
        }
        else{
            reject( new Error("Cant access"))
        }

    })
}

async function getData(){
    try {
        const data = await showData()
        console.log(data)
    } catch (error) {
        console.log("Error:-", error)
    }
}

getData()