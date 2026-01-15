import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {

    const [act, setAct] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch(url);
                const response = await data.json();
                setAct(response);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [])

    const ele = act.map((item) => {
        return ( 
            <div>
                <h5>{item.title}</h5>
            </div>
        )
    })
  return (
    <div>
        {ele}
    </div>
  )
}

export default UseFetch