import React , {useState, useReducer }from 'react'
import { dataMain } from './data'
import Modal from './Modal'

const ReducerFunc = () => {
    const [name, setName] = useState('')
    let reducer = function(state, action){
        if(action.type ==="add"){
            const newValue = [...state.peopleList, action.payload]
            return {
                peopleList: newValue,
                showModal: true,
                modalContent: "Item Added!"
            }
        }
        if(action.type ==="del"){
            const newValue = state.peopleList.filter(function(item){
                return item.id !== action.payload
            })
            return {
                peopleList: newValue,
                showModal: true,
                modalContent: "Item Deleted!"
            }
        }
    }
    
    const defaultState = {
        // each key behaves like an state
        peopleList: dataMain,
        showModal: false,
        modalContent : ""
    }
    // dispatch = in order to affect our state, we dispatch an action for it.
    const [state, dispatch] = useReducer(reducer, defaultState)  // reducer is a function

    let rem = function(itemParam){
        dispatch({type:"del", payload: itemParam})
    }

    const ele = state.peopleList.map(function(item){
        return (
            <div key= {item.id}>
                {item.name}
                <button onClick={() => rem(item.id)}>-</button>
            </div>
        )
    })

    let handleSubmit = (e) => {
        e.preventDefault()
        const newData = { id: new Date().getTime(), name: name}
        // setList(function(item){
        //     return [...item, newData]
        // })
        dispatch({type: "add", payload: newData})
    }
  return (
    <div>
        {state.showModal && <Modal modalProp = {state.modalContent}/>}
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        {ele}
    </div>
  )
}

export default ReducerFunc