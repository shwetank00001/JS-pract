function outer(param){
    const a = 5;
    function inner(){
        console.log(a, param)
    }
    return inner
}

const z = outer("Shwetank Revision");
z();

//this is an example of currying with closures !!

