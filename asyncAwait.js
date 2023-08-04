function showData(){
    return new Promise(( resolve, reject ) => {
        let value = false
        if(value){
            const data = { id: 1, name: "Shwetank" }
            resolve(data)
        }
        else{
            reject(new Error("cant be fetched"))
        }
    })
}

async function getData(){
    try {
        const newData = await showData()
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}

getData()