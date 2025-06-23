import { useReducer, useState } from "react";

export default function Notes(){

    function reducer(state, action){
        if(type === "ADD"){
            const newStateValue = [...state.peopleList, action.payload];
            return {
                ...state,
                peopleList: [newStateValue]
            }
        }
    }

    const defaultState = {
        peopleList : [],

    }
    
    const [state, dispatch] = useReducer(defaultState, reducer);
    const [inputPeople, setInputData] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        const newData = {
            id: new Date().getTime(),
            peopleName: inputPeople
        }
        dispatch({type:"ADD", payload: newData})
    }
    
    const ele = state.peopleList.map(function(item){
        return (
            <>
                <h3>{item.peopleName}</h3>
            </>
        )
    })
    return (
        <>
            <h1>A notes app with useReducer</h1>
            <form onClick={handleSubmit}>
                <textarea value={state.peopleList} onChange={e => setInputData(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}