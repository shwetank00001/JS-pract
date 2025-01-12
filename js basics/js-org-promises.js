function toUpp(s){
    return new Promise ( (resolve, reject ) => {
        if(s == null){
                    reject(new Error("No string received!"));

        }
                    let a = s.toUpperCase();
                    resolve(a);

    })
}


toUpp("yoo").then( (msg) => {
    console.log(`${msg}`)
}).catch((err) => console.log(err))

toUpp(null).catch((x) => {
    console.log("No string received!");
});