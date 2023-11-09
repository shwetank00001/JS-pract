function showData(){
    return new Promise( (resolve, reject) => {
        const a = true;
        if(a){
            const data = {"id": 1, "name":"Shwetank"}
            resolve(data)
        }

        else {
            reject(new Error("New error"))
        }
    })
}

async function getData(){
    try {
        const value = await showData()
        console.log(value)
    } catch (error) {
        console.log(error)
    }
}

getData()