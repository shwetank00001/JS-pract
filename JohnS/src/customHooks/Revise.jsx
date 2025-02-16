import { useState, useReducer, act } from "react"
import React  from 'react'
import { fakeData } from "./data"

export default function UseFetch() {
    // const [peopleList, setList] = useState(fakeData);
    const [newPerson, setNew] = useState('')

    const defaultState = {
        peopleList: fakeData,
    }

    function reducer(state, action){
        if(action.type === "add"){
            const newValue = [...state.peopleList, action.payload]
            return {
                peopleList: newValue
            }
        }
        if(action.type === "remove"){
            const newValue = state.peopleList.filter(function(item){
                return item.id !== action.payload
            })
            return {
                peopleList: newValue
            }
        }
    }


    const [state, dispatch] = useReducer(reducer, defaultState)

    function handleSub(e){
        e.preventDefault()
        const newData = {
            id : new Date().getTime(),
            name: newPerson
        }
        dispatch({type: "add", payload: newData})
    }
    //     const newData = {
    //         id: new Date().getTime(),
    //         name: newPerson
    //     }
    //     setList(function(item){
    //         return [...item, newData]
    //     })
    // }

    let remove = function(idParam){
        // const newdata = state.peopleList.filter(function(item){
        //     return item.id !== idParam
        // }) 
        // setList(newdata)
        dispatch({type:"remove", payload: idParam})
    }
    
  return (
    <div>
        <form onSubmit={handleSub}>
            <input type="text" name="newPerson" value={newPerson} onChange={(e) => setNew(e.target.value)} />
            <button type="submit">Add</button>
        </form>
        {
            state.peopleList.map(function(item){
                return (
                    <div key= {item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => remove(item.id)}>-</button>
                    </div> 
                )
            })
        }
    </div>
  )
}

