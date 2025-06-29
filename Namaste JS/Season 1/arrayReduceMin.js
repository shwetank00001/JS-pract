const users = [
    {
        fname: "Shwetank",
        age: 26
    },
    {
        fname: "Kushal",
        age: 21
    },
    {
        fname: "Ayaz",
        age: 29
    },
    {
        fname: "Jathin",
        age: 28
    },
    {
        fname: "Arup",
        age: 26
    },
];

const value = users.reduce(function(acc, current){
    if(current.age < acc){
        acc = current.age;
    }
    return acc
}, users[0].age);

console.log(value)