let p = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Promise Resolved");
    }, 4000);
})

async function getData(){
    console.log("1234")
    let data = await p;  // js waits here and waits for the promise in line 1 to get resolved, it takes 4secs
    console.log("Data is =>", data);
    console.log("5678");

}

console.log("Code printed above the function")
getData();
console.log("Code printed below the function");
