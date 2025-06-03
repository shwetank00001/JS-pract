function get(){
    return new Promise((resolve, reject) => {
        let value = true;
        if(value){
            setTimeout(function(){
                resolve(console.log("Promise Resolved!"));
            }, 4000);
            console.log("Shwetank");

        }
        else reject(new Error("Promise Rejected!"))
    })
}

get()
.then(function(data){
    console.log(data)
})
.catch(err => console.log(err))