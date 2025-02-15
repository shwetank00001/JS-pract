import React from 'react'
import { dataMain } from './data'
import Modal from './Modal'

const RedBasics = () => {
    const [singlePerson, setSingle] = React.useState([])

    // WIll replace these two and use the in a reducer fn
    // const [people, setPeople] = React.useState(dataMain)
    // const [showModal, setShow] = React.useState(false)
    const defaultState= {
        people: dataMain,
        showModal: false,
        modalContent: "Hi"
    }
    let reducer = function(state,action){
        if(action.type ==="ADD"){
            const newValue = [...state.people, action.payload]
            return {
                people: newValue,
                showModal: true,
                modalContent: "Item added!"
            }
        }
        if (action.type === "DEL"){
            const newValue = state.people.filter(function(item){
                return  item.id !== action.payload
            })
            return {
                people: newValue,
                showModal: true,
                modalContent: "Item Deleted!"
            }
        }
    }
    const [state, dispatch] = React.useReducer(reducer, defaultState)

    let remove= function(idParam){
        dispatch({type: "DEL", payload:idParam})
    }

    const ele = state.people.map(function(item){
        return (
            <div key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => remove(item.id)}>remove</button>
            </div>
        )
    })

    let handleSubmit = function(e){
        e.preventDefault()
        const newData = {
            id: new Date().getTime(),
            name: singlePerson
        }

        dispatch({type: "ADD", payload: newData})
        // setPeople(function(item){
        //     return [...item, newData]
        // })

    }
  return (
    <div>
        {state.showModal && <Modal modalContentProp = {state.modalContent}/>}
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a name' name="singlePerson" value={singlePerson} onChange={(e) => setSingle(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        {ele}
    </div>
  )
}

export default RedBasics