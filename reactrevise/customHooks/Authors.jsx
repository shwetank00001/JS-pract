import React, { useEffect, useState } from 'react'

const Authors = () => {
    const url = "https://fakerestapi.azurewebsites.net/api/v1/Authors";
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
        getData()
    }, [])

    console.log(act);
        const ele = act.map((item) => {
        return ( 
            <div>
                <h5>{item.firstName}</h5>
            </div>
        )
    })
  return (
    <div>{ele}</div>
  )
}

export default Authors