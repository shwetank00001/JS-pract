import React, {useState, useEffect} from 'react'

export function UseFetch(url){

    const [store, setStore] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       getData()
       setLoading(false)
       return {loading, store }
    }, [url])

    async function getData(){
        const data = await fetch(url);
        const response = await data.json();
        setStore(response)
        console.log(response)
    }
    const ele = store.map(function(item){
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        )
    })
  return (
    <div>UseFetch</div>
  )
}