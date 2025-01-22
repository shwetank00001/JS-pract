console.log("Start")

setTimeout(function cb(){
    console.log("Callback")
}, 5000)
setTimeout(function cb(){
    console.log("Callback1")
}, 0)

console.log("End")

// const blockTime = 5000; // Time in milliseconds
// const startTime = Date.now();

// while (Date.now() - startTime < blockTime) {
//     // Busy-wait: The event loop is blocked here
// }

// console.log("BLocked")
