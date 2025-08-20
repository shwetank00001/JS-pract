import React, { useState } from 'react'

const Debounce = () => {

    const [details, setDetails] = useState('');

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
  return (
    <div>
        <h3>Debounce</h3>
        <input onKeyDown={betterFunc} placeholder='search for items' value={details} onChange={(e) => setDetails(e.target.value)}  />
    </div>
  )
}

export default Debounce