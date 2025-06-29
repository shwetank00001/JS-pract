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

// const output = users.reduce(function(acc, current){
//     if(current.age === acc){
//         acc = current.fname
//     }
//     return acc
// }, 28);

const output = users.reduce(function(acc, current){
    if(current.age){
        acc = acc +1;
    }
}, { } );

console.log(output)