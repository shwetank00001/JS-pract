function getDetails(){
    console.log("Data fetched!")
}

function debounceFunction(funcParam, delay){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            funcParam.apply((context, args))
        }, delay);
    }
}


const latest = debounceFunction(getDetails, 500)