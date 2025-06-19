import {useEffect, useState} from 'react'
import useFetch from './useFetch';

const Custom = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const {commonData} = useFetch(url);

    const todoList = commonData.map(function(item){
        return (
            <div>
                <p>{item.id}</p>
            </div>
        )
    })

  return (
    <div>
        {todoList}
    </div>
  )
}

export default Custom