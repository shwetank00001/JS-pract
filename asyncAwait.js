function addData(){
    return new Promise((resolve, reject) => {
        let test = false
        if(test){
            const data = "shwetank"
            resolve(data)
        }
        else{
            reject(new Error("A new Error"))
        }
    })
}

async function getData(){
    try{
        const newData = await addData()
        console.log("Data is", newData)
    }
    catch(err){
        console.log("Error is" , err)
    }
}

getData()