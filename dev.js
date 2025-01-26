function a(){
    let aVar = 10
    function b(){

        let bVar = 20;
        console.log("b")

        function c(){
            console.log(aVar, bVar )
        }
        return c;
    }
    return b;
}

a()()