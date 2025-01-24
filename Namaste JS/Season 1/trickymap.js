const users = [
    {firstName: "Shwetan", lastName: "Mishra", age: 25},
    {firstName: "fhfhfhf", lastName: "ryryrjljllj", age: 25},
    {firstName: "cxvxvxbmbm", lastName: "adafaf", age: 62},
    {firstName: "adi", lastName: "mota", age: 71},
]

const ele = users.map(function(item){
    return item.firstName +' '+ item.lastName
})
console.log(ele)

const reduce1 = users.reduce(function(acc, curr){
    acc
})