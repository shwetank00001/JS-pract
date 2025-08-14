const p1 = new Promise((resolve, reject) => {
    let cart = true;
    if(!cart){
        const data= {id: 1, name:"Ayush"}
        resolve(data)
    }

    else reject(new Error("Failed to fetch"))
})

async function fetchP(){
    let data = await p1;
    console.log(data);
}
fetchP()