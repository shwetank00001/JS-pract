function outest(){
    var c = 20
    function outer(b){
    var a = 10;
    function inner(){
        console.log(a, b, c)
    }
    return inner
}
return outer
}
// outer()()
var close = outest()("Hi")
close()