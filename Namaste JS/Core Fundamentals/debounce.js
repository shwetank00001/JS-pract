const getData = () => {
    console.log("Fetching Data...")
}

function debounce(apiCall, delay){
    let timer;
    return function (){
        let context = this;
        let arg = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => function(){
            apiCall.apply(context,arg)
        }, delay)

    }
}


const betterFunc = debounce(getData, 300);
