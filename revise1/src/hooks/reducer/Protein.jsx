import React, { useReducer, useState } from 'react'

const Protein = () => {
    const [proteinInput, setInput] = useState('');

    function reducer(state, action){
        if(action.type === "ADD"){
            const newValue = [...state.protein, action.payload];
            return {
                protein : newValue
            }
        }
    }

    const defaultState={
        protein:[]
    }
    const [state, dispatch] = useReducer(reducer, defaultState);

    function addIt(e){
        e.preventDefault()
        console.log(proteinInput);

        const newData = {
            id: new Date().getTime(),
            proteinItem: proteinInput
        }
        dispatch({type: "ADD", payload: newData})
    }


    const ele = state.protein.map(function(item){
        return (
            <div>
                {item.proteinItem}
            </div>
        )
    })
  return (
    <div>
        <h1>My Protein App in JSX</h1>
        <form>
            <input placeholder='add' value={proteinInput} onChange={(e) => setInput(e.target.value)}  />
            <button onClick={addIt}>Add</button>

        </form>
        {ele}
    </div>
  )
}

export default Protein