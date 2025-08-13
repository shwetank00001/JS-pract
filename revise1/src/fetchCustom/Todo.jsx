import React from 'react';
import useFetch from './useFetch';

export default function Todo(){
    const url = "https://dummyjson.com/todos";

    const {fetchedData} = useFetch(url);

    const allTodos = fetchedData.todos || [];

    const ele = allTodos.map(function(item){
        return (
            <div>
                <h4>{item.todo}</h4>
            </div>
        )
    });

    console.log("Todo app", allTodos)
    return (
        <div>
            <h1>Todos</h1>
            {ele}
        </div>
    )
}