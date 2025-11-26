import React from 'react'
import useFetch from './useFetch';

const Quotes = () => {

    const url = 'https://dummyjson.com/quotes';
    const {allData} = useFetch(url);
    const finalQuotes = allData?.quotes || []

    const ele = finalQuotes.map(function(item){
        return (
            <div key={item.id}>
                <h4>{item.quote}</h4>
            </div>
        )
    })

  return (
    <div>
        {ele}
    </div>
  )
}

export default Quotes