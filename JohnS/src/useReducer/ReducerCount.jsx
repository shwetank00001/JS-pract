import React, {useReducer} from 'react'

const ReducerCount = () => {
    let reducer =function(state, action){
        if(action.type === "ADD"){
            return {
                count: state.count+1
            }
        }
    }

    const defaultState = {
        count: 0
    }

        const [state, dispatch] = useReducer(reducer, defaultState)

    function add(){
        dispatch({type: "ADD"})
    }

  return (
    <div>
        <h3>Count: {state.count}</h3>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default ReducerCount