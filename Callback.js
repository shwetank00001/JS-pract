// What are callback functions?

setTimeout(function(){
    console.log("Timer")
}, 3000)
function x(param1){
    console.log("This is X")
    param1()
}

    x(function y(){
        console.log("This is Y")
    })

// EVENT LISTENERS IN JS
// let count = 0
// document.getElementById("clickMe").addEventListener("click",function handleClick(){  // callback
//     console.log("Button clicked", count++)
//     })
// LETS make the above code in closure aka data hiding


function closureEventListeners(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function handleClick(){  // callback
        console.log("Button clicked", count++)
        })
}

closureEventListeners()
