import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const WorkingFile = () => {

    const [id, setId] = useState(1)
    const [on, setOn] = useState(true)

    const {data, isPending, refetch, isFetching, error} =  useQuery({
        queryKey : ['users', id],
        queryFn : () => getData(id) ,
        enabled: on
    });

    console.log(data)

    if(error){
        alert("Something went wrong!")
    }
  return (
    <div>
        {isPending ? "DATA IS LOADING...." : data.map(function(item){
        return (
            <>
                <h1>{item.id}</h1>
                <h2>{item.title}</h2>
            </>
        )
    })
}
        <button onClick={() => {refetch( )}}>Refresh</button>
        <button onClick={() => setId(item => item + 1)}>Increment id</button>
    </div>
  )
}

async function getData(id){
    const respone = await fetch(`https://fakestoreapi.com/products?limit=${id}`);
    return await respone.json();
}

export default WorkingFile