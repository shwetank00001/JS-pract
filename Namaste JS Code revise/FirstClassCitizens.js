function x(paramY){
    console.log("printing x");
    paramY()
}

x(function y(){
    console.log("printing y")
})


// x is  a Higher Order function
// y is a callback function
