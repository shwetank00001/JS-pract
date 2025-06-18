import React, {useEffect, useState} from 'react';
import { nameList } from './data';

export default function FakeData(){

    const url = "https://jsonplaceholder.typicode.com/todos";
    const [myData, setData] = useState([]);


    useEffect(() => {
        async function allData(){
            try {
                const data = await fetch(url);
                const resp = await data.json();
                setData(resp);
                console.log(resp)
            } catch (error) {
                console.log("Failed to fetch!")
            }
        }
        allData();
    }, [])

    const dataList = myData.map(function(item){
        return (
            <div>
                <h2>{item.id}</h2>
                <p>{item.title}</p>
            </div>
        )
    })


    return (
        <>
        <p>This is fake Data</p>
        {dataList}
        </>
    )
}
