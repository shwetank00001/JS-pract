import React, { act, useReducer, useState } from "react";


const ReducerFile = () => {

    const defaultState = {
        todo: [],
    }

    function reducer(state, action){
        if(action.type === "add"){
            const newData = [...state.todo, action.payload]
            return {
                todo: newData
            }
        }

        if(action.type === "del"){
            const newData = state.todo.filter(function(item){
                return item.id !== action.payload
            })
            return {
                todo: newData
            }
        }
    }
    const [state, dispatch] = useReducer(reducer,defaultState);

    const [dataEntered, setDataEntered] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(dataEntered);
        const newData = {
            id: new Date().getTime(),
            todoValue : dataEntered
        }

        dispatch({type: "add", payload: newData});
    }
    console.log("dssd", state.todo);

    let handleDelete = function(idParam){
        dispatch({type:"del", payload: idParam})
    }

    const ele = state.todo.map(function(item){
        return (
            <div key={item.id}>
                <h1>{item.todoValue}</h1>
                <button onClick={() => {handleDelete(item.id)}}>delete</button>
            </div>
        )
    })
    return (
        <div>
            <h1>Todo File</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="todo here" value={dataEntered} onChange={e => setDataEntered(e.target.value)} />
                <button type="submit">add</button>
            </form>
            <div>
                {ele}
            </div>
        </div>
    )
}

export default ReducerFile