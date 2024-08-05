console.log(x);
var x = 10;
console.log(x);

// console.log(y)
// let y= 20

a(); // fn hoisting
function a() { 
    if (true) {
        console.log("running");
    }
}
