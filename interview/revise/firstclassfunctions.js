function x(param1){
    console.log("this is x")
    param1()
}
//callback fn   
x(function y(){
    console.log("This is Y")
})