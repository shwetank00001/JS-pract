const url = 'https://jsonplaceholder.typicode.com/todos/1'
const prom5 = fetch(url)


prom5.then(response => response.json()).then(json => console.log(json))

function prom(){
    return new Promise(function(resolve, reject){
        let value = true;
        if(value){
            const ab = ['Hi This is a promise .then and .catch']
            resolve( "The value", ab);
        }
        else 
        reject (new Error("this is an error"))
    })
}

prom()
.then(data => console.log(data))
.catch(err => console.log(err))