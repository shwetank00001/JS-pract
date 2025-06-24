import { useReducer, useState } from "react";

export default function Notes(){

    function reducer(state, action){
        if(action.type === "ADD"){
            const newStateValue = [...state.peopleList, action.payload];
            return {
                peopleList: newStateValue
            }
        }
        else if(action.type === "DELETE"){
            const newStateValue = state.peopleList.filter(function(item){
                return item.id !== action.payload;
            })
            return {
                peopleList: newStateValue
            }
        }

    }

    const defaultState = {
        peopleList : [],

    }
    
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [inputPeople, setInputData] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        const newData = {
            id: new Date().getTime(),
            peopleName: inputPeople
        }
        dispatch({type:"ADD", payload: newData});
        console.log(inputPeople)
    }

    const remove = (idParam) => {
        dispatch({type:"DELETE", payload: idParam})
    }
    
    const ele = state.peopleList.map(function(item){
        return (
            <div key= {item.id}>
                <p >{item.peopleName}</p>
                <button onClick={() => {remove(item.id)}}>-</button>
            </div>
        )
    })
    return (
        <>
            <h1>A notes app with useReducer</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={inputPeople} onChange={e => setInputData(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            {ele}
        </>
    )
}