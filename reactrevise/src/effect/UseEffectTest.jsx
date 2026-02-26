import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const [allData, setData]= useState([])
    
    useEffect(() => {
        async function fetchData(){
            try {
                const apiData = await fetch(url);
                const data = await apiData.json();
                setData(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    console.log(allData);
    
    const ele = allData.map(function(item){
        return (
            <div keyy = {item.id}>
                <h3>{item.title}</h3>
            </div>
        )
    })
  return (
    <div>
        {ele}
    </div>
  )
}

export default UseEffectTest