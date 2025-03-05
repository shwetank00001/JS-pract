import React from 'react'
import { firestore } from './Firebase'
import {addDoc, collection} from "@firebase/firestore" 

const FirebaseLearning = () => {
    const inputRef = React.useRef(null)
    const [value, setvalue] = React.useState([])

    const dbData = collection(firestore, "myTodosData");


    const remove = (idParam) => {
        const newItem = value.filter(function(item){
            return item.id !== idParam
        })
        setvalue(newItem)
    }
    const renderValue = value.map(function(item){
        return (
            <div key= {item.id}>
                <h4>{item.name}</h4>
                <button onClick={() => remove(item.id)}>Del</button>
            </div>
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputRef.current.value)
        const newValue = {
            id: new Date().getTime(),
            name: inputRef.current.value
        }
        setvalue(function(item){
            return [...item, newValue]
        })

        try {
            addDoc(dbData, newValue)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        inputRef.current.focus()
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Send to firebase DB</label>
            <input className='border-2 border-blue-500 p-2 rounded-md' type='text' ref={inputRef} />
            <button type='submit'>Submit</button>
        </form>
        {renderValue}
    </div>
  )
}

export default FirebaseLearning