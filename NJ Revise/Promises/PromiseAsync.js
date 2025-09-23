const abc = true;
function getData(){
    return new Promise((resolve, reject) => {
        if(abc){
            const data = {id: 21, name: "Shwetank", age: 26, address: "Shwetank"}
            resolve(data);
        }
        reject(new Error("Hi, the above data can not be fetched"));
    })
}
getData().then((res) => {
    console.log("This is the data that's fetched using .then", res)
})
.catch((err) => {
    console.log("Catching all the errors", err);
})