// lets calculate area, circum, diam of a circle with a modular approach
// Higher Order functions are which take a function as an arguement.

const radius = [2,3,4,5]


function area(r){
    return Math.PI * r * r
}

function calc(radParam, funcParam){
    let value = []
    for(let i =0; i<radParam.length; i++){
        value.push(funcParam(radParam[i]))
    }
} 
console.log(calc(radius, area))

// function area(radParam){
//     let value = [];
//     for(let i =0; i<radParam.length; i++){
//         value.push(Math.PI * radParam[i] * radParam[i])
//     }
//     return value
// }
// function circumference(radParam){
//     let value = [];
//     for(let i =0; i<=radParam.length; i++){
//         value.push(2 * Math.PI * radParam[i])
//     }
//     return value
// }
// function diametre(radParam){
//     let value = [];
//     for(let i =0; i<=radParam.length; i++){
//         value.push(2 * radParam[i])
//     }
//     return value
// }

// console.log(area(radius))
// console.log(circumference(radius))
// console.log(diametre(radius))