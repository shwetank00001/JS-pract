// function x(){
//     let a = 10;
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z = x();
// console.log(z)
// z()

function x(){
    let a = 10;
    function y(){
        let b= 20;
        function z(){
            console.log(a,b)
        }
        return z
    }
    return y
}
const w = x()
console.log(w)