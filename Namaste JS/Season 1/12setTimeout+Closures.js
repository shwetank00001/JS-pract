function x(){
    for (var i = 1; i <=5; i++){
        setTimeout(function(){
            console.log(i)
            i++ 
        }, i *1000)
    }


}


function y(){
    for(let i=0; i<6; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
y()