const url = "https://api.escuelajs.co/api/v1/users";

const promise =  fetch(url);

promise.then((data) => {
    const resp = data.json();
    console.log(resp)
})