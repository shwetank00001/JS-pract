function garbage(){
    var x = 10;
    function child(){
        console.log(x)
    }
    return child
}

garbage()
