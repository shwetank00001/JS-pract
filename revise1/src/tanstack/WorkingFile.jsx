import React from 'react'
import { useQuery } from '@tanstack/react-query'

const WorkingFile = () => {

    const {data, isPending, refetch, isFetching, error} =  useQuery({
        queryKey : ['users'],
        queryFn : getData
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
                <h2>{item.date}</h2>
            </>
        )
    })
}
        <button onClick={() => {refetch( )}}>Refresh</button>
        <button>Increment id</button>
    </div>
  )
}

async function getData(){
    const respone = await fetch('https://fakestoreapi.com/carts/1');
    return await respone.json();
}

export default WorkingFile