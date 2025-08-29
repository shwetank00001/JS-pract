import React, { useReducer, useState } from 'react'
import ShowModal from './ShowModal';

const Red = () => {

    const [inputData, setData] = useState('');

    const reducer =(state, action)=> {
        if(action.type === "ADD"){
            const newValue = [...state.todo, action.payload];
            return{
                todo : newValue,
                modalText: "New Value Entered",
                isModal: true
            }
        }

        if(action.type === "DEL"){
            const newValue = state.todo.filter(function(item){
                return item.id !== action.payload
            })

            return {
                todo: newValue,
                modalText:"Deleted",
                isModal : true
            }
        }
    }

    const defaultState ={ 
        todo: [],
        modalText: "",
        isModal: false
    }

    const [state, dispatch] = useReducer(reducer, defaultState);

    function handleAdd(e){
        e.preventDefault();
        const newData = {
            id: new Date().getTime(),
            todo: inputData
        }
        dispatch({type:"ADD", payload : newData});

    }

    function handleDelete(idParam){
        dispatch({type: "DEL", payload: idParam})
    }

    const ele  = state.todo.map(function(item){
        return (
            <div key={item.id}>
                <h3>{item.todo}</h3>
                <button onClick={() => {handleDelete(item.id)}}>-</button>
            </div>
        )
    })

  return (
    <div>
        <form onSubmit={handleAdd}>
            <input placeholder='todo..' value={inputData} onChange={e => setData(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
        
        {ele}
    </div>
  )
}

export default Red