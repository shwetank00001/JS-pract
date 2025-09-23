function gp(dataParam){
    const a = 10;
    function y(){
        console.log(a, dataParam);
    }
    return y
}

const z = gp("This is the GP function used with function currying!!");
z()