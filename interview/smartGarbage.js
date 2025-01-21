function garbage(){
    var x = 10;
    var z= 20;
    function child(){
        console.log(x)
    }
    return child
}

garbage()
