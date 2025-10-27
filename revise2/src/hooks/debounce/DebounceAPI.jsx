import React from 'react'

const DebounceAPI = () => {
    function callAPI(){
        console.log("APi Hit");
    }

    const betterFunc = debounceThis(callAPI, 1000);

    function debounceThis(apiFunc, delay){
        let timer;
        return function(){
            let context = this,
            args = arguments

            clearTimeout(timer);
            timer = setTimeout(() => {
                apiFunc.apply(context,args)
            }, delay)
        }
    }
  return (
    <div>
        <input onKeyPress={betterFunc} />
    </div>
  )
}

export default DebounceAPI