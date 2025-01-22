function a(){
    var x = 20;
    var y = 60;
    function b(){
        console.log(x)
    }
    return b
}

const c = a()
c()
