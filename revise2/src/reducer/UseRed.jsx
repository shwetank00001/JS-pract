import React, { useReducer, useState } from 'react'

const UseRed = () => {

    const [todo, setTodo] = useState([])

    function reducer(state, action){
        if(action.type ==="Add"){
            const newData = [...state.value, action.payload];
            return {
                value: newData
            }

        }

    }
    const defaultState = {
        value: []
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log(todo);
        const newData = {
            id: new Date().getTime(),
            newValue : todo
        }

        dispatch({type: "Add", payload: newData})
    }

    const [state, dispatch] = useReducer(reducer, defaultState);

    const ele = state.value.map(function(item){
        return (
            <div>
                <h3>{item.newValue}</h3>
            </div>
        )
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='add a todo' type='text' value={todo} onChange={e => setTodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        {ele}
    </div>
  )
}

export default UseRed