function testintPromise(){
    return new Promise((resolve, reject) => {
        let a= true
        if(a){
            const data = {id: "1", name: "Mishra"}
            resolve(data)
        }

        reject(new Error("No data"))
    })
}

async function printVals(){
    try {
        const value = await testintPromise()
        console.log(value)
    } catch (error) {
        console.log(error)
    }
}

printVals()