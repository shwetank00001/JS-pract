
const git = "https://api.github.com/users/shwetank00001"

const promise = fetch(git);

console.log(promise)

promise.then(function (value123){
    console.log(value123)
})
